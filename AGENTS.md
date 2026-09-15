# AGENTS.md

## Rules

- Do NOT use `!important` anywhere in CSS or inline styles. Use higher specificity selectors instead.
- Use `backdrop-filter` only; do not add `-webkit-backdrop-filter` declarations.
- Use unique class names (e.g. `cg-*`) to avoid conflicts with Bootstrap or other frameworks.
- Scope theme-specific styles with `.light` and `.dark` parent selectors.
