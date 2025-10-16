# Placeholder Replacement Guide

This guide provides step-by-step instructions for replacing all placeholder content with your real content.

## Quick Checklist

- [ ] Replace logo image
- [ ] Replace hero banner image
- [ ] Replace 3 artist photos
- [ ] Replace 3 album cover images
- [ ] Replace about section image
- [ ] Replace 3 audio track files
- [ ] Update artist names and genres
- [ ] Update album titles and artist names
- [ ] Update about section text
- [ ] Update contact information
- [ ] Update social media links

## Detailed Instructions

### Step 1: Prepare Your Content

Before starting, gather:
- Your logo (200x200px, PNG format recommended)
- Hero banner (1920x1080px or similar)
- Artist photos (600x600px each)
- Album artwork (600x600px each)
- About section photo (800x600px)
- Music preview tracks (MP3 format, 30-60 seconds each)

### Step 2: Replace Images

Navigate to the `images/` folder and replace these files:

1. **logo-placeholder.png** → Your logo
2. **hero-placeholder.jpg** → Your banner image
3. **artist1-placeholder.jpg** → First artist photo
4. **artist2-placeholder.jpg** → Second artist photo
5. **artist3-placeholder.jpg** → Third artist photo
6. **album1-placeholder.jpg** → First album cover
7. **album2-placeholder.jpg** → Second album cover
8. **album3-placeholder.jpg** → Third album cover
9. **about-placeholder.jpg** → About section photo

**Options:**
- Keep the same filenames (easiest)
- OR rename your files to match these names
- OR update the `src` attributes in `index.html` to match your new filenames

### Step 3: Replace Audio Files

Navigate to the `sounds/` folder and replace these files:

1. **track1-placeholder.mp3** → First track preview
2. **track2-placeholder.mp3** → Second track preview
3. **track3-placeholder.mp3** → Third track preview

**Tips:**
- Use 30-60 second previews to keep file sizes manageable
- MP3 format at 128-320 kbps is recommended
- Keep files under 5MB each for faster loading

### Step 4: Update Text Content in index.html

Open `index.html` in a text editor and find/replace:

1. **Artists Section** (around line 47-67):
   ```html
   <h3>Artist Name 1</h3>
   <p>Genre: [Genre Placeholder]</p>
   ```
   Replace with actual artist names and genres.

2. **Releases Section** (around line 72-120):
   ```html
   <h3>Album Title 1</h3>
   <p class="artist-name">Artist Name</p>
   ```
   Replace with actual album titles and artist names.

3. **About Section** (around line 127-133):
   ```html
   <p>[Replace with your record label story and mission statement]</p>
   <p>ROKKO Records is dedicated to...</p>
   ```
   Replace with your actual story and mission.

4. **Contact Section** (around line 151-153):
   ```html
   <p>Email: info@rokkorecords.com</p>
   <p>Phone: [Your Phone Number]</p>
   <p>Address: [Your Address]</p>
   ```
   Replace with your actual contact details.

5. **Social Media Links** (around line 161-164):
   ```html
   <a href="#" title="Facebook">FB</a>
   <a href="#" title="Instagram">IG</a>
   ```
   Replace `#` with your actual social media URLs.

### Step 5: Test Your Website

1. Open `index.html` in a web browser
2. Check all images load correctly
3. Test audio players
4. Verify all links work
5. Test on mobile devices (or use browser developer tools)
6. Test the contact form

### Step 6: Optional Customization

Edit `styles.css` to customize:
- Colors (search for hex color codes like `#ff6b35`)
- Fonts (change `font-family` values)
- Spacing and layout
- Animation effects

### Step 7: Publish Your Website

Once you're happy with the results:

1. **GitHub Pages**:
   - Commit and push all files to your repository
   - Go to Settings → Pages
   - Select your branch and save

2. **Web Hosting**:
   - Upload all files via FTP/SFTP to your hosting provider
   - Ensure `index.html` is in the root directory

3. **Netlify/Vercel**:
   - Connect your GitHub repository
   - These services will auto-deploy on each commit

## Common Issues and Solutions

### Images Not Loading
- Check file paths match exactly (case-sensitive)
- Ensure images are in the `images/` folder
- Verify file extensions (.jpg, .png) match in HTML

### Audio Not Playing
- Ensure files are actual MP3 format
- Check file paths in HTML
- Test in different browsers (some formats may not be supported)
- Check file size (very large files may not load properly)

### Styling Issues
- Clear browser cache
- Check `styles.css` is linked correctly in `index.html`
- Use browser developer tools to inspect elements

### Contact Form Not Sending Emails
- The current form is front-end only
- To actually send emails, you need to integrate a backend service:
  - Formspree (https://formspree.io/)
  - EmailJS (https://www.emailjs.com/)
  - Your own server-side script

## Need Help?

If you encounter any issues:
1. Check file paths and filenames carefully
2. Ensure all files are in the correct folders
3. Validate HTML using W3C validator
4. Check browser console for error messages

## Adding More Content

### To Add More Artists:
1. Copy an existing artist card (lines 48-53 in `index.html`)
2. Paste it in the artist grid
3. Update the image filename and text
4. Add the new image to the `images/` folder

### To Add More Releases:
1. Copy an existing release card (lines 74-86 in `index.html`)
2. Paste it in the release grid
3. Update the image, audio, and text
4. Add the new image and audio files to their respective folders

---

**Remember**: Always keep backups of your original files before making changes!
