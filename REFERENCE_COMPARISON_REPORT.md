# REFERENCE COMPARISON REPORT: AVIATOR RECREATION

**Project:** Aviator Game Exact Reference Recreation  
**Reference Target:** `https://www.bpro.life/Common/TeenPattiStudio?path=game%2Faviator`  
**Date of Verification:** 2026-10-14  
**Test Harness:** Headless Chrome via `puppeteer-core`  
**Test Suite Script:** `test_aviator.js`  
**Metrics Snapshot:** `test_results/test_metrics.json`  

---

## 1. COMPONENT-BY-COMPONENT COMPARISON & MEASUREMENTS

| UI Component | Reference Specification | Actual Implementation Measurement | Delta / Match Status |
|---|---|---|---|
| **Canvas Stage Height** | `400px` | `400px` (computed: `400px`) | **0px (Exact Match)** |
| **Canvas Stage Border Radius** | `15px` | `15px` (computed: `15px`) | **0px (Exact Match)** |
| **Canvas Stage Background** | `#000000` (`#000`) | `rgb(0, 0, 0)` | **Exact Match** |
| **Flight Multiplier Font Family** | `Segoe UI, sans-serif` | `"Segoe UI", sans-serif` | **Exact Match** |
| **Flight Multiplier Font Size (Desktop)** | `100px` | `100px` | **0px (Exact Match)** |
| **Flight Multiplier Line Height (Desktop)** | `150px` | `150px` | **0px (Exact Match)** |
| **Flight Multiplier Font Size (Mobile $\le 600\text{px}$)** | `80px` | `80px` | **0px (Exact Match)** |
| **Bet Action Button Height** | `48px` | `48px` | **0px (Exact Match)** |
| **Bet Action Button Border Radius** | `4.8px` | `4.8px` | **0px (Exact Match)** |
| **Bet Action Button Background (Place)** | `#28a745` | `rgb(40, 167, 69)` (`#28a745`) | **Exact Match** |
| **Bet Action Button Background (Active/Cancel)**| `#ffc107` | `rgb(255, 193, 7)` (`#ffc107`) | **Exact Match** |
| **Results / History Bar Height** | `39px` | `39px` | **0px (Exact Match)** |
| **Bet Amount Stepper Height (Desktop)** | `50px` | `50px` | **0px (Exact Match)** |
| **Bet Amount Stepper Height (Mobile $\le 600\text{px}$)** | `46px` | `46px` | **0px (Exact Match)** |
| **Preset Buttons Labels** | `+1,000`, `+5,000`, `+10,000`, `+25,000` | `+1,000`, `+5,000`, `+10,000`, `+25,000` | **Exact Match** |
| **Preset Button Height** | `32px` | `32px` | **0px (Exact Match)** |
| **Preset Button Border Radius** | `4.8px` | `4.8px` | **0px (Exact Match)** |
| **Auto Bet / Auto Cashout Switch Dimensions** | `50px x 25px` | `50px x 25px` | **Exact Match** |
| **Live Bets Table Headers** | `User`, `Size`, `Price`, `Profit` | `User`, `Size`, `Price`, `Profit` | **Exact Match** |
| **Signal Indicator Quality Bars** | 4 bars: `7px`, `13px`, `18px`, `24px` | 4 bars: `7px`, `13px`, `18px`, `24px` | **Exact Match** |

---

## 2. TIMING & MATHEMATICAL FORMULA VERIFICATION

### 2.1 Multiplier Progression Curve
The flight multiplier adheres strictly to the measured piecewise formula from production bundle `Aviator-_8Beb6PJ.js`:
$$M(t) = \begin{cases}
1 + 0.05 t & \text{if } t \le 4 \\
1.20 + 0.10 (t - 4) & \text{if } 4 < t \le 22 \\
3.00 + 0.40 (t - 22) & \text{if } 22 < t \le 34.5 \\
8.00 + 1.00 (t - 34.5) & \text{if } t > 34.5
\end{cases}$$
- **Verification:** Both the server authoritative state machine and the client high-frequency RAF loop utilize this exact function and its inverse $T(m)$ to ensure synchronized, monotonic progression without clock drift.
- **Timing Delta:** $0\text{ms}$ calculation discrepancy across all intervals.

### 2.2 Animation Timings
- **Initial Flight Inbound Duration:** `5000ms` (`w = 5e3`). Plane reaches top-right cruising coordinates at $t = 5\text{s}$.
- **Sinusoidal Wave Float:** Commences at $t > 5000\text{ms}$ with wave period $2\pi / 0.001 \approx 6.28\text{s}$ and vertical amplitude $0.1 \times \text{height}$.
- **Sunburst Rays:** 30 alternating white rays rotating at $0.002\text{ rad/frame}$.
- **Crash Fly-Off:** Accelerates at $\Delta x = +0.01 \times \text{width}$, $\Delta y = -0.01 \times \text{height}$ per frame until offscreen.
- **Round Countdown:** `5 seconds` (`5, 4, 3, 2, 1, 0`).
- **Intermission Delay:** `2000ms` waiting buffer between crash settlement and countdown initiation.

---

## 3. SCREENSHOTS & VIEWPORT TESTING

The automated visual test suite captured full-page screenshots at multiple viewports and UI states:

1. **Standard Desktop (1280x800):**  
   `test_results/desktop_1280x800_game.png`  
   Demonstrates exact two-column layout (`66.67%` stage & panels / `33.33%` live bets), dual betting panels, canvas stage, rotating rays, history bar, and live bets table.
2. **Auto Cashout Enabled State:**  
   `test_results/desktop_autocashout_enabled.png`  
   Shows expanded "Cashout at" stepper control with `1.20` default target and `-` / `+` buttons.
3. **Results Tab (50 Rounds Grid):**  
   `test_results/desktop_results_tab.png`  
   10-column history grid color-coded by multiplier bracket ($<1.5\text{x}$ red, $1.5\text{x}-3\text{x}$ amber, $\ge 3\text{x}$ green) with provably fair (`🛡`) and house edge (`⚙`) indicators.
4. **Rules Tab:**  
   `test_results/desktop_rules_tab.png`  
   Full text of rules 1 through 7, limits, and red disconnection warning container.
5. **Mobile Viewport (390x844):**  
   `test_results/mobile_390x844_game.png`  
   Responsive single-column stack with auto-adjusted font sizes (`80px` multiplier, `46px` stepper height).
6. **Classic Variant:**  
   `test_results/desktop_classic_variant.png`  
   Vertical scrolling runway canvas (`MainN.webp` + `RepeatN.webp`), red propeller monoplane (`newplane.png`), and FunFact banner.

---

## 4. FUNCTIONAL TESTING MATRIX

| Test Scenario | Action Performed | Expected Behavior | Observed Result | Pass / Fail |
|---|---|---|---|---|
| **Preset Button** | Click `+1,000` | Input increments from `0` to `1000` | Input value set to `1000` | **PASS** |
| **Stepper - / +** | Click `-` / `+` | Increments/decrements by `10` (min `10`) | Amount modified accurately | **PASS** |
| **Auto Bet Switch** | Click Auto Bet toggle | Checkbox toggles, green slider translates | Active state confirmed | **PASS** |
| **Auto Cashout Switch** | Click Auto Cashout toggle | Expands "Cashout at" input with continuous press steppers | Control displayed with `1.20` | **PASS** |
| **Tab Navigation** | Click `Results`, `Rules`, `Game` | Swaps active views without layout distortion | All 3 tabs rendered correctly | **PASS** |
| **WebSocket Connectivity** | Open `/ws` channel | Channel subscribed, ping/pong active, state messages received | Green signal indicator `.ok` | **PASS** |
| **Live Bets Feed** | Authoritative broadcast | Table updates with live bot and user bets | Table contains 37+ active rows | **PASS** |
| **Audio Toggle** | Click `.avtr-sound` | Toggles mute state and unmuted SVG waves | State toggles cleanly | **PASS** |

---

## 5. REMAINING DIFFERENCES & IMPLEMENTATION NOTES

1. **Authentication:**  
   The reference domain (`bpro.life`) requires an external operator session. In our recreation, an authoritative local server provides a persistent player wallet ($50,000 initial bankroll), user profile, and transaction reconciliation.
2. **Variant Toggle:**  
   Both reference implementations (the default canvas-based Aviator X and the runway-based Aviator Classic) are included within the same unified codebase, switchable via the top navigation bar.
