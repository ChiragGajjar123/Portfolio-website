# AGENTS.md

## CSS instructions

1. Prefer Bootstrap classes for browser UI layout, spacing, typography, color, borders, forms, buttons, and responsive behavior whenever Bootstrap meets the requirement. Open Graph `ImageResponse` artwork may use inline styles because it is rendered as an image.
2. Add custom CSS only when Bootstrap cannot meet a required design or behavior. Use unique `cg-*` names for custom classes, and keep component-specific styles in a co-located CSS Module.
3. Keep vendored Bootstrap 5.3.8 rules, shared theme tokens, and global custom styles together in `app/assets/css/bootstrap.scss`, imported directly by `app/layout.tsx` and compiled by Next.js. Do not add the Bootstrap npm package, generate/copy/import `bootstrap.css`, or create a separate common stylesheet.
4. Keep authored theme tokens in exactly two blocks: `:root` for default/light values and `.dark` for dark-mode overrides. Do not add `.light` or `[data-bs-theme]` selectors to authored token blocks; Bootstrap's generated selectors are framework output.
5. Use CSS variables for values in authored custom CSS. Store shared tokens in the shared Sass source and component-specific values in that component's CSS Module. Token declarations may contain concrete values.
6. Write default custom styles without a theme wrapper and scope dark-specific overrides under `.dark`.
7. Do not add `!important` to app-authored CSS or inline styles; resolve conflicts with appropriate specificity. The existing vendored Bootstrap block may retain upstream `!important` declarations; preserve its license notice and do not expand those declarations into custom styles.
8. Use `backdrop-filter` only; do not add `-webkit-backdrop-filter` declarations.

## Git and publishing instructions

- Never run `git push` or otherwise publish code to a remote without the user's explicit permission for that specific push. This rule applies in every scenario; preparing or committing local changes does not grant permission to push.
