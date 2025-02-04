import { Link } from "react-router-dom";
import JobInterviews from "../components/JobInterviews";

import {
  Search,
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  BarChart2,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const { userType } = useContext(AuthContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const companies = [
    {
      name: "Flipkart",
      logo: "data:image/png;base64,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",
    },
    {
      name: "Byju's",
      logo: "data:image/png;base64,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",
    },
    {
      name: "Amazon",
      logo: "data:image/png;base64,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",
    },
    {
      name: "Cognizant",
      logo: "data:image/png;base64,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",
    },
    {
      name: "TCS",
      logo: "data:image/png;base64,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",
    },
    {
      name: "Accenture",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkSSURBVHgB7Z17bFP3Fce/92fHeeI4lEecZMRASCGkTVDXMVhXytZW2qBb+pBKp2k8prFOzV7apEn7Z+LfTtpL1f4AacAmbVOXFVaJqRt7hLYrtCM82qzNSEIDJHFoISQOeTjxvbfn3OtrXzsPXPna8eN+rWtf+14r8Sfn/M45v5/viYQEdO3a2EMOh9JCu9skCT569CA3NQJIF1RVvShJ4rjXu6T9Tm+QFjro9wf2AOpPaNeH/FSfLEsHamrcR+Y7YU6Afv8tn6JIx4WQmrSTyOxKS11wuZxwOARtC3LPWpHlYWZGQTA4g6mpEGRZMQ71Acp2r7eiL/49s0j4/bd3A/IvaNfDsMrLiwmcA/moyckZ3L4dNECOKIqyt7q64rj5nBiAAwOBFiHUY7zPFldWVqhZXz6LrZIhjo9Ph1+R9ni97qPG8QgddltAnKddD4PjzVZUDJE3aIFG2WS4s4ieIv5Ndx7D8mzFipkwG5JHVcUx43UNoB5t4eMxz4Y3v5gNM6JRrbm/X2NmWKCWqthj3h3EbDioshwOnZngJBlh6ysuLoCthcUZSdjIfBQ3HhKSpFUYKCpywlZiCo+FlN6IFkFJsZYsFxba1peouKBgOZ3YRmOg2sxPCgoEbCUmoxKjFNHH1LSJATt4JC6OF2F5bLNLUjbAJGUDTFI2wCRlGcCBE1RiB5F3six7Pr2fwjpNm9U+BTT8gMpCH/JClrrw5BDQ9QLw0mrg5MO0lvKyDjWXlbL6zf9PfSutBeq/SZb5JOCuR84p5UFk/Apw/sfAXzYC7eTe/pNaBp8zSlsUVkPA1T+Taz9KMNcD7/4MCH6IrNeipDGBS8BZCjRt5N6vPQN88B9krRY1D5Qngff/CLzyAPDXzUD3IWBmBFmljEmkb7ylp0IvrQPe+Dow1ousUMZVIsEbQM9vgGN1wIn7aUX7xcxO0C0DWP1FmpRdAUt18yzw6tP6WNnxI1pPfAcZJ8nvH9WSispKN5LVpB+40gZcOkgfthOWS9CkefUOYB25eBVFc+HComloKKA9WgrQLM73emj9vu8PqalGSmuAOgJ597doPWcl0q6UAzQ03gdcJoi9hyl96YblcpQAn3iMYO4DvI/wzDrSorQBNKTO0A9tBzp/So//SE01UnEPsOarBPMbNB5XIKVKO0Cz2BJ7j+pjZSqqEWcZWeWXgY0/BJY2IyVaVICG2Aq5vHuPyroPTiMlKm8AGimC1z5OYJfAMmUEQLNG36X6+Oc0MfsKMNEPy+Uil/btIvfeCyy7H0kr4wAaYpfmecSuXwPD52C5OMhspYC2djeSkgEw4yqRwuV6erKzA9jxlm4xVuZ7PGxMXodlyuhFpbvI1bZSWfcUzSluJousaETGKStW5Yoq9YR5B7n0I38HanbqVUkmKKu+ksXQOFnmbZwCzRWaaOh8Hpiy0CU/9u+ELBWXcr69QRS3XkC3ux03cQ0q0r9WkHVfClRCKt5/8yZePXQJb/y2B7IqQ0EIV9CFIpSiGg1YibUoSdPFVFkDMDgWwptHr+L1Q7249vYwQZPBFxmYb5MYA2FFN85gBVZjFZqwlJCmUhkPsL8jgDOHruLcn/pxezioWZsZmg5R0Mbuq2jP+JxBssh+dJJNLkUtNhHMe+jDWj//lZEAg4EQ3mm7gf8eGcDl14bJ1mTCY4ATGqIoPEYXD1SKnDtGo+Pb+Bv+h3/Bi3qswX10Tg2sUkYBHL4cxNmD13Hu6BACQ1MaOAOZrMU7xQRRjYCMQhRaIJHCG0zHQwhisKgTDfucqHqCsnVYcznHogPkyqDnRACvPz+Eq6cDkEOhyPimgzNbFUNUY55LMVCVWRbJt5r6ZfjC9+7DZ59pQKmnCFZq0QCOD8k4+8IwLh6+idHBaW3c0pMQBqZbWDwIMxw1BqJhdVGIrpICNO+sw6PP3Yv1D1rnsvFKK8DQpIrBM0F0/GoU3S+PQVYYmmFjunVJCwKa34WNW2WdBw/sWYeHWxtRXJ76RZO0AAyOqHjvdxM498sx3OoN0kfXF0nio6g6pytiFqRYl1YghEDTl2rw4P46rN9eiYI0XvOS0p80eCqEriNBXHpxAtMTsja2GWDmiqDxQCWTO5vHQKH9CSR4qkuwZV8tNu9eheVrLZwt/RiyHGDwloqe34fw/8PTuN4xo31Utjdp3vFMhEswadZmhm08dzgFfJ/xYOuzlN09XY3FvjrDMoDD51V0HZTR2xbC1A2GpsZYFOZ0SBEXKgzbkmZZX9ESJ7a0Um2xqxJV9y6Otc0lywCe3KlgfFCJlPNS+N7AtpDbqnFQEY6oDLdqUxk+/R0vGp+4C4XuzMv7LfuN4mEAc6Uc0fENmB0MjFdcBGrDk+X41LdXwLupBJksi/+kseOWeZxDDFpJCwVSJCnW37uyqQQNu5bgk63L4CrLjpk2CwGa8cRboH48NsKG0UkCG3eVoulZN6q3FkM4s+uaPQtdOHoffc1sY7HuXLHOhfVfK0bjvlKUVWVvWxVLx0BznapboBpjjQVFAlWfK8CG/UVY81ghG1/Wy9Ix0ICFuGBSUE5u2urC3XtdKF+bW1eXWR5EzNG1cpsDG55zYdUOAWdJdo1ticpiCwRcHgmrv+JAw3cdcNfnJjSzLAO4fAstN36ev6dHcTaPWs9YBnBbG/JS9vXCScoGmKQYoHZtkCzn0BWAKZYa/X7yiKD5tD7eM3VrtHUHcZdLXdIFQYtgp3h3ejoEW4mJW4SyyGsvCodD0VpaRjs02rqTuL8qi9kJr7einfb72K+np2XYWljcVzU83PUxu3AUVg7w/ejopHmAtBUno58qiyBqzCK11tDQ6Hk63lxS4oLbbe3qfa5obGzKGOrI+spX804kD1RV5XF6GJmYmI5QthWVqZMvN6HdbrweAah3pVW+b5wcCEzZ7gzdbdnyDKPiXtLmhtyzpksGBm610Er/YYQbcXNf1XxtDcpBleOC0YibDYzgHTGfM28r+HBbZB8/Z5DcIpS7XHKjxlztNcjVGMPinJjd1fBARaF8T6gtCbWCN4tA7iGQef7PCJQDNTWxVmdWQqbE3WpVVbSQ5TWFW4bm7L/D4NJWUXBKkpTj4Rx5QX0E8RVHp51dDzAAAAAASUVORK5CYII=",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Find Your Dream Job Today
            </h1>
            <p className="mb-8 text-xl">
              Connecting talented professionals with amazing opportunities
            </p>
            <div className="flex items-center p-1 bg-white rounded-lg">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="flex-grow px-4 py-2 text-gray-800 cus:outline-none sm:z-1"
              />
              <button className="flex items-center max-w-xs px-4 py-2 m-1 text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600 sm:max-w">
                <Search className="hidden w-5 h-5 mr-2 sm:block" />
                <span className="hidden sm:block">Search</span>
                <Search className="w-5 h-5 sm:hidden" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container px-4 mx-auto slike-slide">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Featured Job Categories
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Business & Management",
                count: 235,
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Marketing & Sales",
                count: 184,
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Human Resources",
                count: 142,
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Project Management",
                count: 165,
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Finance & Accounting",
                count: 120,
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Customer Service",
                count: 98,
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "IT & Software",
                count: 210,
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Engineering",
                count: 175,
              },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="mb-4 text-orange-500">{category.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                <p className="mb-2 text-gray-600">
                  {category.count} jobs available
                </p>
                {userType === "candidate" || userType === null ? (
                  <Link
                    to="/joblist"
                    className="text-orange-400 hover:text-orange-600"
                  >
                    View Jobs!
                  </Link>
                ) : (
                  <Link
                    to="/addjob"
                    className="text-orange-400 hover:text-orange-600"
                  >
                    Add Jobs!
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        {userType === "candidate" ? (
          <JobInterviews companies={companies} />
        ) : null}
      </section>

      {/* Statistics Section */}
      <section className="py-16 text-white bg-orange-500">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {[
              {
                icon: <Briefcase className="w-12 h-12 mx-auto mb-4" />,
                value: "10,000+",
                label: "Job Opportunities",
              },
              {
                icon: <Users className="w-12 h-12 mx-auto mb-4" />,
                value: "5,000+",
                label: "Talented Professionals",
              },
              {
                icon: <Building2 className="w-12 h-12 mx-auto mb-4" />,
                value: "1,000+",
                label: "Partner Companies",
              },
            ].map((stat, index) => (
              <div key={index}>
                {stat.icon}
                <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Create an Account",
                description:
                  "Sign up and complete your profile to showcase your skills and experience.",
              },
              {
                icon: <Search className="w-12 h-12 text-orange-500" />,
                title: "Search Jobs",
                description:
                  "Browse through thousands of job listings or let our AI match you with the best opportunities.",
              },
              {
                icon: <BarChart2 className="w-12 h-12 text-orange-500" />,
                title: "Apply and Succeed",
                description:
                  "Apply to your dream jobs with just a click and track your application status in real-time.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 mb-4 bg-orange-100 rounded-full">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Join thousands of professionals finding their dream jobs every day
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
