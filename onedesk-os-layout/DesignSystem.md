# 🧩 OneDesk Design System

This design system defines the standard components, utilities, and principles to maintain a **clean, scalable, and consistent UI** across all products under the OneDesk OS umbrella.

---

## 🎨 Color Palette

| Token         | Light Mode     | Dark Mode     |
|---------------|----------------|----------------|
| Primary       | #2563eb        | #3b82f6        |
| Secondary     | #64748b        | #94a3b8        |
| Background    | #ffffff        | #1e1e1e        |
| Surface       | #f1f5f9        | #2a2a2a        |
| Text Primary  | #111827        | #f9fafb        |
| Text Muted    | #6b7280        | #9ca3af        |

---

## 🔤 Typography

- Font Family: `Inter, sans-serif`
- Heading Sizes:  
  - h1: `text-3xl font-bold`  
  - h2: `text-2xl font-semibold`  
  - h3: `text-xl font-medium`
- Body Text: `text-base text-gray-800`

---

## 🔘 Buttons

| Variant | Styles |
|--------|--------|
| `primary` | Blue background, white text |
| `ghost` | Transparent with border |

**Example Class:**
```html
<button class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
  Primary Button
</button>