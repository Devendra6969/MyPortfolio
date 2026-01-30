import React from "react";
import { Link } from "react-router";

function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-zinc-950 to-gray-900 text-white font-sans py-20 px-6 overflow-hidden relative">

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase">
            Get in Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-rose-400">
            Let's Connect
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you want to discuss a project, ask a question, or just say
            hi, I'm always open to connecting!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-blue-500/20 rounded-xl text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email Me</h3>
                <p className="text-gray-400 text-sm mb-4">ds493133@gmail.com</p>
                <a
                  href="mailto:ds493133@gmail.com"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition cursor-pointer"
                >
                  Send an Email &rarr;
                </a>
              </div>
            </div>
          </div>

          
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-700/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-blue-700/20 rounded-xl text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Professional Network
                </p>
                <a
                  href="https://www.linkedin.com/in/devendrasingh100/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition cursor-pointer"
                >
                  Connect Now &rarr;
                </a>
              </div>
            </div>
          </div>

          
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-rose-500/20 rounded-xl text-rose-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Instagram</h3>
                <p className="text-gray-400 text-sm mb-4">Direct Message</p>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-rose-400 hover:text-rose-300 font-semibold transition cursor-pointer"
                >
                  DM Me &rarr;
                </a>
              </div>
            </div>
          </div>

          
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 bg-green-500/20 rounded-xl text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                <p className="text-gray-400 text-sm mb-4">+91 63949 58180</p>
                <a
                  href="https://wa.me/916394958180"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition cursor-pointer"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
