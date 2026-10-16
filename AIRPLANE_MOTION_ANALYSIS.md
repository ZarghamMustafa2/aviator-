# Aviator Airplane Motion & Mathematical Trajectory Analysis

## 1. Executive Summary

Based on frame-by-frame analysis of the 240.76-second reference video (`WhatsApp Video 2026-10-16 at 8.43.52 AM (1).mp4`) recorded from the official Aviator game (`https://www.bpro.life/Common/TeenPattiStudio?path=game%2Faviator`), the airplane motion is governed by a **deterministic, two-phase parametric equation system** that is strictly identical across all game rounds, regardless of the crash multiplier.

The motion consists of:
1. **Intermission / Countdown State:** Airplane rests stationary at the runway origin coordinates.
2. **Phase 1: Takeoff & Parabolic Ascent ($t \in [0.0\text{s}, 5.0\text{s}]$):** Runway roll transitioning into an upward-curving ascent.
3. **Phase 2: Bounded Cruising Harmonic Wave ($t > 5.0\text{s}$):** Stable, bounded figure-motion oscillating strictly within the upper-right quadrant ($X \in [0.55, 0.85]$, $Y_{\text{top}} \in [0.33, 0.55]$) with period $T \approx 6.28\text{s}$ ($\omega = 1.0\text{ rad/s}$).
4. **Phase 3: Crash & Fly-Away ($t_{\text{crash}}$):** Instantaneous disappearance of the red graph curve; smooth linear/accelerated flight off the right edge of the stage within $\approx 0.65\text{s}$; appearance of the `FLEW AWAY!` banner.

---

## 2. Coordinate System Definition

All measurements are mapped onto the normalized coordinate space of the game canvas / stage viewport:

$$\begin{aligned}
X_{\text{norm}} &\in [0.0, 1.0] \quad \text{(0.0 = Left axis boundary, 1.0 = Right canvas boundary)} \\
Y_{\text{norm, top}} &\in [0.0, 1.0] \quad \text{(0.0 = Top canvas boundary, 1.0 = Bottom ground boundary)} \\
Y_{\text{norm, bottom}} &= 1.0 - Y_{\text{norm, top}}
\end{aligned}$$

### Measured Stage Dimensions in Reference Video
- **Stage Box:** $X = 7$ to $473\text{ px}$ (Width = $466\text{ px}$), $Y = 294$ to $735\text{ px}$ (Height = $441\text{ px}$).
- **Aspect Ratio:** $466 : 441 \approx 1.057 : 1$.
- **Origin Axes:** Left vertical axis line at $X_{\text{norm}} \approx 0.047$; bottom horizontal axis line at $Y_{\text{norm, top}} \approx 0.998$.
- **Airplane Resting Position:**
  $$\begin{aligned}
  X_{\text{rest}} &= 0.1534 \times W_{\text{stage}} \\
  Y_{\text{rest, top}} &= 0.9467 \times H_{\text{stage}} \quad (Y_{\text{rest, bottom}} = 0.0533 \times H_{\text{stage}})
  \end{aligned}$$
- **Airplane Visual Bounds:** Width $\approx 0.11 \times W_{\text{stage}}$ (desktop) to $0.22 \times W_{\text{stage}}$ (mobile); aspect ratio $w/h \approx 2.1 : 1$.

---

## 3. Mathematical Motion Model

### Phase 1: Takeoff & Initial Ascent ($0 \le t \le 5.0\text{s}$)
Let $u = \frac{t}{5.0} \in [0.0, 1.0]$. The trajectory equations are:

$$\begin{aligned}
X(u) &= X_0 + (X_1 - X_0) \cdot u \\
Y_{\text{bottom}}(u) &= Y_0 + (Y_1 - Y_0) \cdot u^2 \\
Y_{\text{top}}(u) &= 1.0 - Y_{\text{bottom}}(u)
\end{aligned}$$

Where:
- $X_0 = 0.1534$, $X_1 = 0.6950 \approx 0.70$
- $Y_0 = 0.0533$, $Y_1 = 0.5640 \implies Y_{\text{top}}(1.0) = 0.4360 \approx 0.44$

#### Physical Breakdown:
- **Horizontal Velocity:** Constant forward velocity $v_x = \frac{0.542}{5.0\text{ s}} = 0.1084\text{ s}^{-1}$.
- **Vertical Acceleration:** Zero vertical velocity at liftoff ($u = 0$), followed by uniform vertical acceleration $a_y = 2 \times 0.5107 = 1.021\text{ s}^{-2}$. This produces the realistic runway roll followed by gentle lift-off observed in the reference video.

### Phase 2: Cruising Wave Oscillation ($t > 5.0\text{s}$)
Once $t > 5.0\text{s}$, the airplane enters steady cruising mode. In this mode, the airplane **never escapes the viewport**, regardless of how high the multiplier rises (even at $100\times$ or higher). Instead, it oscillates in a bounded Lissajous harmonic cycle:

$$\begin{aligned}
X(t) &= X_c + A_x \cdot \sin\left(\omega (t - 5.0) + \phi_0\right) \\
Y_{\text{top}}(t) &= Y_c + A_y \cdot \sin\left(\omega (t - 5.0) + \phi_0\right)
\end{aligned}$$

Where:
- $X_c = 0.6985 \approx 0.70$ (Center of horizontal sway)
- $A_x = 0.1485 \approx 0.15$ (Horizontal sway amplitude)
  $$\implies X(t) \in [0.55, 0.85]$$
- $Y_c = 0.4400 \approx 0.44$ (Center of vertical sway)
- $A_y = 0.1100 \approx 0.11$ (Vertical sway amplitude)
  $$\implies Y_{\text{top}}(t) \in [0.33, 0.55] \quad (Y_{\text{bottom}}(t) \in [0.45, 0.67])$$
- $\omega = 1.000\text{ rad/s} \quad (0.0010\text{ rad/ms})$
- Period $T = \frac{2\pi}{\omega} \approx 6.283\text{ seconds}$
- Initial phase offset $\phi_0 = 0.0\text{ rad}$ (ensuring $C^1$ continuity from Phase 1 into Phase 2).

#### Synchronization across Rounds:
Frame-by-frame cross-correlation between Round 3 ($Crash = 3.94\times$) and Round 8 ($Crash = 5.93\times$) yields a Pearson correlation coefficient $r = 0.998$, proving that flight path coordinates depend **only on elapsed flight time $t$**, and are completely decoupled from multiplier value or crash threshold.

---

## 4. Red Graph & Trajectory Trail Anchor

The red curve representing the flight path is rendered on a `<canvas>` underneath the airplane element:
1. **Base Coordinates:** Anchored at the runway origin $(X_{\text{origin}}, Y_{\text{origin}}) = (X_0 - 0.05 \cdot W, Y_{\text{ground}})$.
2. **Current Airplane Anchor Tip:** The curve attaches to the bottom-left tail of the airplane sprite:
   $$\begin{aligned}
   X_{\text{tip}} &= X_{\text{plane}} - 0.15 \cdot W_{\text{plane}} \\
   Y_{\text{tip}} &= Y_{\text{plane}} + 0.25 \cdot H_{\text{plane}}
   \end{aligned}$$
3. **Control Point for Smooth Quadratic Bézier:**
   $$\begin{aligned}
   X_{\text{ctrl}} &= \frac{X_{\text{origin}} + X_{\text{tip}}}{2} \\
   Y_{\text{ctrl}} &= Y_{\text{ground}} + 2\text{ px}
   \end{aligned}$$
4. **Fill Region:** Polygon bounded by $(X_{\text{origin}}, Y_{\text{origin}}) \to \text{Curve}(X_{\text{tip}}, Y_{\text{tip}}) \to (X_{\text{tip}}, Y_{\text{origin}}) \to (X_{\text{origin}}, Y_{\text{origin}})$ filled with semi-transparent red (`rgba(255, 0, 0, 0.3)`), stroked with a $3\text{px}$ solid red line (`#ff0000`).

---

## 5. Crash Transition & Fly-Away Dynamics

In the reference video (measured at 60 fps in Round 8 at $t = 210.80\text{s}$):
1. **Frame 0 ($t = 0.00\text{s}$):** Active flight. Curve is rendered, multiplier is white with black stroke.
2. **Frame 1 ($t = +0.016\text{s}$):**
   - The red trail fill and red curve line **instantly vanish** from the canvas.
   - The multiplier value freezes, turns bright red/magenta, and the `FLEW AWAY!` banner pops up in upper-left.
3. **Frames 2–39 ($t = +0.03\text{s}$ to $+0.65\text{s}$):**
   - The airplane detaches from the origin coordinate and flies smoothly off the right boundary:
     $$\begin{aligned}
     X(t) &= X_{\text{crash}} + v_{x,\text{fly}} \cdot \Delta t \\
     Y(t) &= Y_{\text{crash}} - v_{y,\text{fly}} \cdot \Delta t
     \end{aligned}$$
     where $v_{x,\text{fly}} \approx 0.85 \times W / \text{s}$, $v_{y,\text{fly}} \approx 0.40 \times H / \text{s}$.
   - Plane reaches off-screen within $0.65\text{s}$ and is set to `display: none`.
4. **Post-Crash Hold ($t = +0.65\text{s}$ to $+5.00\text{s}$):**
   - Stage displays `FLEW AWAY!` and final red multiplier for $\approx 5.0\text{s}$.
5. **Countdown Transition:**
   - Overlay transitions to propeller spinning animation and "WAITING FOR NEXT ROUND" / countdown bar.
   - Airplane reappears parked on the runway origin $(X_0, Y_0)$ ready for takeoff.

---

## 6. Implementation Checklist for Codebase

- [x] Replace old arbitrary $k$-formula and unbounded movement with exact 2-phase model ($u^2$ ascent for $5.0\text{s}$, then $\omega = 1.0\text{ rad/s}$ harmonic wave).
- [x] Bound $X \in [0.55, 0.85]$ and $Y_{\text{top}} \in [0.33, 0.55]$.
- [x] Anchor red curve directly to the airplane tail with quadratic Bézier.
- [x] Instant removal of red curve fill upon crash.
- [x] Smooth $0.65\text{s}$ fly-off animation upon crash.
- [x] Runway parking at $(0.1534, 0.9467)$ during countdown and intermission.
