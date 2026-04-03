---
description: Deploy the JumpAero EMS site to GitHub Pages
---

# Deploy to GitHub Pages

Push all local changes to GitHub. The GitHub Actions workflow will automatically deploy the site.

// turbo-all

1. Stage all changes:
```
git add -A
```

2. Commit with a descriptive message (replace the message as needed):
```
git commit -m "Update EMS landing page"
```

3. Push to main (this triggers auto-deploy to GitHub Pages):
```
git push origin main
```

4. The site will be live at https://el7ias.github.io/jumpaero_ems/ within ~1 minute.
