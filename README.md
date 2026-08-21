# Namrah Rashid — Portfolio

Content Creator & Multimedia Specialist, Dubai UAE.

## Run locally

```
node server.mjs
```

Then open http://127.0.0.1:4173 (or double-click `run-local.cmd` on Windows).

## Structure

```
index.html            home — featured work
about/                bio, experience, tools
book/                 contact
video/                17 video projects  (grid + per-project pages)
photo/                17 design/carousel projects
assets/
  css/  js/  fonts/   self-contained — no external CDN
  img/                108 carousel images (WebP, 2 sizes)
  video/              170 silent 6s grid previews + poster frames
  data/               site.json, video-projects.json, photo-projects.json
```

Everything the pages need is committed here; the site has no runtime
dependency on any third-party host except Google Fonts.

## Full-resolution videos

The grid uses short silent previews. Full compressed videos live outside this
repo (they are too large for git) and are attached to a GitHub Release —
see `assets/data/video-projects.json` for the `file` name of each clip.

## Regenerating

The content pipeline lives outside the repo; `assets/data/*.json` is the
source of truth for what the pages render.
