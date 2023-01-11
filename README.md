# Experimental Trading Monorepo

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed _(to run the script)_
- [PNPM](https://pnpm.io/installation) installed _(to install packages)_
- Internet Connection _(to initialize the websocket connection)_

## Usage Guide

> The project uses PNPM Workspaces, so you must use PNPM to install you packages.

Setup the environment by creating a `.env` file in your root folder:

> Use the .env.example file to guide you

- Database access for [Prisma](https://www.prisma.io/)
  - DATABASE_URL
- Binance access for the trading package
  - BINANCE_API_KEY
  - BINANCE_API_SECRET

To install you packages, run the following in the root folder:

```ssh
pnpm i # or pnpm install
```

You can use the follwing commands from the root folder:

```ssh
pnpm build # compiles your typescript files to javascript for node to run them
pnpm dev # runs pnpm build and then starts the apps
```

> Note: When you make changes, you need to restart the node process
