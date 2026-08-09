# DMOL Studio — Dark Editorial V2 Prototype

Static Vercel-ready concept site, updated toward the darker luxury/editorial direction.

## What changed in this pass
- Full dark visual system across Home / Portfolio / About / Contact.
- New artistic **DMOL** wordmark treatment using Cormorant Garamond Bold Italic (loaded from Google Fonts; no font files bundled).
- Complete current portfolio index represented: 13 projects / collections.
- Local optimized cover image downloaded for every current project and saved in `assets/projects/`.
- `data/projects.json` contains the migration manifest with source URL, title, category and local cover path.
- Portfolio filter for Weddings vs Editorial Collections.

## Migration status
The 13 project covers are local. Portfolio cards temporarily open the existing published DMOL Studio story so the complete galleries remain accessible while the full image-by-image migration is prepared. The next production pass can import each complete gallery and switch those links to local project routes.

## Deploy to Vercel
No build step is required. Deploy as a static site.
