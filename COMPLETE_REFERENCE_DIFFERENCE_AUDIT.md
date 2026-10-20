# COMPLETE REFERENCE DIFFERENCE AUDIT: AVIATOR GAME

**Project Location:** `E:\Aviator`  
**Reference Domain:** `https://www.bpro.life/Common/TeenPattiStudio?path=game%2Faviator`  
**Live Application:** `https://aviator-bpro.vercel.app/`  
**GitHub Repository:** `https://github.com/ZarghamMustafa2/aviator-`  
**Reference Video Source:** `WhatsApp Video 2026-10-16 at 8.43.52 AM (1).mp4` (Duration: 240.76s / 4m 0.76s, Resolution: 480x1068, 24-30 FPS)  
**Inspection Date:** 2026-10-20  

---

## 1. Executive Summary

A comprehensive, frame-by-frame and source-bundle audit was conducted across the 240.76-second original Aviator reference video and our current application build.

The client rejected the current build because of noticeable discrepancies introduced by earlier modification requests, primarily:
1. **Artificially Slow Multiplier:** The flight multiplier had been forced to a slow constant linear rate of $0.05\text{x/s}$, causing medium and high flight rounds to take up to 300% longer than the reference video (e.g. a 5.92x round took 98.4 seconds in the current build vs. 29.3 seconds in the reference video).
2. **Artificial Airplane Slowdown:** Visual flight duration (`FLY_IN_DURATION`) had been slowed to 6250ms and wave oscillations reduced by 20%, desynchronizing the visual tempo from the reference video.
3. **Round ID Formatting:** Raw integer IDs (`104500`) instead of the reference pattern `AVTR-YYMMDD-XXXXXX`.
4. **Intermission Duration:** Countdown set to 6 seconds instead of the authentic ~11-second cycle observed in the reference recording.

All underlying structural components (HTML5 Canvas 2D engine, CSS styling, Segoe UI typography, dual betting panels, provably fair SHA-256 commit hash system, and responsive layout) were confirmed to match production reference bundles (`Aviator-_8Beb6PJ.js`, `Aviator-GL8K1n5f.css`, `tpstudio-BPQXDLhP.js`).

---

## 2. Comprehensive Component Difference Matrix

| Component / Feature | Original Reference (Observed / Bundle) | Current Game Implementation | Verified Mismatch | Required Correction | Priority |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Multiplier Progression Curve** | Piecewise exponential: $1+0.05t$ ($t\le 4$), $1.2+0.1(t-4)$ ($t\le 22$), $3+0.4(t-22)$ ($t\le 34.5$), $8+1(t-34.5)$ ($t>34.5$). From `Aviator-_8Beb6PJ.js` line 528. | Artificial constant linear rate: $1.00 + 0.05t$ across entire flight. | **CRITICAL MISMATCH:** High multipliers take excessively long. 5.92x takes 98.4s instead of 29.3s. | Restore exact reference piecewise formula $se(t)$ and inverse $ce(m)$ in server and client. | **P1** |
| **Takeoff Flight Curve Duration** | `FLY_IN_DURATION = 5000ms` (`w = 5e3` in `Aviator-_8Beb6PJ.js`). Reaches cruising altitude at exactly 5.0s. | `FLY_IN_DURATION = 6250ms` (20% slower artificial adjustment). | **VERIFIED MISMATCH:** Plane takes 6.25s to ascend; ascent looks sluggish compared to video. | Restore `FLY_IN_DURATION = 5000ms` in `AviatorCanvas.jsx`. | **P1** |
| **Cruising Wave Oscillation** | $\omega = 0.001\text{ rad/ms}$ ($T \approx 6.28\text{s}$), transition ramp $2000\text{ms}$. | $\omega = 0.0008\text{ rad/ms}$, transition ramp $2500\text{ms}$. | **VERIFIED MISMATCH:** Wave float motion slowed by 20%. | Restore $\omega = 0.001\text{ rad/ms}$ and ramp $2000\text{ms}$. | **P2** |
| **Background Dynamics** | Sunburst rotation `0.002 rad/f`; Axis grid dots scroll `1.7 px/f`. | Sunburst rotation `0.0016 rad/f`; Axis grid dots scroll `1.36 px/f`. | **VERIFIED MISMATCH:** Background motion slowed by 20%. | Restore rotation `0.002` and scroll `1.7`. | **P3** |
| **Crash Fly-Off Velocity** | $\Delta x = +0.012 \cdot W$, $\Delta y = -0.010 \cdot H$ per frame until offscreen. | $\Delta x = +0.0096 \cdot W$, $\Delta y = -0.0080 \cdot H$. | **VERIFIED MISMATCH:** Fly-off animation 20% slower. | Restore $\Delta x = 0.012 \cdot W$, $\Delta y = 0.010 \cdot H$. | **P2** |
| **Round ID Display** | Format `AVTR-YYMMDD-XXXXXX` (e.g. `AVTR-261016-127068` in reference video frame). | Raw integer `104504`. | **VERIFIED MISMATCH:** Missing `AVTR-` prefix and date string. | Implement `formatRoundId(id)` producing `AVTR-YYMMDD-XXXXXX`. | **P3** |
| **Intermission Countdown** | Nominal $10\text{s}-11\text{s}$ intermission (`STARTING NEXT ROUND IN 10`, `9`... down to 0). | 6 seconds countdown. | **VERIFIED MISMATCH:** Short betting window does not match reference video round cycle. | Set `countdown = 10` in server state with 7s open betting + 3s bet lock. | **P2** |
| **Three-Second Bet Lock** | Final 3 seconds lock (`countdown <= 3`), buttons disabled, late bets rejected. | Final 3 seconds lock active (`isBetLocked` at $\le 3\text{s}$). | **MATCH CONFIRMED:** Both server and client enforce 3.0s cutoff. | Preserve existing backend and client 3s lock. | **Match** |
| **Stage Dimensions & Theme** | $400\text{px}$ stage height, border-radius $15\text{px}$, `#000000` canvas background. | $400\text{px}$ stage height, border-radius $15\text{px}$, `#000000` canvas background. | **MATCH CONFIRMED:** Computed dimensions match with 0px discrepancy. | Preserve. | **Match** |
| **Typography** | Segoe UI 800 (`100px` desktop / `80px` mobile $\le 600\text{px}$). | Segoe UI 800 (`100px` desktop / `80px` mobile). | **MATCH CONFIRMED:** Identical font family, weight, and responsive size. | Preserve. | **Match** |
| **Dual Betting Panels** | Dual side-by-side columns, steppers (`-` / `+`), presets `+1,000`, `+5,000`, `+10,000`, `+25,000`. | Dual side-by-side columns, identical steppers and presets. | **MATCH CONFIRMED:** Layout and inputs identical. | Preserve. | **Match** |
| **Results & Rules Tabs** | 50-round history grid (color-coded) and 7 game rules with disclaimer. | 50-round history grid and complete rules with virtual credits notice. | **MATCH CONFIRMED:** Tabs render identical structures. | Preserve. | **Match** |

---

## 3. Timestamped Reference Video Evidence

Measured directly from `WhatsApp Video 2026-10-16 at 8.43.52 AM (1).mp4`:

| Video Timestamp | Observed Game Phase | Visual Multiplier / Text | Observable Reference Behavior |
| :---: | :---: | :---: | :--- |
| **00:05.0** | Waiting / Countdown | `STARTING NEXT ROUND IN 8` | Red propeller rotates; plane parked at runway origin $(X_0, Y_0)$; Place buttons active green. |
| **00:10.5** | Final Bet Lock | `STARTING NEXT ROUND IN 3` | Countdown hits 3s; betting closes for the active round. |
| **00:13.5** | Flight Start | `1.00 x` | Plane initiates smooth climb along curved trajectory; red trail fill renders underneath. |
| **00:20.0** | Mid Flight | `1.50 x` | $t = 6.5\text{s}$ flight time; plane transitions to cruising level; multiplier advances at $0.10\text{x/s}$. |
| **00:28.0** | Crash Event (R1) | `FLEW AWAY!` / `2.21 x` | Red trail vanishes immediately; plane flies offscreen; multiplier locks at $2.21\times$ in red. |
| **00:44.2** | Instant Crash (R2) | `FLEW AWAY!` / `1.01 x` | Flight crashes at $t = 0.8\text{s}$ ($1.01\times$ house edge verification). |
| **01:25.8** | Medium Flight (R3)| `3.94 x` | $t = 24.4\text{s}$ flight time; plane undulates within canvas bounds $X \in [0.55, 0.85]$. |
| **03:29.0** | High Flight (R8) | `4.86 x` | $t = 27.6\text{s}$ flight time; plane safely bounded; rapid multiplier growth ($0.40\text{x/s}$). |
| **03:30.8** | Peak Crash (R8) | `FLEW AWAY!` / `5.93 x` | $t = 29.4\text{s}$ flight time; crash at $5.93\times$. |

---

## 4. Exact Source Files Requiring Modification

1. [`server/index.js`](file:///e:/Aviator/server/index.js):
   - Replace linear `calcMultiplier` / `calcInverseTimeMs` with reference piecewise formula.
   - Adjust `gameState.countdown = 10` for authentic $11\text{s}$ round intermission.
   - Format `roundId` with `AVTR-YYMMDD-XXXXXX`.
2. [`src/components/AviatorGame.jsx`](file:///e:/Aviator/src/components/AviatorGame.jsx):
   - Update client `calcMultiplier` and `calcInverseTimeMs` to reference piecewise formula.
   - Add `formatRoundId()` helper for the Round ID pill.
3. [`src/components/AviatorCanvas.jsx`](file:///e:/Aviator/src/components/AviatorCanvas.jsx):
   - Update `calcInverseTimeMs` to reference piecewise formula.
   - Restore `FLY_IN_DURATION = 5000` ($5.0\text{s}$).
   - Restore cruising wave frequency $\omega = 0.001$, ramp $2000\text{ms}$.
   - Restore sunburst rotation `0.002`, dots scroll `1.7`, fly-off velocity `0.012 / 0.010`.
4. [`scripts/verify_motion_and_rounds.js`](file:///e:/Aviator/scripts/verify_motion_and_rounds.js):
   - Update kinematics and piecewise formula for test verification suite.
