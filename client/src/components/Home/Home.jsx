import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Library from "../assets/library.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute bg-gray-500 bg-opacity-25"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center text-black">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-indigo-500">Vidya</span>Bytes
            </h1>
            <p className="text-xl lg:text-2xl mb-8">
              Discover your next adventure
            </p>
            <Link to="/register">
              <button className="bg-purple-600 font-medium rounded-full px-8 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">About Us</h2>

          <div className="flex flex-col lg:flex-row lg:items-center">
            <img
              className="w-full lg:w-1/2 lg:mr-10 object-cover rounded"
              src={Library}
              alt="About Us"
            />

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Library</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Aliquam erat volutpat. Donec sodales suscipit nisi, id aliquam
                erat luctus ac. Duis porta lacus non justo finibus commodo.
              </p>

              <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

          <form className="max-w-lg mx-auto">
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700 font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"></textarea>
              </div>
            </div>

            <center>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>{" "}
            </center>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Key Features
          </h2>

          <div className="max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-4">
                <svg
                  className="w-10 h-10 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Catalog of Books</h3>
              <p className="text-gray-500">
                Search, browse, and discover books in the library with ease.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-4">
                <svg
                  className="w-10 h-10 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">User Accounts</h3>
              <p className="text-gray-500">
                Create, manage, and update your member information and accounts.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-4">
                <svg
                  className="w-10 h-10 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Issue/Return Books</h3>
              <p className="text-gray-500">
                Seamlessly issue, return, and renew books at your convenience.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
