# SkyGrind Website

Modern static website for the SkyGrind Minecraft SkyBlock server.

## Configuration

Edit `js/config.js` to set the server IP, future Tebex store URL, Discord URL and API base URL.

## Pages

Home, Play, Features, Leaderboards, Ranks, Store, Rules and FAQ.

## GitHub Pages

`.github/workflows/deploy.yml` deploys the site to GitHub Pages on pushes to `main`.

## Future API

Keep MariaDB credentials off the frontend. When the SkyGrind Java API is ready, connect leaderboard/status data through a public authenticated API and keep its endpoint in configuration.