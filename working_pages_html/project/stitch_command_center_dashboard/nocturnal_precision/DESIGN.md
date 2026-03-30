# Design System: Nocturnal Precision

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Architect"**

This design system is built on the philosophy of *Nocturnal Precision*. It rejects the cluttered, high-contrast aesthetics of standard dark modes in favor of a sophisticated, editorial experience. We treat the interface not as a flat screen, but as a physical space of layered obsidian and slate. 

To move beyond a "template" look, we utilize **Intentional Asymmetry**. Bento-style layouts should not be perfectly uniform; vary the spans of your grid to create a rhythmic flow. Overlap elements—such as a high-fidelity icon breaking the boundary of a card—to provide a sense of three-dimensional depth and custom craftsmanship.

---

## 2. Colors: The Depth of Shadow
The palette is rooted in the transition from deep obsidian to atmospheric indigo.

### Core Palette
*   **Surface (Base):** `#0f131d` — The foundation of the entire experience.
*   **Primary (Indigo):** `#c0c1ff` (Active) | `#6366f1` (Brand Soul) — Used for critical actions and brand presence.
*   **Surface Tiers (Nesting):**
    *   `surface_container_lowest`: `#0a0e18` (Recessed areas, deep wells)
    *   `surface_container`: `#1c1f2a` (Standard card background)
    *   `surface_container_highest`: `#313540` (Raised elements/Modals)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning content. To separate a navigation bar from a hero section, or a sidebar from a main feed, use a background shift (e.g., `surface_container_low` against `surface`). Boundaries are felt through tonal shifts, not drawn with lines.

### Signature Textures
*   **The Indigo Glow:** For primary CTAs, do not use flat hex codes. Apply a subtle linear gradient from `primary` (#c0c1ff) to `primary_container` (#8083ff) at a 135-degree angle.
*   **Glassmorphism:** For floating menus or navigation overlays, use `surface_container` at 70% opacity with a `20px` backdrop-blur. This ensures the "Obsidian" depth is maintained even when UI elements overlap.

---

## 3. Typography: Editorial Authority
We pair the brutalist, wide stance of **Syne** with the geometric clarity of **Outfit**.

*   **Display & Headlines (Syne):** Use for high-level storytelling. Set `display-lg` with `letter-spacing: -0.02em` and `font-weight: 800`. This creates an authoritative, "pressed-in" look.
*   **Body & Titles (Outfit):** Use for utility and reading. Outfit’s generous x-height ensures legibility against dark backgrounds. 
*   **Micro-Copy (Label-sm):** Use `on_surface_variant` (#c7c4d7) to reduce visual noise for metadata.

---

## 4. Elevation & Depth: Tonal Layering
In this system, elevation is a product of light and material, not just CSS shadows.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface_container_highest` card inside a `surface_container` section to create a natural, physical lift.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use a shadow with a blur radius of `32px` and a spread of `-4px`. The shadow color must be a tinted version of the background (`rgba(10, 14, 24, 0.5)`), never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. It should feel like a faint catch-light on the edge of a glass pane, not a container wall.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** Indigo gradient (`primary` to `primary_container`). `rounded-xl`. On hover, add a `primary` outer glow with `4px` blur.
*   **Secondary:** Ghost style. No background, `outline_variant` at 20% opacity. On hover, transition to `surface_container_high`.
*   **Tertiary:** Text-only using `primary` color. High-intent, low-fret.

### The Bento Card
*   **Background:** `surface_container`.
*   **Radius:** `xl` (1.5rem) for the outer container; `md` (0.75rem) for nested elements.
*   **Interaction:** On hover, the card should scale to `1.02` and the background should shift to `surface_container_high`. Use a `400ms` cubic-bezier(0.4, 0, 0.2, 1) transition.

### Input Fields
*   **State:** Default state uses `surface_container_lowest` for a "recessed" feel.
*   **Active:** The border "wakes up" with a 40% opacity `primary` glow.
*   **Typography:** Labels use `label-md` in `on_surface_variant`.

### Navigation Rails
*   Forbid dividers. Use `surface_container_low` for the rail background and a vertical `2px` indigo "pill" indicator next to the active icon to signify state.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace negative space. Use the `spacing-12` (3rem) or `spacing-16` (4rem) tokens to let the "Nocturnal" atmosphere breathe.
*   **Do** use Material Symbols in "Rounded" or "Sharp" styles, keeping weight at `300` for a refined, spindly look.
*   **Do** use asymmetrical Bento grids where one cell is significantly larger (e.g., a 2x2 span) to create a visual anchor.

### Don’t:
*   **Don’t** use pure white (`#FFFFFF`) for body text. Use `on_surface` (#dfe2f1) to prevent eye strain and "blooming" effects.
*   **Don’t** use 100% opaque borders. They break the illusion of the obsidian surface.
*   **Don’t** use standard "Drop Shadows." If an element needs to feel elevated, use tonal shifts first, and diffused ambient shadows second.