# med-links

A quick-links page of useful medical resources for a médecin au Maroc — tagged
**🇲🇦 Maroc**, **🇫🇷 France**, and **🌍 International**.

**[Open the page](./index.html)** — a single static HTML file, no build step,
no dependencies. Open it directly in a browser or serve it with any static
host (e.g. GitHub Pages).

## Keyboard-driven, on purpose

The page is built to be used without touching the mouse, in the spirit of
fast keyboard-first search UIs:

| Key | Action |
|---|---|
| `/` | Focus search |
| `↑` `↓` or `j` `k` | Move through results |
| `Enter` | Open the selected link (new tab) |
| `0` / `1` / `2` / `3` | Filter: all / Maroc / France / International |
| `Esc` | Clear search, then unfocus |
| `?` | Toggle the shortcuts help |

Typing in the search box filters live across title, description, group and
URL. Mouse and touch work too — the keyboard is just the fast path.

## Structure

- `index.html` — the page itself (markup, styling, and the small amount of
  JS that renders/filters/navigates the list). You should rarely need to
  touch this file just to add a link.
- `links.js` — the actual data: one plain JS array of link objects. This is
  the only file you edit to add, edit, or remove a link.
- `sources-medecine-maroc.md` — the original curated, human-readable
  Markdown source list that `links.js` is derived from. Kept as the
  narrative/reference version with priority tiers and usage notes.

## Adding a link

See [CONTRIBUTING.md](./CONTRIBUTING.md) — it covers both adding a link by
hand and generating one with an AI assistant.
