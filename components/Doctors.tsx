'use client';

import { useState } from 'react';
import Image from 'next/image';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  bio: string;
  details: string;
  image: string;
  initials: string;
};

function DoctorCard({
  doctor,
  expanded,
  onToggle,
}: {
  doctor: Doctor;
  expanded: boolean;
  onToggle: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      {/* Doctor Avatar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 flex items-center justify-center relative overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          onLoadingComplete={() => setHasError(false)}
        />
        {/* Fallback initials (shown only if image fails to load) */}
        {hasError && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-3xl">
            {doctor.initials}
          </div>
        )}
      </div>

      {/* Doctor Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {doctor.name}
        </h3>
        <p className="text-blue-600 font-semibold text-sm mb-3">
          {doctor.specialty}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            {doctor.experience}
          </span>
          <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
            {doctor.qualification.split(',')[0]}
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {doctor.bio}
        </p>

        {/* Qualifications */}
        <div className="mb-5 pb-5 border-b border-gray-200">
          <p className="text-xs font-semibold text-gray-700 mb-2">
            QUALIFICATIONS:
          </p>
          <p className="text-sm text-gray-600">{doctor.qualification}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm">
            Book Now
          </button>
          <button
            onClick={onToggle}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm"
          >
            {expanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>
        {expanded && (
          <div className="mt-4 text-left bg-gray-50 p-3 rounded-lg border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">About {doctor.name}</h4>
            <p className="text-gray-600 text-sm whitespace-pre-line">{doctor.details}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [expandedDoctorId, setExpandedDoctorId] = useState<number | null>(null);

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Aman Ror',
      specialty: 'General Medicine',
      experience: '15 years',
      qualification: 'MD, Board Certified',
      bio: 'Dedicated healthcare professional providing comprehensive medical care with patient-centered approach.',
      details: "Dr. Aman Ror is an experienced and dedicated General Physician committed to providing comprehensive medical care for patients of all age groups. With a strong focus on accurate diagnosis and patient-centered treatment, Dr. Ror believes in understanding each patient’s health concerns and offering personalized care.\n\nHe specializes in the diagnosis, treatment, and prevention of common and chronic illnesses, helping patients maintain long-term health and well-being. Dr. Aman Ror is known for his compassionate approach, clear communication, and dedication to improving the quality of life for his patients.\n\nAt DR. ROR'X Multispecialty Clinic, he focuses on preventive healthcare, lifestyle guidance, and effective medical treatment to ensure the best outcomes for every patient.",
      image: '/images/doctors/aman-ror.jpg',
      initials: 'AR',
    },
    {
      id: 2,
      name: 'Dr. Shiba Ror',
      specialty: 'Pediatrics & Women’s Health',
      experience: '12 years',
      qualification: 'MD, Board Certified',
      bio: 'Compassionate physician committed to delivering excellent healthcare services and patient wellness.',
      details: "Dr. Shiba Ror is a compassionate and skilled doctor specializing in Pediatrics and Women’s Health. She is dedicated to providing high-quality medical care for children, mothers, and women at every stage of life.\n\nDr. Shiba Ror is known for her gentle approach with children and her supportive care for women’s health concerns. She focuses on child development, preventive care, maternal health, and overall wellness, ensuring that every patient receives attentive and personalized treatment.\n\nAt DR. ROR'X Multispecialty Clinic, she works closely with families to promote healthy lifestyles, early diagnosis, and effective medical solutions for long-term health.",
      image: '/images/doctors/siba-ror.jpg',
      initials: 'SR',
    },
  ];

  const specialties = [
    'All',
    'General Medicine',
  ];

  const filteredDoctors =
    selectedSpecialty === 'All'
      ? doctors
      : doctors.filter((doctor) => doctor.specialty === selectedSpecialty);

  return (
    <section id="doctors" className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Medical Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Meet our highly qualified and experienced healthcare professionals dedicated to providing you with the best medical care.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 sm:px-5 py-2 rounded-full font-semibold transition duration-200 text-sm sm:text-base ${
                selectedSpecialty === specialty
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              expanded={expandedDoctorId === doctor.id}
              onToggle={() =>
                setExpandedDoctorId((prev) => (prev === doctor.id ? null : doctor.id))
              }
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-600 text-lg">
              No doctors found in this specialty. Please try another filter.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Doctors?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Doctors
              </h3>
              <p className="text-gray-600 text-sm">
                Highly qualified and board-certified professionals
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-emerald-600">100K+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Happy Patients
              </h3>
              <p className="text-gray-600 text-sm">
                Thousands of satisfied patients worldwide
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">12+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Specialities
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive medical services under one roof
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Available
              </h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock medical support and care
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Professional Certifications & Accreditations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-2xl mb-2">🏥</p>
              <p className="font-semibold text-gray-900">Medical Board Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-2xl mb-2">📜</p>
              <p className="font-semibold text-gray-900">ISO Accredited</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-2xl mb-2">🔬</p>
              <p className="font-semibold text-gray-900">Research Published</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-2xl mb-2">🌍</p>
              <p className="font-semibold text-gray-900">Internationally Trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
