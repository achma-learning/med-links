# Adding a link

All link data lives in [`links.js`](./links.js) as one plain JS array. There
is no build step — `index.html` loads that file directly, so editing it is
the whole job.

## Schema

```js
{
  title: "Short display name",
  url:   "https://example.org/",
  tag:   "maroc" | "france" | "international",
  group: "Subsection label shown in the UI",
  desc:  "One short line of context",
}
```

- `tag` must be exactly one of the three values above — it drives the color
  dot and the `0`/`1`/`2`/`3` keyboard filters.
- `group` is free text. Links with the same `group` are shown together under
  one heading; put a new link in an existing group when it fits (e.g.
  `"Officiel"`, `"Sociétés savantes"`, `"HAS & France"`, `"International"`),
  or introduce a new group name if it doesn't.

## Option A — add it by hand

1. Open `links.js`.
2. Copy an existing object near the group it belongs to, and edit the
   fields.
3. Add a trailing comma, save, open `index.html` in a browser to sanity
   check it shows up and the link works.

That's it — no build/compile step.

## Option B — add it with an AI assistant

Paste this prompt into your assistant of choice, filling in the URL(s):

> I'm adding link(s) to a `links.js` file that is a JS array of objects with
> this exact schema: `{ title, url, tag, group, desc }`, where `tag` is one
> of `"maroc" | "france" | "international"` and `group` is a short free-text
> section label. Here is the current file: [paste `links.js`]. Add an entry
> for this URL: `<URL>`. Infer `title` and `desc` from the page. Pick `tag`
> based on the resource's country/scope, and pick an existing `group` if the
> link fits one, otherwise propose a new one. Output only the new object(s)
> plus where in the array to insert them.

Review the suggested `tag`/`group`/`desc` before committing — an AI can get
the wrong country or overstate what a page offers.

## Keeping `sources-medecine-maroc.md` in sync

That file is the original curated Markdown list (with priority tiers and
usage notes) that `links.js` was derived from. If you add a link there too,
mirror it into `links.js` (or vice versa) so the two don't drift apart.
