'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Welcome to RORX Clinic',
      subtitle: 'Your Trusted Healthcare Partner',
      image: '/images/hero/img1.jpg',
    },
    {
      id: 2,
      title: 'Modern Medical Facilities',
      subtitle: 'State-of-the-Art Equipment',
      image: '/images/hero/img2.jpg',
    },
    {
      id: 3,
      title: 'Expert Consultation',
      subtitle: 'Professional Healthcare Services',
      image: '/images/hero/img17.jpg',
    },
    {
      id: 4,
      title: 'Your Health is Our Priority',
      subtitle: 'Compassionate Patient Care',
      image: '/images/hero/IMG-20260213-WA0011.jpg.jpeg',
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      {/* Slides Container */}
      <div className="relative w-full h-full bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
          <div className="w-full h-full relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
          </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 text-center text-white max-w-2xl px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl text-white opacity-90 mb-6">
                  {slide.subtitle}
                </p>
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-gray-900 p-2 md:p-3 rounded-full transition duration-200 shadow-lg"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-gray-900 p-2 md:p-3 rounded-full transition duration-200 shadow-lg"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white opacity-50 hover:opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}
