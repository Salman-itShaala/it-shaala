export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn modern web development with HTML, CSS, JavaScript, and popular frameworks.",
      duration: "6 months",
      level: "Beginner to Advanced",
      features: [
        "HTML5 & CSS3",
        "JavaScript & ES6+",
        "React.js",
        "Node.js",
        "MongoDB",
        "RESTful APIs"
      ]
    },
    {
      id: 2,
      title: "Data Analytics",
      description: "Master data analysis and visualization using Python and industry-standard tools.",
      duration: "4 months",
      level: "Intermediate",
      features: [
        "Python Programming",
        "Pandas & NumPy",
        "Data Visualization",
        "SQL",
        "Machine Learning Basics",
        "Business Analytics"
      ]
    },
    {
      id: 3,
      title: "Python Programming",
      description: "Comprehensive Python programming course covering basics to advanced concepts.",
      duration: "3 months",
      level: "Beginner to Intermediate",
      features: [
        "Python Basics",
        "Object-Oriented Programming",
        "Data Structures",
        "File Handling",
        "Database Integration",
        "Web Scraping"
      ]
    },
    {
      id: 4,
      title: "MERN Stack Development",
      description: "Full-stack web development using MongoDB, Express, React, and Node.js.",
      duration: "6 months",
      level: "Intermediate",
      features: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux",
        "Authentication & Authorization"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Courses
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our comprehensive range of IT courses designed to kickstart your career
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{course.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Duration: {course.duration}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Level: {course.level}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What you'll learn:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="h-4 w-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#enroll"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 