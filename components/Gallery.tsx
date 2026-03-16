'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const galleryImages = [
    {
      id: 1,
      title: 'Modern Facilities',
      category: 'Facilities',
      image: '/images/gallery/img1.jpg',
    },
    {
      id: 2,
      title: 'Medical Equipment',
      category: 'Equipment',
      image: '/images/gallery/img3.jpg',
    },
    {
      id: 3,
      title: 'Patient Care',
      category: 'Services',
      image: '/images/gallery/img4.jpg',
    },
    {
      id: 4,
      title: 'Operating Theater',
      category: 'Facilities',
      image: '/images/gallery/img5.jpg',
    },
    {
      id: 5,
      title: 'Consultation Room',
      category: 'Services',
      image: '/images/gallery/img6.jpg',
    },
    {
      id: 6,
      title: 'Laboratory',
      category: 'Equipment',
      image: '/images/gallery/img7.jpg',
    },
    {
      id: 7,
      title: 'Emergency Unit',
      category: 'Facilities',
      image: '/images/gallery/img8.jpg',
    },
    {
      id: 8,
      title: 'Pharmacy Section',
      category: 'Equipment',
      image: '/images/gallery/img9.jpg',
    },
  ];

  const categories = [
    'All',
    'Facilities',
    'Equipment',
    'Services',
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Facility & Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Take a look at our state-of-the-art medical facilities and modern infrastructure designed for patient comfort and care.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 sm:px-6 py-2 rounded-full font-semibold transition duration-200 text-sm sm:text-base bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image Placeholder with Emoji */}
              <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{image.category}</p>

                {/* View Button */}
                <button className="w-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Facilities Highlight
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                500+ Sq. Ft.
              </h4>
              <p className="text-gray-600 text-sm">Spacious medical facility</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                25+ Equipment
              </h4>
              <p className="text-gray-600 text-sm">Advanced medical devices</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                2 Doctors
              </h4>
              <p className="text-gray-600 text-sm">Expert medical professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛏️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                10+ Beds
              </h4>
              <p className="text-gray-600 text-sm">Comfortable patient rooms</p>
            </div>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Take a Virtual Tour
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Explore our state-of-the-art facilities from the comfort of your home.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-200">
            Start Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
}
