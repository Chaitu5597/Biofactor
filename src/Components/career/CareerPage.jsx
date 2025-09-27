import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

// ---- Job Data ----
const jobData = {
  "Digital Marketing": [
    {
      id: 1,
      title: "SEO Specialist",
      desc: "Work on SEO strategies to improve visibility.",
      img: "data:image/jpeg;base64,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",
      location: "Hyderabad, India",
      requirements: [
        "2+ years SEO experience",
        "Knowledge of Google Analytics",
        "Strong writing skills",
      ],
    },
    {
      id: 2,
      title: "Social Media Manager",
      desc: "Manage social channels and campaigns.",
      img: "https://via.placeholder.com/300x200/22c55e/fff?text=Social",
      location: "Remote / Bengaluru",
      requirements: [
        "3+ years social media management",
        "Creative copywriting",
        "Ad campaign experience",
      ],
    },
    {
      id: 3,
      title: "Content Strategist",
      desc: "Plan and execute content marketing strategies.",
      img: "https://via.placeholder.com/300x200/22c55e/fff?text=Content",
      location: "Hyderabad, India",
      requirements: [
        "2+ years content writing",
        "Understanding of SEO",
        "Experience in B2B marketing",
      ],
    },
  ],
  Marketing: [
    {
      id: 4,
      title: "Brand Manager",
      desc: "Oversee brand campaigns and messaging.",
      img: "https://via.placeholder.com/300x200/16a34a/fff?text=Brand",
      location: "Hyderabad, India",
      requirements: [
        "5+ years brand management",
        "Strong analytical mindset",
        "Excellent leadership skills",
      ],
    },
    {
      id: 5,
      title: "Market Analyst",
      desc: "Analyze trends and recommend strategies.",
      img: "https://via.placeholder.com/300x200/16a34a/fff?text=Analyst",
      location: "Hyderabad, India",
      requirements: [
        "3+ years market research",
        "Strong Excel & Data visualization",
        "Presentation skills",
      ],
    },
  ],
  Sales: [
    {
      id: 6,
      title: "Sales Executive",
      desc: "Drive sales and manage client relations.",
      img: "https://via.placeholder.com/300x200/15803d/fff?text=Sales",
      location: "Mumbai, India",
      requirements: [
        "Strong communication",
        "1+ year in B2B sales",
        "Target-oriented mindset",
      ],
    },
    {
      id: 7,
      title: "Account Manager",
      desc: "Handle key clients and grow accounts.",
      img: "https://via.placeholder.com/300x200/15803d/fff?text=Accounts",
      location: "Hyderabad, India",
      requirements: [
        "5+ years client management",
        "Good negotiation skills",
        "Experience in CRM software",
      ],
    },
  ],
};

// ---- FAQ ----
const faqs = [
  {
    q: "How do I apply for a position?",
    a: "You can apply using the Apply Now button and submit your resume via email.",
  },
  {
    q: "Do you offer remote opportunities?",
    a: "Yes, some positions are remote-friendly. Please check the job description.",
  },
  {
    q: "What is the recruitment process?",
    a: "Our process includes an initial screening, technical/role-based interviews, and an HR discussion.",
  },
];

const CareerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDept, setExpandedDept] = useState({});
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  // Toggle dept section
  const toggleDept = (dept) => {
    setExpandedDept((prev) => ({ ...prev, [dept]: !prev[dept] }));
  };

  // Toggle FAQ
  const handleToggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Apply
  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // Form change
  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Job Application - ${selectedJob.title}`;
    const body = `Dear HR,%0D%0A%0D%0AI would like to apply for the ${selectedJob.title} role.%0D%0A%0D%0A
Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A
%0D%0ARegards,%0D%0A${formData.name}`;
    const mailtoLink = `mailto:hr@biofactor.in?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 mb-8">
      {/* Banner */}
      <div className="relative w-full h-72 bg-gradient-to-r from-green-700 via-green-500 to-green-700 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/business-people-meeting-office-working_1150-10613.jpg"
            alt="Career Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-extrabold drop-shadow-md">
            Careers at Biofactor
          </h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto text-gray-100">
            Join us in shaping the future of biotechnology and healthcare.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 px-6">
        {/* Search */}
        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-lg">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-grow outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Filter Dropdown */}
        <select className="px-4 py-2 border rounded-full shadow-md">
          <option value="">All Departments</option>
          {Object.keys(jobData).map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Departments */}
      <div className="px-6 py-10">
        {Object.keys(jobData).map((dept, index) => {
          const jobs = jobData[dept].filter((job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          return (
            <div
              key={dept}
              className={`mb-12 p-6 rounded-xl shadow-md ${
                index % 2 === 0 ? "bg-white" : "bg-green-50"
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-green-700">{dept}</h2>
                <button
                  onClick={() => toggleDept(dept)}
                  className="text-green-600 hover:underline"
                >
                  {expandedDept[dept] ? "See Less" : "See More"}
                </button>
              </div>

              {/* Job Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(expandedDept[dept] ? jobs : jobs.slice(0, 2)).map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg overflow-hidden"
                  >
                    <img
                      src={job.img}
                      alt={job.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-green-600">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{job.desc}</p>
                      <button
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        onClick={() => handleApply(job)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-1  ">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-left">
          Frequently Asked Questions
        </h2> 
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => handleToggleFAQ(i)}
              >
                <span className="font-medium text-gray-800">{faq.q}</span>
                {openFAQ === i ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFAQ === i && (
                <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full w-2/3 overflow-y-auto max-h-[90vh]">
            {/* banner */}
          <div className="w-full">

          <img src={selectedJob?.img} alt="" />
          </div>

            {/* Job Info */}
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Apply for {selectedJob?.title}
            </h3>
            <p className="text-gray-600 mb-2">{selectedJob?.desc}</p>
            <p className="text-sm text-gray-500 mb-2">
              📍 Location: {selectedJob?.location}
            </p>
            <div className="mb-4">
              <h4 className="font-medium text-gray-700">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {selectedJob?.requirements?.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Apply Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={handleFormChange}
                required
              />
              <input
                type="file"
                name="resume"
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={handleFormChange}
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
