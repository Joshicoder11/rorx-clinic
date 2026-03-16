import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 sm:w-80 h-40 sm:h-80 bg-white rounded-full blur-3xl transform translate-x-16 sm:translate-x-32 -translate-y-8 sm:-translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-white rounded-full blur-3xl transform -translate-x-16 sm:-translate-x-32 translate-y-8 sm:translate-y-16"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your Health is Our Priority
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Experience world-class healthcare services with our experienced doctors and state-of-the-art medical facilities. We're here for your health and wellness journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-200 text-base sm:text-lg w-full sm:w-auto">
                Book Appointment
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-200 text-base sm:text-lg w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-8 flex-wrap">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">2+</p>
                <p className="text-blue-100 text-sm sm:text-base">Expert Doctors</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">24/7</p>
                <p className="text-blue-100 text-sm sm:text-base">Service Available</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">100%</p>
                <p className="text-blue-100 text-sm sm:text-base">Patient Focused</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Placeholder */}
          <div className="relative mt-8 md:mt-0">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl shadow-2xl overflow-hidden relative">
              <Image
                src="/images/hero/WhatsApp Image 2025-10-15 at 11.06.41_ec0afb0a.jpg"
                alt="Medical Care"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              {/* Fallback overlay if image doesn't load */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 text-white mx-auto mb-2 sm:mb-4 opacity-75"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <p className="text-white font-semibold text-sm sm:text-lg">Medical Care</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-600"
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
                </div>
                <div>
                  <p className="font-bold text-gray-900">Quality Care</p>
                  <p className="text-sm text-gray-600">Excellence in treatment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-blue-400 border-opacity-30">
          <p className="text-blue-100 text-center mb-6 text-xs sm:text-sm font-semibold">
            TRUSTED BY THOUSANDS OF PATIENTS
          </p>
          <div className="flex justify-center gap-8 flex-wrap items-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-blue-100 text-sm">Happy Patients</p>
            </div>
            <div className="w-px h-12 bg-blue-400 opacity-30"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-blue-100 text-sm">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-blue-400 opacity-30"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">99%</p>
              <p className="text-blue-100 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
