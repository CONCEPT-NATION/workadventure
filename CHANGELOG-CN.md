# CONCEPT-NATION patches — Changelog

This file tracks the custom patches applied by CONCEPT-NATION on top of
upstream WorkAdventure releases. Each entry corresponds to a published
image on `ghcr.io/concept-nation/workadventure-play`.

## v1.27.7-cn-jitsi-2 — 2026-05-12

**Base:** upstream `v1.27.7`
**Image:** `ghcr.io/concept-nation/workadventure-play:v1.27.7-cn-jitsi-2`
**Deployed on:** `meta:/opt/workadventure` (real production), validated
in dry-run on test server before deployment.

### Patches included

- **Skip mobile Jitsi "Open in App" landing page**
  Sets `disableDeepLinking: true` in the default Jitsi config so Jitsi
  Meet loads directly in the iframe on mobile instead of showing the
  intermediate "Open in App" page (where "continue in browser" was
  hidden below the fold and confused users). Inside WorkAdventure the
  only sensible behavior is to keep the call in the browser anyway.
  File: [play/src/front/WebRtc/CoWebsite/JitsiCoWebsite.ts](play/src/front/WebRtc/CoWebsite/JitsiCoWebsite.ts)
  Upstream commit cherry-picked from `cn-patches` branch: `291882661`

### Build & deploy

Built via `.github/workflows/cn-build-play.yml` (triggered automatically
on push to `v1.27.*-cn-*` branches). Deployed by adding a
`docker-compose.override.yaml` on the server that swaps just the `play`
service image — all other services stay on upstream `v1.27.7`.

### Rollback

```bash
rm /opt/workadventure/docker-compose.override.yaml
docker compose up -d play
```

Reverts to upstream `thecodingmachine/workadventure-play:v1.27.7` in
~10 seconds.

---

## v1.27.10-cn-jitsi-1 — 2026-05-12

**Base:** upstream `v1.27.10`
**Image:** `ghcr.io/concept-nation/workadventure-play:v1.27.10-cn-jitsi-1`
**Deployed on:** test server only (`workadventure:/opt/wa`).

Same Jitsi mobile patch as `v1.27.7-cn-jitsi-2` above. Built first to
validate the deploy pipeline against the upstream v1.27.10 release;
the equivalent v1.27.7 image was then built to match the version
actually running in production.
