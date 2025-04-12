export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About IT Shaala
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Empowering students with cutting-edge IT skills and knowledge since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At IT Shaala, we are committed to providing high-quality education in the field of information technology. 
              Our mission is to bridge the gap between industry requirements and academic knowledge, ensuring our students 
              are well-equipped for the dynamic tech landscape.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe in practical learning, industry exposure, and continuous innovation to help our students 
              achieve their career goals in the IT sector.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for excellence in everything we do, from curriculum design to student support.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We continuously update our courses and teaching methods to stay ahead of industry trends.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide comprehensive support to our students throughout their learning journey.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We foster a strong community of learners and professionals in the IT industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team consists of experienced professionals and educators who are passionate about 
              technology and teaching. We work together to provide the best learning experience for our students.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add team member cards here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 