export default function About() {
  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 md:py-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            About RORX Clinic
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Providing exceptional healthcare services with a commitment to excellence, compassion, and innovation. We are dedicated to improving the health and well-being of our community.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver compassionate, high-quality healthcare services that promote healing and wellness. We strive to create a patient-centered environment where every individual receives personalized care and attention.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-lg border border-emerald-200">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading healthcare provider recognized for clinical excellence, innovation, and patient satisfaction. We envision a healthier community through advanced medical technology and dedicated healthcare professionals.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose RORX Clinic?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Medical Team
              </h3>
              <p className="text-gray-600">
                Highly qualified physicians and healthcare professionals with years of experience in their respective fields.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                State-of-the-art medical equipment and cutting-edge technology for accurate diagnosis and treatment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Affordable Care
              </h3>
              <p className="text-gray-600">
                Flexible payment options and competitive pricing to ensure quality healthcare is accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Patient-Centered Care
                </h3>
                <p className="mt-2 text-gray-600">
                  Your health and satisfaction are our top priorities in every interaction.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Confidentiality & Safety
                </h3>
                <p className="mt-2 text-gray-600">
                  We maintain strict privacy standards and ensure a safe environment for all patients.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Continuous Improvement
                </h3>
                <p className="mt-2 text-gray-600">
                  We invest in ongoing training and development of our healthcare professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  4
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Community Health
                </h3>
                <p className="mt-2 text-gray-600">
                  Active participation in health awareness programs and community outreach initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Excellence in Healthcare?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule an appointment with our team today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 inline-block">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
