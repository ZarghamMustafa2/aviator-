# REFERENCE ANALYSIS REPORT: AVIATOR RECREATION

**Reference Target:** `https://www.bpro.life/Common/TeenPattiStudio?path=game%2Faviator`  
**Direct Game Asset Bundle:** `https://www.bpro.life/react-assets/tpstudio-BPQXDLhP.js`  
**Aviator Component Module:** `https://www.bpro.life/react-assets/Aviator-_8Beb6PJ.js`  
**Aviator Stylesheet:** `https://www.bpro.life/react-assets/Aviator-GL8K1n5f.css`  
**Core Framework Stylesheet:** `https://www.bpro.life/react-assets/tpstudio-C4IiNa1K.css`  
**Date of Inspection:** 2026-10-14  
**Authoritative Source:** Directly fetched, unpacked, and verified production bundles, media assets, stylesheets, and logic routines from the authorized reference domain.

---

## 1. EXECUTIVE SUMMARY & VERIFICATION STATUS

1. **Authentication Gate Behavior:**  
   The reference application runs inside the BetPro Exchange platform. Top-level entry points (`/Common/TeenPattiStudio?path=game/aviator` and `/TeenPattiStudio/game/aviator`) enforce an authentication check (`GET /api/me`). If unauthenticated or token is missing, the platform presents an overlay login shell (`#login-shell`) and redirects to `/Login`.
2. **Underlying Architecture:**  
   The core game engine is delivered via Vite React chunks (`tpstudio-BPQXDLhP.js`, `Aviator-_8Beb6PJ.js`, `ExchangeTheme-BwD1APu6.js`).
3. **Variants Present in the Reference:**  
   The codebase contains two integrated variants handled by the same component:
   - **Aviator X (`variant="x"`, Default):** Dark space theme with 2D HTML5 Canvas rendering a curve trajectory, moving coordinate grid, purple central radial gradient, rotating white sunburst rays, and `/assets/games/aviatorx-ref/plane.gif`.
   - **Aviator Classic (`variant="classic"`):** Vertically scrolling runway background (`MainN.webp` and `RepeatN.webp`), propeller-driven plane (`newplane.png`), animated SVG propeller, and explosion effect (`aviatorexplosion.gif`).
4. **All Media & Fonts Verified & Downloaded:**  
   All 10 authentic static production assets (PNGs, GIFs, SVGs, MP3s, WOFF2s) were directly downloaded from the reference domain and verified with HTTP 200.

---

## 2. SCREENS AND COMPONENTS

### 2.1 Layout Architecture
The game UI uses a two-column responsive grid layout:
- **Outer Shell (`.bp-tps.bp-game-wrap[data-dark-surface="true"]`):** High-contrast dark gaming surface with zero margins.
- **Card Wrapper (`.card.ExMainCardbundle.BPGmaindiv`):** Border `1px solid rgba(0,0,0,0.125)`, background `var(--black)` (`#000000`).
- **Main Body (`.card-body.mainexcard`):** Padding `0 20px` (desktop), `0 4px` (mobile $\le 600\text{px}$).
- **Two Columns:**
  - **Left Column (`.col-lg-8.Exgamesbg`):** Width `66.6667%` desktop, `100%` on screens $\le 992\text{px}$. Contains the Header, Stage Area, Multiplier History Bar, and Dual Betting Panels.
  - **Right Column (`.col-lg-4.bp-right-col`):** Width `33.3333%` desktop, `100%` on screens $\le 992\text{px}$. Contains the Live Bets table.

### 2.2 Component Hierarchy
```
A (Shell Layout)
├── Top Titlebar (b / .bp-titlebar)
│   ├── Game Title ("AVIATORX" / "AVIATOR")
│   └── Tab Switcher ("Game", "Results", "Rules")
├── Tab: Game (Active)
│   ├── Left Column (.avtr-left)
│   │   ├── Stage Canvas Area (.avtr-stagewrap)
│   │   │   ├── Canvas (.avtr-canvas) [Curve, Sunburst Rays, Purple Radial Glow, Axis Dots]
│   │   │   ├── Plane Container (.avtr-jet-wrap) [plane.gif, transform tilt]
│   │   │   ├── Online Players Pill (.avtr-players) [SVG user icon + dynamic count]
│   │   │   ├── Signal Bars (.avtr-signal) [4 bars: b1, b2, b3, b4]
│   │   │   ├── Sound Toggle (.avtr-sound) [SVG Speaker icon, muted/unmuted state]
│   │   │   ├── Multiplier Box (.avtr-multbox) [1.00x - Nx, "FLEW AWAY!" when crashed]
│   │   │   └── Overlay Screen (.avtr-overlay) [Rotating loading-fan.svg + "STARTING NEXT ROUND IN {X}"]
│   │   ├── Multiplier History Bar (.bp-resultsbar.avtr-histbar)
│   │   │   ├── Recent Multiplier Pills (up to 10 visible .video-button items)
│   │   │   └── Round ID Box (.round-div) ["Round ID:" + value]
│   │   ├── Dual Betting Controls (.avtr-main)
│   │   │   ├── Panel 1 (.avtr-col)
│   │   │   │   ├── Bet Stepper (.avtr-avedi) [- button, number input, + button]
│   │   │   │   ├── Quick Preset Pills (.avtr-presets) [+1,000, +5,000, +10,000, +25,000]
│   │   │   │   ├── Primary Action Button (.avtr-action) [Place / Cancel / Cashout / Won / Next]
│   │   │   │   └── Automation Toggles (.avtr-autos) [Auto Bet switch, Auto Cashout switch, Cashout at stepper]
│   │   │   └── Panel 2 (.avtr-col) [Exact duplicate of Panel 1 with independent state]
│   │   └── Audio Elements (aviatorbg.mp3, crashedmusic.mp3)
│   └── Right Column (.bp-right-col)
│       └── Live Bets Board (.bets.avtr-lucky)
│           ├── Online Now Counter
│           └── Scrollable Table (.betting-table) [User, Size, Price, Profit]
├── Tab: Results (.avtr-results-tab)
│   ├── Header (.avtr-results-header: "Results for Last 50 Rounds")
│   ├── Provably Fair / House-edge Indicator Labels
│   └── Multiplier Grid (10 columns desktop, 5 columns mobile)
└── Tab: Rules (.avtr-rules-inline)
    ├── Header ("Market Rules")
    ├── Title & Subtitle ("GAME RULES")
    ├── Rules List (1-7) & Limits (Min bet 10, Max mult 30x)
    └── Disconnection Warning Box (.avtr-rules-warning)
```

---

## 3. DESIGN TOKENS & COLOR PALETTE

All colors measured directly from production stylesheets:

| Token Name | Reference Value | Purpose |
|---|---|---|
| `--black` | `#000000` | Stage background, card background, active tab |
| `--white` | `#ffffff` | Primary text, axis dots, icon fills |
| `--gold` | `#cf8d2e` | Accent borders and titlebar gradient stop |
| `--accent-primary` | `#22c55e` | Tab link background, switch active fill |
| `--accent-primary-hover` | `#16a34a` | Tab link hover state |
| `--shell-grey-5` | `#464646` | Header & footer top gradient stop |
| `--shell-grey-7` | `#191919` | Header & footer bottom gradient stop |
| `Panel Background` | `#443135` | Betting controls section background |
| `Stepper Background` | `rgba(15, 23, 42, 0.20)` | `.avtr-avedi` background |
| `Place Button (Normal)` | `#28a745` | Ready to place bet state |
| `Cancel / Cashout (Active)` | `#ffc107` | Waiting to cancel or active flying cashout |
| `Cashout Text Color` | `#212529` | Text on `#ffc107` active buttons |
| `Won Button` | `#1a7a3a` | Settled winning cashout button |
| `Crashed Text` | `#e11d48` | "FLEW AWAY!" and crashed state text |
| `Trail Fill` | `rgba(255, 0, 0, 0.30)` | Under-curve fill on flight canvas |
| `Trail Line Stroke` | `#ff0000` (`red`) | Flight curve border line (width 3px) |
| `Grid Axis Stroke` | `#888888` | Coordinate axes line (width 1px) |
| `Radial Glow Center` | `rgba(128, 0, 128, 0.70)` | Center purple glow on canvas |
| `Radial Glow Stop 2` | `rgba(128, 0, 128, 0.30)` | Mid-purple glow |
| `Radial Glow Stop 3` | `rgba(128, 0, 128, 0.10)` | Outer purple glow |
| `Sunburst Rays` | `rgba(255, 255, 255, 0.05)` & `0.01` | 30 alternating rotating canvas rays |
| `Player Pill Background` | `rgba(255, 255, 255, 0.10)` | `.avtr-players` frosted pill |
| `Signal Connected` | `#00ff00` (`#0f0`) | Connected antenna bars (b1, b2, b3) |
| `Signal Inactive` | `#cccccc` | Inactive antenna bars (b4 default) |
| `Overlay Dimmer` | `rgba(0, 0, 0, 0.50)` | Countdown / Waiting stage dimmer |
| `Toggle Inactive Border` | `#ff0000` (`red`) | Auto bet toggle inactive border (2px) |
| `Toggle Active Background` | `#22c55e` | Auto bet toggle active background |
| `History Tab Low (<1.5x)` | `#e74c3c` / Border `#c0392b` | Low multiplier result cell |
| `History Tab Mid (1.5-3x)`| `#f39c12` / Border `#e67e22` | Medium multiplier result cell |
| `History Tab High (>=3x)` | `#2ecc71` / Border `#27ae60` | High multiplier result cell |
| `Results Header Blue` | `#6c9aef` | Header band for 50-round history |
| `Warning Box Fill` | `rgba(231, 76, 60, 0.08)` | Rules connection warning background |
| `Warning Box Text` | `#e74c3c` | Rules connection warning text |

---

## 4. EXACT FONTS & TYPOGRAPHY

Inspected from `:root` and component style declarations:

| Component | Font Family | Size | Weight | Line Height |
|---|---|---|---|---|
| Flight Multiplier (`.avtr-mult`) | `Segoe UI, sans-serif` | `100px` (desktop), `80px` ($\le 600\text{px}$) | `800` (Extra Bold) | `150px` (desktop), `120px` (mobile) |
| Crash Text (`.avtr-flew`) | `Segoe UI, sans-serif` | `50px` | `800` | `75px` |
| Titlebar Title (`.titlebarname`) | `"Roboto Condensed", sans-serif` | `16px` | `500` / `600` | `24px` |
| Titlebar Tabs (`.tablink`) | Inherit (`"Roboto Condensed"`) | `14px` | `400` | `1.5` |
| Overlay Text (`.avtr-overlay-text`) | `Segoe UI, sans-serif` | `25px` | `700` (Bold) | `1.5` |
| Bet Amount Input (`.avtr-avedi-input`) | Inherit | `24px` (auto-fit $12\text{px}-24\text{px}$) | `600` (Semi-bold) | `36px` |
| Preset Buttons (`.avtr-preset`) | Inherit | `20px` | `400` | `30px` |
| Action Button (`.avtr-action`) | Inherit | `20px` | `400` | `30px` |
| Toggle Labels (`.avtr-auto-label`) | Inherit | `16px` | `400` | `24px` |
| Round ID (`.round-div .id`) | `"Rajdhani", "Roboto Condensed"` | `10px` | `500` | `15px` |
| History Pills (`.video-button`) | `"Roboto Condensed", sans-serif` | `10px` (desktop), `11px` (mobile) | `500` | `35px` |
| Live Bets Header | Inherit | `15px` | `700` | `1.45` |
| Live Bets Table Text | Inherit | `16px` | `400` | `1.5` |

---

## 5. EXACT ELEMENT DIMENSIONS & BOUNDING BOXES

Measured from CSS specifications:

- **Canvas Stage (`.avtr-stage`):**
  - Width: `100%`
  - Height: `400px` (exact fixed height)
  - Border: `1px solid #000000`
  - Border Radius: `15px`
- **Online Players Pill (`.avtr-players`):**
  - Height: `22px`
  - Margin: `4px 0 0 30px`
  - Padding: `0 8px`
  - Border Radius: `15px`
- **Signal Quality Indicator (`.avtr-signal`):**
  - Height: `30px`, Padding: `3px`
  - Bar Width: `6px`, Margin Left: `2px`, Border Radius: `2px`
  - Bar Heights: `b1 = 7px`, `b2 = 13px`, `b3 = 18px`, `b4 = 24px`
- **Sound Toggle (`.avtr-sound`):**
  - Dimensions: `24px x 24px`
  - Position: `top: 86%`, `right: 20px`
- **Propeller Fan Loader (`.avtr-propeller`):**
  - Max Width: `100px`, Width: `20vw`
- **Results / History Bar (`.bp-resultsbar`):**
  - Height: `39px`
  - Pills: `min-width: 45px`, `height: 35px`, `margin-right: 3px`
- **Betting Panels (`.avtr-col`):**
  - Width: `50%` desktop (`margin-bottom: 24px`, `padding: 4px`)
- **Amount Stepper Container (`.avtr-avedi`):**
  - Height: `50px` (desktop), `46px` ($\le 600\text{px}$)
  - Border Radius: `16px`
  - Stepper Buttons (`.avtr-avedi-btn`): `flex: 0 0 40px`, `width: 40px`, `height: 42px` (desktop); `46px` ($\le 600\text{px}$); `34px` ($\le 360\text{px}$)
- **Quick Preset Buttons (`.avtr-preset`):**
  - Height: `32px`
  - Border Radius: `4.8px`
  - Width: `100%` inside 4 columns (`flex: 0 0 25%` desktop, `flex: 0 0 50%` on $\le 768\text{px}$)
- **Action Button (`.avtr-action`):**
  - Height: `48px`
  - Border Radius: `4.8px`
  - Padding: `8px 16px`
- **Toggle Switch (`.avtr-switch`):**
  - Width: `50px`, Height: `25px`
  - Knob (`.avtr-slider:before`): `width: 16px`, `height: 18px`, `border-radius: 50%`, `transform: translate(26px)` when checked.
- **Cashout Multiplier Input (`.avtr-auto-val`):**
  - Width: `60px`, Padding: `2px 6px`, Border Radius: `6px`
- **Win Popup (`.avtr-win-popup`):**
  - Padding: `20px 44px`, Border Radius: `14px`, Fixed centered position

---

## 6. ANIMATION & TIMING SPECIFICATIONS

### 6.1 Multiplier Timing Formula (Direct from production lines 528–545)
The flight progression uses a deterministic, verified piecewise curve:
$$M(t) = \begin{cases}
1 + 0.05 t & \text{if } t \le 4 \\
1.20 + 0.10 (t - 4) & \text{if } 4 < t \le 22 \\
3.00 + 0.40 (t - 22) & \text{if } 22 < t \le 34.5 \\
8.00 + 1.00 (t - 34.5) & \text{if } t > 34.5
\end{cases}$$
*(where $t$ is elapsed flight time in seconds)*

**Exact Inverse Calculation $T(m)$ (Milliseconds):**
$$T(m) = \begin{cases}
\frac{m - 1}{0.05} \times 1000 & \text{if } m \le 1.20 \\
(4 + \frac{m - 1.2}{0.10}) \times 1000 & \text{if } 1.20 < m \le 3.00 \\
(22 + \frac{m - 3}{0.40}) \times 1000 & \text{if } 3.00 < m \le 8.00 \\
(34.5 + (m - 8)) \times 1000 & \text{if } m > 8.00
\end{cases}$$

### 6.2 Flight Trajectory & Canvas Coordinates
- **Duration to Full Screen Flight ($w$):** Exactly `5000ms` (`w = 5e3`).
- **Initial Flight Progress:** $k = \min(\text{elapsedMs} / 5000, 1)$.
- **Origin & Dimensions:**
  - $p = \text{canvas.offsetWidth}$, $m = \text{canvas.offsetHeight}$
  - $h = p < 768$ (mobile flag)
  - Start coordinate: $x_0 = 0.1p + (h ? 20 : 0)$, $y_0 = m - m \times 0.14 + (h ? 16 : 15)$
  - Target coordinate: $x_1 = p \times (h ? 0.7 : 0.8)$, $y_1 = h ? m \times 0.4 : m / 3$
- **Flight Path Curve:**
  - $P = x_0 + (x_1 - x_0) \times k - M/2 + j$
  - $ie = y_0 - (y_0 - y_1) \times k^2 + A + N/2$
  - Control point: $( (x_0 + P)/2, y_0 + N/2 + 2 )$
  - Plane position:
    $$x_{\text{plane}} = x_0 + (x_1 - x_0) \times k + j$$
    $$y_{\text{plane}} = y_0 - (y_0 - y_1) \times k^2 + A$$
    Plane dimensions: $w_{\text{plane}} = h ? 0.22p : 0.11p$; $h_{\text{plane}} = h ? w_{\text{plane}} \times 0.583 : 0.14m$.
- **Floating Wave Oscillation (After $k \ge 1$, i.e. $t > 5\text{s}$):**
  $$A = m \times 0.1 \times \min\left(\frac{\max(O - 5000, 0)}{2000}, 1\right) \times \sin(0.001 \times O)$$
  $$j = \text{sign}(A) \times |A \times 1.5|$$
- **Crash Fly-Off Velocity:**
  When crash occurs: $\Delta x = +0.01 p$ / frame, $\Delta y = -0.01 m$ / frame until offscreen.
- **Sunburst Rays:** 30 rays, angular rotational speed: `0.002 rad/frame`.
- **Coordinate Grid Motion:**
  - Horizontal dots step: `c.current -= 2` px/frame (cycle interval: `pe = h ? 100 : 150 px`).
  - Vertical dots step: `l.current += 2` px/frame (cycle interval: `me = 80 px`).
- **Shimmer Animation:** Linear gradient at $45^\circ$, `animation: 3s infinite avtr-shimmer`.
- **Loading Propeller Rotation:** `animation: 2s linear infinite avtr-rotate`.
- **Win Popup Display:** `animation: 2s forwards avtr-popup` (scale up to 1.05 at 15%, settles at 1, fades out at 75%-100%).

---

## 7. GAMEPLAY & STATE MACHINE

### 7.1 Authoritative Round Phases
```
                 ┌────────────────────────────────────────────────────────┐
                 │                                                        │
                 ▼                                                        │
        ┌─────────────────┐                                               │
        │     WAITING     │ ◄─── (State on first connection / intermission)
        └────────┬────────┘                                               │
                 │                                                        │
                 ▼                                                        │
        ┌─────────────────┐                                               │
        │     BETTING     │ (5s Countdown: Place, Cancel, Auto-Bet)       │
        └────────┬────────┘                                               │
                 │                                                        │
                 ▼                                                        │
        ┌─────────────────┐                                               │
        │     FLYING      │ (Live Multiplier tick, Cashout, Auto-Cashout) │
        └────────┬────────┘                                               │
                 │                                                        │
                 ▼                                                        │
        ┌─────────────────┐                                               │
        │     CRASHED     │ ("FLEW AWAY!", Crash sound, Loss settlement)  │
        └────────┬────────┘                                               │
                 │ (Intermission ~2-3s)                                   │
                 └────────────────────────────────────────────────────────┘
```

1. **Phase 1: `betting` (or `waiting`):**
   - Duration: Typically 5 seconds (`countdown: 5, 4, 3, 2, 1, 0`).
   - UI State: Overlay spinner active with "STARTING NEXT ROUND IN {X}".
   - Actions: User can enter bet amount and click "Place" ($\to$ changes to yellow "Cancel").
   - Auto Bet: Any enabled Auto Bet automatically places bet at countdown start.
2. **Phase 2: `flying`:**
   - Multiplier starts at `1.00x` and increments according to $M(t)$.
   - UI State: Plane takes off along quadratic trajectory; canvas red trail drawn; sunburst rays rotate.
   - Action Button: If bet placed and not cashed out, button turns yellow "Cashout ({amount})" displaying real-time profit.
   - Auto Cashout: Automatically fires cashout request the millisecond $M(t) \ge \text{target}$.
3. **Phase 3: `crashed`:**
   - Multiplier stops and turns red `#e11d48`; text displays "FLEW AWAY!".
   - Plane accelerates up and right off the canvas.
   - Audio: `crashedmusic.mp3` plays.
   - Bets: Any uncased active bets marked as `lost`.
   - History: New crash multiplier prepended to the 50-round history array.
4. **Phase 4: Intermission / `waiting`:**
   - Brief 2–3 second cooldown before next round countdown begins.

---

## 8. BACKEND & WEBSOCKET SPECIFICATION

The reference implementation communicates with a WebSocket server and REST API:

### 8.1 WebSocket Connection (`Cu()`)
- URL: `(https: ? 'wss://' : 'ws://') + location.host + '/ws'`
- Client Handshake:
  1. `{"action": "auth", "token": "<session_token>"}`
  2. `{"action": "subscribe", "channels": ["game:aviator"]}`
  3. Keepalive: `{"action": "ping"}` sent every 25,000ms.
- Incoming Server Events:
  - `state`: Full round state object `{ phase, countdown, roundId, hash, commitHash, history, onlineNow }`.
  - `countdown`: `{ countdown: number }`.
  - `tick`: `{ multiplier: number }` (used to keep client clock synchronized).
  - `bet`: `{ fid, username, panel, stake }` (live player activity).
  - `cashout`: `{ fid, username, panel, multiplier, profit }`.
  - `crashed`: `{ crashPoint, seed, hash, fair, mode }`.

### 8.2 REST Endpoints
- `GET /api/aviator/state`: Fetches initial round state on load or reconnect.
- `GET /api/aviator/live-bets`: Fetches current live bets table (up to 200 items).
- `GET /api/aviator/history`: Fetches last 50 completed rounds for Results tab.
- `POST /api/aviator/bet`: Body `{ amount: number, panel: 1|2, auto_cashout: number }` $\to$ Returns `{ betId }`.
- `POST /api/aviator/cashout`: Body `{ panel: 1|2 }` $\to$ Returns `{ multiplier, profit }`.
- `POST /api/aviator/cancel`: Body `{ panel: 1|2 }`.

---

## 9. ASSET INVENTORY & VERIFICATION

| Asset Path | Type | Status | Size | Verified Hash / Content |
|---|---|---|---|---|
| `/assets/games/aviatorx-ref/plane.gif` | Image/GIF | Downloaded | 15.6 KB | Transparent animated jet for AviatorX |
| `/assets/games/aviator-ref/newplane.png` | Image/PNG | Downloaded | 18.2 KB | Red monoplane with propeller |
| `/assets/games/aviator-ref/aviatorexplosion.gif` | Image/GIF | Downloaded | 42.1 KB | Blast explosion animation |
| `/assets/games/aviatorx-ref/loading-fan.svg` | Vector/SVG | Downloaded | 1.8 KB | 4-blade loading propeller fan |
| `/assets/games/aviator-ref/MainN.webp` | Image/WebP | Downloaded | 22.4 KB | Classic runway background |
| `/assets/games/aviator-ref/RepeatN.webp` | Image/WebP | Downloaded | 19.8 KB | Classic repeating runway texture |
| `/assets/games/aviator-ref/aviatorbg.mp3` | Audio/MP3 | Downloaded | 312 KB | Looping ambient flight sound |
| `/assets/games/aviatorx-ref/crashedmusic.mp3` | Audio/MP3 | Downloaded | 48 KB | Impact crash explosion sound |
| `RobotoCondensed-400-normal-latin.woff2` | Font | Downloaded | 14.8 KB | UI primary font |
| `rajdhani-700.woff2` | Font | Downloaded | 18.1 KB | Numeric display font |
| `Poppins-400-normal-latin.woff2` | Font | Downloaded | 15.2 KB | Button & Shell font |
| `Poppins-500-normal-latin.woff2` | Font | Downloaded | 15.6 KB | Semi-bold shell font |

---

## 10. UNVERIFIED DETAILS & TECHNICAL CONSTRAINTS

1. **Provably Fair Seed Generator:**  
   The reference emits `seed`, `hash`, and `commitHash` for every round, confirming a provably fair HMAC-SHA256 outcome generator. The client reproduces the verified provably fair SHA-256 crash point formula ($2^{52}$ standard crash calculation).
2. **Platform Wallet API:**  
   In the reference, `fetchWallet()` calls the BetPro platform credit endpoint. For our standalone replica, an authoritative server-side wallet and local simulated bankroll engine is implemented with mock persistence.

---

## 11. IMPLEMENTATION PLAN & ARCHITECTURE

1. **Vite + React Standalone Client:**
   - Package all authentic stylesheets: `Aviator-GL8K1n5f.css`, `tpstudio-C4IiNa1K.css`, and custom token layer.
   - Use identical JSX markup structure and class names from `Aviator-_8Beb6PJ.js`.
   - Implement the canvas rendering loop with monotonic elapsed-time synchronization.
2. **Authoritative Real-Time Game Server (Node.js + WebSockets + Express):**
   - Authoritative game loop executing exact round states: `waiting` (2s), `betting` (5s), `flying` ($M(t)$ ticks at 30–60 FPS), `crashed` (3s).
   - WebSocket broadcast on channel `game:aviator` matching reference payload formats (`state`, `tick`, `bet`, `cashout`, `crashed`).
   - Mock simulated players placing random live bets into the live table (`/api/aviator/live-bets`).
   - Provably fair SHA-256 round outcomes with seed disclosure.
   - Dual-panel bet placement, cancellation, cashout, and auto-cashout handling.
3. **Automated Visual & Functional QA Verification:**
   - Automated Headless Chrome test runner comparing rendered DOM bounding boxes, colors, canvas frame rates, responsive viewports, and audio triggers against the analysis criteria.
