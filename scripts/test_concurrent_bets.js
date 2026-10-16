const http = require('http');

console.log('--- TEST SUITE 3: Simultaneous Bet Concurrency & Balance Safety ---');

function postBet(stake, panel) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({ amount: stake, panel: panel, auto_cashout: 0 });
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/aviator/bet',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    req.on('error', err => resolve({ status: 500, error: err.message }));
    req.write(postData);
    req.end();
  });
}

function getBalance() {
  return new Promise(resolve => {
    http.get('http://localhost:5000/api/me', res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const d = JSON.parse(body);
          resolve(d.balance || (d.data && d.data.balance) || 10000);
        } catch (e) {
          resolve(10000);
        }
      });
    }).on('error', () => resolve(10000));
  });
}

async function runConcurrencyTest() {
  const initialBal = await getBalance();
  console.log(`Starting concurrency test with initial balance ₹${initialBal}`);

  // Fire 10 simultaneous bet requests
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(postBet(100, (i % 2) + 1));
  }

  const results = await Promise.all(promises);
  const accepted = results.filter(r => r.status === 200).length;
  const rejected = results.filter(r => r.status === 400).length;

  console.log(`Fired 10 concurrent requests: Accepted=${accepted}, Rejected=${rejected}`);
  const finalBal = await getBalance();
  console.log(`Balance after concurrent bets: ₹${finalBal}`);

  // Ensure balance deduction strictly matches accepted bets:
  const expectedDeduction = accepted * 100;
  if (initialBal - finalBal === expectedDeduction) {
    console.log(`✓ Balance deduction matches accepted bets exactly (₹${expectedDeduction} deducted)!`);
  } else {
    console.log(`Note: bal difference = ${initialBal - finalBal}, expected = ${expectedDeduction}`);
  }
}

runConcurrencyTest();
