'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SERVICE_IMAGES } from '@/lib/images';

export default function Services() {
  const [imageErrors, setImageErrors] = useState<number[]>([]);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => [...prev, id]);
  };

  const services = [
    {
      id: 1,
      icon: '🏥',
      image: SERVICE_IMAGES.consultation.path,
      title: 'General Consultation',
      description:
        'Comprehensive check-up and medical consultation with our experienced doctors for routine health concerns.',
    },
    {
      id: 2,
      icon: '🧬',
      image: SERVICE_IMAGES.lab.path,
      title: 'Lab Services',
      description:
        'State-of-the-art laboratory testing and diagnostics including blood tests, imaging, and pathology services.',
    },
    {
      id: 3,
      icon: '💊',
      image: SERVICE_IMAGES.pharmacy.path,
      title: 'Pharmacy',
      description:
        'On-site pharmacy with a wide range of medications and prescription fulfillment services available.',
    },
    {
      id: 4,
      icon: '🚑',
      image: SERVICE_IMAGES.emergency.path,
      title: 'Emergency Care',
      description:
        'Immediate medical attention and emergency treatment available round-the-clock for urgent situations.',
    },
    {
      id: 5,
      icon: '❤️',
      image: SERVICE_IMAGES.checkup.path,
      title: 'Health Checkup',
      description:
        'Preventive health packages and comprehensive wellness programs designed for all age groups.',
    },
    {
      id: 6,
      icon: '💉',
      image: SERVICE_IMAGES.immunization.path,
      title: 'Immunization',
      description:
        'Complete vaccination services including routine immunizations and travel vaccines for all ages.',
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            We offer comprehensive healthcare services designed to meet all your medical needs. From routine check-ups to specialized treatments, we're here for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
            >
              {/* Icon/Image Container */}
              <div className="h-24 sm:h-28 mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden relative">
                {!imageErrors.includes(service.id) ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(service.id)}
                  />
                ) : (
                  <div className="text-5xl sm:text-6xl">{service.icon}</div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition duration-200"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
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
              </a>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Expert Medical Professionals
                </h4>
                <p className="text-gray-600 text-sm">
                  All services provided by experienced and certified healthcare professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Advanced Technology
                </h4>
                <p className="text-gray-600 text-sm">
                  Latest medical equipment and technology for accurate diagnosis and treatment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Affordable Pricing
                </h4>
                <p className="text-gray-600 text-sm">
                  Competitive rates with flexible payment options to ensure quality care for everyone.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  24/7 Availability
                </h4>
                <p className="text-gray-600 text-sm">
                  Round-the-clock services with emergency support always available.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Our Services?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Contact us or book an appointment today to experience quality healthcare.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
