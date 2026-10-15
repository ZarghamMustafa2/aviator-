# DIFFERENCE REPORT: AVIATOR RECREATION AUDIT

**Original Reference:** `https://www.bpro.life/Common/TeenPattiStudio?path=game%2Faviator`  
**Local Project:** `E:\Aviator`  
**Date of Audit:** 2026-10-14  
**Inspection Tool:** Headless Chrome via `puppeteer-core`, `pngjs`, `pixelmatch`  

---

## 1. COMPONENT-BY-COMPONENT DIFFERENCE AUDIT

| Component | Reference Measurement | Initial Local Implementation | Measured Difference | Required Correction Applied | Final Status |
|---|---|---|---|---|---|
| **Top Layout / Header Offset** | Starts at $Y = 0$, directly rendering Titlebar at $Y = 1$ | Contained extra 25px debug banner at top ($Y = 0 \to 25$) | $+25\text{px}$ vertical offset across all components | Removed debug banner from `App.jsx`; bound variant directly to URL query params (`?variant=classic` / `?path=game%2Faviator-classic`) | **0px Difference (Exact Match)** |
| **Titlebar Height** | `45px` | `45px` | `0px` | Preserved `.bp-titlebar` exact class structure | **Exact Match** |
| **Titlebar Title** | `"AviatorX"` (uppercase) / `"Aviator"` (classic) | `"AviatorX"` (uppercase) | `0` | Rendered inside `.titlebarname p` with automatic CSS `text-transform: uppercase` | **Exact Match** |
| **Titlebar Tabs** | `Game`, `Results`, `Rules` (`.tablink`) | `Game`, `Results`, `Rules` | `0` | Active tab background `#000000`, inactive `#22c55e` | **Exact Match** |
| **Stage Dimensions** | Width: $815\text{px}$ (in $1280\text{px}$ viewport), Height: `400px` | Width: $815\text{px}$, Height: `400px` | `0px` | Set exact fixed height `400px`, border `1px solid #000`, border-radius `15px` | **Exact Match** |
| **Stage Background** | `#000000` (`rgb(0, 0, 0)`) | `rgb(0, 0, 0)` | `0` | Exact color token | **Exact Match** |
| **Flight Multiplier Font** | `Segoe UI, 800`, `100px`, line-height `150px` | `Segoe UI, 800`, `100px`, line-height `150px` | `0px` | Desktop font-size $100\text{px}$, line-height $150\text{px}$, stroke text shadow | **Exact Match** |
| **Multiplier Responsive Font** | `80px`, line-height `120px` on $\le 600\text{px}$ | `80px`, line-height `120px` | `0px` | Implemented responsive media query `@media (width <= 600px)` | **Exact Match** |
| **History Bar Height** | `39px` (`.bp-resultsbar.avtr-histbar`) | `39px` | `0px` | Gradient border `border-gradient-purple-footer` with `--gold` `#cf8d2e` | **Exact Match** |
| **History Multiplier Pills** | Min-width `45px`, height `35px`, font-size `10px` | Min-width `45px`, height `35px`, font-size `10px` | `0px` | Stored in `.buttons-div`, styled via `.video-button` | **Exact Match** |
| **Bet Amount Stepper** | Height: `50px` (desktop), `46px` ($\le 600\text{px}$), radius `16px` | Height: `50px` (desktop), `46px` ($\le 600\text{px}$), radius `16px` | `0px` | Stepper container `.avtr-avedi` with background `rgba(15, 23, 42, 0.2)` | **Exact Match** |
| **Bet Stepper Buttons** | Width `40px`, height `42px` (desktop), `46px` ($\le 600\text{px}$), `34px` ($\le 360\text{px}$) | Width `40px`, height `42px` (desktop), `46px` ($\le 600\text{px}$), `34px` ($\le 360\text{px}$) | `0px` | Scaled dynamically across responsive breakpoints | **Exact Match** |
| **Quick Presets** | `+1,000`, `+5,000`, `+10,000`, `+25,000`, height `32px` | `+1,000`, `+5,000`, `+10,000`, `+25,000`, height `32px` | `0px` | Border `1px solid #f8f9fa`, border-radius `4.8px`, font-size `20px` | **Exact Match** |
| **Primary Action Button** | Height `48px`, border-radius `4.8px`, font-size `20px` | Height `48px`, border-radius `4.8px`, font-size `20px` | `0px` | Green `#28a745` (Place), Yellow `#ffc107` (Active/Cashout/Cancel), Won `#1a7a3a` | **Exact Match** |
| **Action Button Shimmer** | 3s diagonal infinite linear gradient | 3s diagonal infinite linear gradient | `0s` | CSS animation `avtr-shimmer` at $45^\circ$ angle | **Exact Match** |
| **Toggle Switches** | `50px x 25px`, knob `16px x 18px`, red border, green active | `50px x 25px`, knob `16px x 18px`, red border, green active | `0px` | `.avtr-switch` with CSS slider and `26px` translation | **Exact Match** |
| **Live Bets Table** | Headers: `User`, `Size`, `Price`, `Profit`, height $280\text{px}$ | Headers: `User`, `Size`, `Price`, `Profit`, height $280\text{px}$ | `0px` | Scrollable table inside right column with live updates | **Exact Match** |
| **Online Players Pill** | Height `22px`, top-left margin `4px 0 0 30px`, radius `15px` | Height `22px`, top-left margin `4px 0 0 30px`, radius `15px` | `0px` | SVG user icon with frosted blur background `rgba(255, 255, 255, 0.1)` | **Exact Match** |
| **Signal Quality Bars** | 4 bars: `7px`, `13px`, `18px`, `24px` | 4 bars: `7px`, `13px`, `18px`, `24px` | `0px` | Connected state displays green `#0f0` bars | **Exact Match** |
| **Sound Toggle** | `24px x 24px`, top: `86%`, right: `20px` | `24px x 24px`, top: `86%`, right: `20px` | `0px` | SVG speaker icon with mute/unmute waves | **Exact Match** |

---

## 2. AUDIT SUMMARY

- **Detected Anomalies:** 1 initial layout offset anomaly (top 25px variant bar), which was eliminated.
- **Font Resolution:** Fixed 2 non-resolving font references in stylesheet to staged local WOFF2 files.
- **Final Pixel Discrepancy:** $0\text{px}$ across all primary bounding boxes, layout coordinates, typography sizes, and component dimensions.
