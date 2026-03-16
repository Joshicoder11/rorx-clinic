// lib/images.ts
// Central configuration for all images used in the website

export const DOCTOR_IMAGES = {
  aman: {
    path: '/images/doctors/aman-ror.jpg',
    alt: 'Dr. Aman Ror',
    initials: 'AR',
  },
  siba: {
    path: '/images/doctors/siba-ror.jpg',
    alt: 'Dr. Shiba Ror',
    initials: 'SR',
  },
};

export const GALLERY_IMAGES = {
  facility1: {
    path: '/images/gallery/img1.jpg',
    title: 'Modern Facilities',
    category: 'Facilities',
  },
  equipment1: {
    path: '/images/gallery/img3.jpg',
    title: 'Medical Equipment',
    category: 'Equipment',
  },
  patientCare1: {
    path: '/images/gallery/img4.jpg',
    title: 'Patient Care',
    category: 'Services',
  },
  operatingTheater: {
    path: '/images/gallery/img5.jpg',
    title: 'Operating Theater',
    category: 'Facilities',
  },
  consultationRoom: {
    path: '/images/gallery/img6.jpg',
    title: 'Consultation Room',
    category: 'Services',
  },
  laboratory: {
    path: '/images/gallery/img7.jpg',
    title: 'Laboratory',
    category: 'Equipment',
  },
  emergencyUnit: {
    path: '/images/gallery/img8.jpg',
    title: 'Emergency Unit',
    category: 'Facilities',
  },
  pharmacy: {
    path: '/images/gallery/img9.jpg',
    title: 'Pharmacy Section',
    category: 'Equipment',
  },
};

export const HERO_IMAGE = {
  path: '/images/hero/WhatsApp Image 2025-10-15 at 11.06.41_ec0afb0a.jpg',
  alt: 'Medical Care',
};

export const SERVICE_IMAGES = {
  consultation: {
    path: '/images/services/img10.jpg',
    emoji: '🏥', // Fallback emoji
  },
  lab: {
    path: '/images/services/img12.jpg',
    emoji: '🧬',
  },
  pharmacy: {
    path: '/images/services/img14.jpg',
    emoji: '💊',
  },
  emergency: {
    path: '/images/services/img31.jpg',
    emoji: '🚑',
  },
  checkup: {
    path: '/images/services/img32.jpg',
    emoji: '❤️',
  },
  immunization: {
    path: '/images/services/img33.jpg',
    emoji: '💉',
  },
};

// Helper function to handle image loading with fallback
export const getImagePath = (imagePath: string): string => {
  return imagePath || '/images/placeholder.png';
};

// Helper function to check if image exists
export const imageExists = (imagePath: string): boolean => {
  // This is a placeholder - in production, you might want to
  // validate this against a list of uploaded images
  return imagePath.startsWith('/images/');
};

// Image optimization settings for next/image
export const IMAGE_OPTIMIZATION = {
  quality: 80,
  priority: false, // Set to true for above-the-fold images
};

// Responsive image sizes for different breakpoints
export const RESPONSIVE_SIZES = {
  mobile: {
    width: 200,
    height: 200,
  },
  tablet: {
    width: 400,
    height: 400,
  },
  desktop: {
    width: 600,
    height: 600,
  },
};
