# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Active Arts** (activearts.co.nz) is an existing WordPress website hosted on a DigitalOcean Droplet. This repository is for server maintenance and website management — there is no local development environment.

## Infrastructure

- **DO Team:** Creative Arts (separate from the Peacepod team)
- **Droplet:** `wordpress-s-1vcpu-1gb-sgp1-01` (ID: 131278236)
- **IP:** 178.128.101.247
- **Region:** Singapore 1 (`sgp1`)
- **Size:** s-1vcpu-1gb (1 vCPU / 1 GB RAM / 25 GB disk, $6/mo)
- **OS:** Ubuntu 18.04 (WordPress 1-Click image)
- **Domain:** activearts.co.nz (DNS managed in DigitalOcean)
- **Backups:** Weekly (Fridays), 28-day retention
- **Firewall:** `active-arts-firewall` (ID: ca9db860-27d5-4a28-b620-3cb39f3c2961) — ports 22, 80, 443 inbound
- **Uptime Check:** ID `16a14c99-b6fa-4b64-aa20-bae1a6f20466` (HTTPS from us_east, eu_west, se_asia)
- **Alert Policies:** CPU > 90% for 5m → rob@offshoot.co.nz
- **SSL:** Let's Encrypt, auto-renew via certbot

## Known Issues (requires SSH access)

- **Ubuntu 18.04 EOL** — no security patches since April 2023, needs upgrade
- **1 GB RAM** — likely cause of database OOM crashes, consider resize to 2 GB ($12/mo)
- **No SSH keys** registered — password-only access
- **No reserved IP** — IP changes if droplet is rebuilt
- **DO monitoring agent** not installed — memory/disk alerts unavailable

## MCP Servers

The DigitalOcean MCP is configured at project level in `.mcp.json`. It requires the `DIGITALOCEAN_API_TOKEN` environment variable to be set with a token scoped to the Active Arts team.

Use `mcp__digitalocean__*` tools for all infrastructure tasks (droplet management, DNS, monitoring, etc.).

## Slash Commands

- `/maintain` — Run a full health check on the server (website, SSL, droplet, backups, firewall, DNS, monitoring)

## Key Conventions

- No local WordPress development environment — changes are managed directly on the server or via the WordPress admin
- The DO API token for this project is different from other projects (e.g., Peacepod/n8n) because Active Arts is under a separate DigitalOcean team
- Never store API tokens or credentials in files — use environment variables
- If the site goes down with a "Database Error", power-cycle the droplet first (`mcp__digitalocean__power-cycle-droplet` with ID 131278236)
