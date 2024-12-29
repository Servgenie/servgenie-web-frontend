Welcome to the Frontend Codebase of the Servgenie Website! 🚀

The Servgenie website is a subscription platform where users can sign up to receive exclusive updates about the Servgenie app. Stay informed on the latest features, upcoming events, and launch details, as we build a revolutionary service platform connecting consumers with skilled service providers.

Visit our live website at https://servgenie.co

## Prerequisites

This project is created with TypeScript, Next.js App Router with Client Components, and React. Before you begin, make sure you have the following installed:

Node verion 22 or later
NPM version 11 or later

If you are new to these technologies, we recommend you go through the official React, Next.js, and TypeScript tutorials first.

## Getting Started

### Install Node

Install Node Version Manager (NVM)
NVM allows you to manage and switch between Node.js versions seamlessly.

1. Follow the official installation guide for your operating system:  
   [NVM Installation Guide](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Verify the installation by running:
   ```bash
   nvm --version
   ```
3. Install `vsc-nvm` plugin in VS Code to auto switch to the required Node version specified in `.nvmrc`

### Dev Env Setup

Create a `.env` file.
Refer to `.env.example` for the required keys.
Use the env values from Amplify QA environment.

### Run the Dev Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prepare Husky Pre-commit

Our app uses Husky and Lint-Staged to ensure consistent code formatting before every commit. This setup automatically formats staged files using Prettier and ESLint.

To enable pre-commit auto-formatting, run the following command after cloning the repository:
`npm run prepare`

This only needs to be ran once to generate the husky scripts under `.husky` (part of `.gitignore`) to install Husky hooks, allowing the pre-commit hook to automatically format your code.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Known Issues

1. Git error: RPC failed with HTTP 400
   `error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400`
   If you get the RPC failed error above, this is due to pushing large assets. Simply run `git config http.postBuffer 524288000`

## Join Us

Be a part of an innovative journey, and shape the future of Servgenie!

- [Instagram](https://www.instagram.com/servgenie)
- [LinkedIn](https://www.linkedin.com/company/servgenie)
- [Facebook](https://www.facebook.com/servgenie.co)
