# Profile Picture Instructions

## How to Add Your Profile Picture

1. **Prepare your image:**
   - Use a square image (recommended: 400x400px or higher)
   - Common formats: JPG, PNG, or WebP
   - Keep file size reasonable (under 1MB)

2. **Replace the placeholder:**
   - Save your image as `profile-picture.jpg` (or `.png`, `.webp`)
   - Place it in the `public/` directory
   - The current placeholder is `profile-picture.svg`

3. **Update the image paths (if needed):**
   If you use a different file extension, update these files:
   - `app/page.tsx` (line ~19)
   - `app/about/page.tsx` (line ~19)
   
   Change `src="/profile-picture.svg"` to `src="/profile-picture.jpg"` (or your extension)

4. **Test your changes:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to see your profile picture

## Current Profile Picture Locations

Your profile picture appears on:
- **Homepage** - Left side of the welcome section
- **About page** - Top of the page with your bio

Both images will automatically update when you replace the file in the `public/` directory.