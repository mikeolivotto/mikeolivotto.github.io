This project was migrated from Create React App to Vite. It is a Vite + React site.

Development

- Run locally:

	```bash
	yarn dev
	# or
	npm run dev
	```

- Build production bundle:

	```bash
	yarn build
	# or
	npm run build
	```

Deployment

This site is deployed to GitHub Pages using the recommended GitHub Actions flow.

1. Push to `main` or run the workflow manually.
2. The workflow builds the Vite app and uploads the `dist/` folder as a Pages artifact.
3. GitHub deploys that artifact to the GitHub Pages site.
4. In GitHub, open Settings → Pages and set the source to `GitHub Actions`.

Workflow file:

```bash
.github/workflows/deploy.yml
```

Important notes

- This is the official GitHub Pages deployment method for static sites.
- Do not keep both the old `gh-pages` branch push workflow and the Pages workflow in the same file; use only one deployment path.
- Single-page routing: GitHub Pages returns 404 for non-root routes. Keep the existing `404.html` fallback if the site uses client-side routing.
- If the repository is a user/organization site like `<username>.github.io`, the site may be served from the repository root rather than a project page URL.

Other notes

- To serve locally during development, use `yarn dev`.
- For metadata updates, consider `react-helmet` if you need title/meta overrides.