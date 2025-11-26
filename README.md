# Seed and Weed Album

A modern, interactive website for a college project showcasing agricultural seeds and weeds information.

## Features

- 🌾 **Interactive Rotating Circle**: Click on seed segments to view detailed information
- 📱 **Responsive Design**: Works beautifully on all devices
- 🎨 **Nature-Inspired Theme**: Clean, modern design with greens and earthy tones
- 🖼️ **Image Placeholder Support**: Gracefully handles missing images
- 📊 **Detailed Information**: Comprehensive data about seeds and weeds
- 👥 **Project Team Section**: Display team members with photos and registration numbers

## Project Structure

```
seed-weed-album/
├── public/
│   └── images/
│       ├── seeds/
│       │   ├── cotton.jpg
│       │   ├── soyabean.jpg
│       │   ├── tur.jpg
│       │   ├── wheat.jpg
│       │   ├── gram.jpg
│       │   ├── jowar.jpg
│       │   ├── moong.jpg
│       │   ├── groundnut.jpg
│       │   └── dhaincha.jpg
│       ├── weeds/
│       │   ├── harali.jpg
│       │   ├── chimanchara.jpg
│       │   ├── congress.jpg
│       │   ├── dhotra.jpg
│       │   ├── tandulja.jpg
│       │   ├── dhudi.jpg
│       │   ├── kena.jpg
│       │   ├── tantani.jpg
│       │   ├── lavala.jpg
│       │   ├── tarota.jpg
│       │   ├── reshimkata.jpg
│       │   ├── chikta.jpg
│       │   └── landga.jpg
│       └── students/
│           ├── student1.jpg
│           ├── student2.jpg
│           ├── student3.jpg
│           ├── student4.jpg
│           ├── student5.jpg
│           └── student6.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── RotatingCircle.jsx
│   │   ├── SeedDetailView.jsx
│   │   ├── WeedGrid.jsx
│   │   └── Footer.jsx
│   ├── data.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Images

### Seed Images

Place your seed images in `public/images/seeds/` with the following names:
- `cotton.jpg`
- `soyabean.jpg`
- `tur.jpg`
- `wheat.jpg`
- `gram.jpg`
- `jowar.jpg`
- `moong.jpg`
- `groundnut.jpg`
- `dhaincha.jpg`

### Weed Images

Place your weed images in `public/images/weeds/` with the following names:
- `harali.jpg`
- `chimanchara.jpg`
- `congress.jpg`
- `dhotra.jpg`
- `tandulja.jpg`
- `dhudi.jpg`
- `kena.jpg`
- `tantani.jpg`
- `lavala.jpg`
- `tarota.jpg`
- `reshimkata.jpg`
- `chikta.jpg`
- `landga.jpg`

### Student Photos

Place student photos in `public/images/students/` with the following names:
- `student1.jpg`
- `student2.jpg`
- `student3.jpg`
- `student4.jpg`
- `student5.jpg`
- `student6.jpg`

**Note**: If images are not found, the website will automatically display placeholder graphics.

## Updating Team Information

Edit `src/data.js` and update the `STUDENTS_DATA` array:

```javascript
export const STUDENTS_DATA = [
  { name: "Student Name", regNo: "REG001", image: "/images/students/student1.jpg" },
  // ... more students
];
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **SVG** - For the rotating circle graphics

## Features Explained

### Rotating Circle

The main hero section features an interactive rotating circle divided into:
- **3 Main Sectors**: Kharif, Rabi, and Zaid
- **9 Clickable Segments**: 3 seeds per sector
- **Smooth Rotation**: Continuous slow rotation that pauses on hover
- **Click Interaction**: Click any seed name to view its details

### Seed Detail View

- Displays comprehensive information about the selected seed
- Shows large image with fallback placeholder
- Smooth scroll animation when selecting a seed
- Organized sections for all seed details

### Weed Grid

- Responsive grid layout (1-4 columns based on screen size)
- 13 weed cards with images and information
- Hover effects and animations
- Color-coded by type (Annual/Perennial)

### Footer

- Project team section
- Student cards with photos and registration numbers
- Responsive layout

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'nature-green': '#2d5016',
  'earth-brown': '#8b4513',
  'leaf-green': '#4a7c59',
}
```

### Animation Speed

Edit the rotation duration in `RotatingCircle.jsx`:

```javascript
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
```

## License

College Project - 2025

