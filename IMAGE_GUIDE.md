# RORX Clinic - Image Upload Guide

## 📁 Image Directory Structure

```
public/images/
├── doctors/
│   ├── aman-ror.jpg
│   └── siba-ror.jpg
├── gallery/
│   ├── facility-1.jpg
│   ├── equipment-1.jpg
│   ├── patient-care-1.jpg
│   ├── operating-theater.jpg
│   ├── consultation-room.jpg
│   ├── laboratory.jpg
│   ├── emergency-unit.jpg
│   └── pharmacy.jpg
├── hero/
│   └── hero-image.jpg
└── services/
    ├── general-consultation.jpg
    ├── lab-services.jpg
    ├── pharmacy.jpg
    ├── emergency-care.jpg
    ├── health-checkup.jpg
    └── immunization.jpg
```

## 🖼️ Image Specifications

### Doctor Images
- **Location**: `public/images/doctors/`
- **Files**: 
  - `aman-ror.jpg`
  - `siba-ror.jpg`
- **Dimensions**: 200x200px (square)
- **Format**: JPG/PNG
- **Usage**: Doctor profile cards with fallback initials

### Gallery Images
- **Location**: `public/images/gallery/`
- **Files**:
  1. `facility-1.jpg` - Modern Facilities
  2. `equipment-1.jpg` - Medical Equipment
  3. `patient-care-1.jpg` - Patient Care
  4. `operating-theater.jpg` - Operating Theater
  5. `consultation-room.jpg` - Consultation Room
  6. `laboratory.jpg` - Laboratory
  7. `emergency-unit.jpg` - Emergency Unit
  8. `pharmacy.jpg` - Pharmacy Section
- **Dimensions**: 300x300px (square) - will be displayed responsively
- **Format**: JPG/PNG
- **Total**: 8 images

### Hero Image
- **Location**: `public/images/hero/`
- **File**: `hero-image.jpg`
- **Dimensions**: 500x500px or larger (landscape recommended)
- **Format**: JPG/PNG high quality
- **Usage**: Main landing page hero section image

### Service Icons (Optional)
- **Location**: `public/images/services/`
- **Files**: (if you want to replace emojis with icons)
  - `general-consultation.jpg`
  - `lab-services.jpg`
  - `pharmacy.jpg`
  - `emergency-care.jpg`
  - `health-checkup.jpg`
  - `immunization.jpg`
- **Dimensions**: 100x100px
- **Format**: PNG (for transparency) or JPG
- **Note**: Currently using emojis. To switch, update Services.tsx

## 📤 How to Upload Images

### Step 1: Prepare Your Images
1. Resize images to specifications above
2. Optimize for web (80-90% quality)
3. Name files exactly as shown above

### Step 2: Place Files
1. Copy images to corresponding folders in `public/images/`
2. Ensure file names match exactly (case-sensitive)
3. Supported formats: JPG, PNG, WebP

### Step 3: Restart Development Server
```bash
npm run dev
```

## 🔄 Component Image Usage

### Doctors Component
```
Component: components/Doctors.tsx
Images used: /images/doctors/aman-ror.jpg, /images/doctors/siba-ror.jpg
Fallback: Displays initials if image fails to load
```

### Hero Component
```
Component: components/Hero.tsx
Image used: /images/hero/hero-image.jpg
Fallback: SVG icon with gradient
```

### Gallery Component
```
Component: components/Gallery.tsx
Images used: /images/gallery/*.jpg (8 images)
Responsive: Adapts to mobile/tablet/desktop
```

## ⚠️ Image Fallbacks

All components have built-in fallbacks:

1. **Doctors**: Shows doctor initials (AR, SR) if image fails
2. **Hero**: Shows medical icon if image fails
3. **Gallery**: Shows gallery item info if image fails

## 🚀 Adding More Images

### To add more gallery images:

1. Add image file to `public/images/gallery/`
2. Update `components/Gallery.tsx`:

```tsx
const galleryImages = [
  // ... existing images
  {
    id: 9,
    title: 'New Facility',
    category: 'Facilities',
    image: '/images/gallery/new-facility.jpg',
  },
];
```

### To change doctor information:

Edit `components/Doctors.tsx`:

```tsx
const doctors = [
  {
    id: 1,
    name: 'Dr. Aman Ror',
    specialty: 'General Medicine',
    experience: '15 years',
    qualification: 'MD, Board Certified',
    bio: 'Your bio here...',
    image: '/images/doctors/aman-ror.jpg',
    initials: 'AR',
  },
];
```

## 📊 Image Optimization Tips

1. **Compression**: Use TinyPNG or ImageOptim
2. **Format**: Use JPG for photos, PNG for icons
3. **Size**: Keep total image size under 500KB per image
4. **Dimensions**: Stick to recommended sizes for consistency

## 🔗 Next.js Image Component Benefits

✅ Automatic optimization
✅ Responsive image scaling
✅ Lazy loading
✅ WebP format support
✅ Prevents layout shift

## ❓ Troubleshooting

### Images not showing?
1. Check file name matches exactly (case-sensitive)
2. Verify file is in correct folder
3. Restart dev server: `npm run dev`
4. Clear browser cache

### Images look blurry?
1. Check image dimensions - should be clear/sharp
2. Try a different source image
3. Ensure image quality is at least 80%

### Images load slowly?
1. Compress images further
2. Use WebP format if possible
3. Ensure file size < 500KB

## 📝 File Naming Conventions

- Use lowercase: ✅ `aman-ror.jpg` ❌ `Aman-Ror.jpg`
- Use hyphens: ✅ `facility-1.jpg` ❌ `facility_1.jpg`
- Make it descriptive ✅ `operating-theater.jpg` ❌ `img1.jpg`
- Include file extension: ✅ `.jpg` or `.png`

## 🎨 Recommended Image Sources

- Medical professionals: Unsplash, Pexels (Free)
- Healthcare facilities: Pixabay, Freepik
- Icons/Illustrations: FontAwesome, Iconify
- AI Generated: DALL-E, Midjourney (if applicable)
