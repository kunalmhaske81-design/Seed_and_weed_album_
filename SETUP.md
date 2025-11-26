# Quick Setup Guide

## Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd seed-weed-album
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Adding Your Images

### Seed Images
Place images in `public/images/seeds/` with these exact filenames:
- cotton.jpg
- soyabean.jpg
- tur.jpg
- wheat.jpg
- gram.jpg
- jowar.jpg
- moong.jpg
- groundnut.jpg
- dhaincha.jpg

### Weed Images
Place images in `public/images/weeds/` with these exact filenames:
- harali.jpg
- chimanchara.jpg
- congress.jpg
- dhotra.jpg
- tandulja.jpg
- dhudi.jpg
- kena.jpg
- tantani.jpg
- lavala.jpg
- tarota.jpg
- reshimkata.jpg
- chikta.jpg
- landga.jpg

### Student Photos
Place photos in `public/images/students/` as:
- student1.jpg through student6.jpg

## Updating Student Information

Edit `src/data.js` and modify the `STUDENTS_DATA` array:

```javascript
export const STUDENTS_DATA = [
  { name: "Your Name", regNo: "YOUR_REG_NO", image: "/images/students/student1.jpg" },
  // Update all 6 students
];
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Project Structure

- `src/components/` - All React components
- `src/data.js` - All seed, weed, and student data
- `public/images/` - Image assets
- `src/App.jsx` - Main application component

## Features

✅ Interactive rotating circle with 9 clickable seed segments  
✅ Smooth scroll to seed details  
✅ Responsive design for all devices  
✅ Image placeholder handling  
✅ 13 weed cards in grid layout  
✅ Project team footer section  
✅ Beautiful nature-inspired design

## Troubleshooting

**Images not showing?**
- Make sure filenames match exactly (case-sensitive)
- Check that images are in the correct `public/images/` subdirectories
- Placeholder graphics will show if images are missing

**Dependencies not installing?**
- Make sure you have Node.js installed (version 16 or higher)
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

**Build errors?**
- Check that all component imports are correct
- Ensure all required dependencies are installed

## Need Help?

Check the main README.md file for more detailed information.

