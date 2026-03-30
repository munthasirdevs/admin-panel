```markdown
# Design System Strategy: Nocturnal Precision

## 1. Overview & Creative North Star: "The Obsidian Architect"
This design system is built on the philosophy of **"The Obsidian Architect."** We are moving away from the "flat boxes on a screen" approach and toward a UI that feels like a precision-engineered physical instrument. This system rejects the generic SaaS "template" look by prioritizing tonal depth over structural lines and using intentional asymmetry to guide the eye.

**The Creative North Star:** Every element should feel carved from a single block of dark glass. We achieve "Premium" not through more decoration, but through the rigorous elimination of the unnecessary. We break the grid using high-contrast typography scales—pairing massive, thin display type with microscopic, high-density labels—to create an editorial, high-end feel.

---

### 2. Colors & Surface Philosophy
The palette is rooted in deep cool grays and indigos, designed to reduce eye strain while maintaining a sense of authoritative luxury.

*   **Background (`surface-dim`):** `#0f131d` (The base canvas)
*   **Primary Accent (`primary`):** `#c0c1ff` (A desaturated, luminous indigo)
*   **Secondary Accent (`tertiary`):** `#ffb783` (A warm sunset tone for high-contrast moments)

#### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. We define boundaries through **Background Shifts** only.
*   **Level 0 (Base):** `surface` (`#0f131d`)
*   **Level 1 (Sections):** `surface-container-low` (`#171b26`)
*   **Level 2 (Cards):** `surface-container` (`#1c1f2a`)
*   **Level 3 (Popovers/Modals):** `surface-container-highest` (`#313540`)

#### Glass & Gradient Soul
To avoid a "flat" dark mode, use the **Indigo Glow** technique. Apply a 15% opacity `primary` gradient to the top-left corner of important cards. For floating navigation or sidebars, use `surface-bright` with a `backdrop-blur` of 20px to create a frosted glass effect that feels integrated into the environment.

---

### 3. Typography: Editorial Authority
We pair **Manrope** (Headlines) for its geometric, modern character with **Inter** (Body) for its unparalleled readability.

| Role | Font | Size | Weight | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Display-LG** | Manrope | 3.5rem | 300 (Light) | -0.02em |
| **Headline-SM** | Manrope | 1.5rem | 600 (Semi-Bold) | -0.01em |
| **Body-MD** | Inter | 0.875rem | 400 (Regular) | 0 |
| **Label-SM** | Inter | 0.6875rem | 700 (Bold) | 0.05em (All Caps) |

**Design Note:** Use `Display-LG` sparingly. High-end design thrives on "Negative Space Tension"—place a large headline far away from a small label to create a sophisticated, asymmetric balance.

---

### 4. Elevation & Depth: Tonal Layering
In this system, "Up" means "Brighter," not "More Shadows."

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-high` card on top of a `surface-container-low` background. The subtle contrast is enough for the human eye to perceive depth without visual clutter.
*   **Ambient Shadows:** When an element must float (e.g., a dropdown), use a shadow color tinted with the accent: `rgba(99, 102, 241, 0.08)`. Use a `40px` blur and `20px` Y-offset.
*   **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` token (`#464554`) at **15% opacity**. It should be felt, not seen.

---

### 5. Signature Components

#### Minimalist Stats Cards
*   **Structure:** No borders. Use `surface-container-low`.
*   **Styling:** A 2px vertical "accent bar" using `primary-container` on the left side.
*   **Typography:** The value uses `title-lg`, while the label uses `label-sm` in `on-surface-variant` (all caps).

#### Sleek 'View All' Buttons
*   **Tertiary Style:** Never use a box for 'View All.' 
*   **Design:** Use `label-md` with `primary` color. Pair with a custom `4px` indigo dot to the left. On hover, the dot expands into a `12px` arrow icon using a 200ms spring transition.

#### Progress Bars
*   **Track:** `surface-container-highest` (`#313540`).
*   **Indicator:** A linear gradient from `primary` to `primary-container`.
*   **Glow:** Apply a `drop-shadow(0 0 8px rgba(192, 193, 255, 0.4))` to the indicator only.

#### Mini-Lists
*   **Forbid Dividers:** Separate list items using `spacing-4` (1rem). 
*   **Interaction:** On hover, the entire list item background shifts to `surface-bright` with a `xl` (1.5rem) corner radius. This "pill hover" effect feels more premium than a full-width line.

---

### 6. Do’s and Don’ts

#### Do:
*   **Use Asymmetry:** Place a "Status" badge in the top right of a card, offset by 8px from the edge to create breathing room.
*   **Trust the Spacing Scale:** Use `spacing-12` (3rem) between major sections. High-end design requires "wasteful" space.
*   **Layer Contextually:** Always ensure the text (`on-surface`) has at least 7:1 contrast against the surface container.

#### Don’t:
*   **No Pure Black:** Never use `#000000`. It kills the "obsidian" depth.
*   **No Sharp Corners:** Every container must use `xl` (24px) or `lg` (16px) rounding. Sharp corners feel "Legacy SaaS."
*   **No Grid-Lock:** Don't feel forced to align everything to a center vertical axis. Try aligning a headline to the far left and a CTA to the far right to create "The Linear Look."

---

### 7. Implementation Tokens
*   **Corner Radius:** `xl` (24px) for main cards, `lg` (16px) for nested elements.
*   **Spacing Unit:** 8pt base. Always use multiples of 4 (e.g., `spacing-1.5` for tight labels, `spacing-20` for hero sections).
*   **Motion:** Use `cubic-bezier(0.4, 0, 0.2, 1)` for all surface transitions. It mimics the weight of high-end hardware.```