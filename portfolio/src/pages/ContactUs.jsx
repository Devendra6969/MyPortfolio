import React from "react";
import { Link } from "react-router"; // React Router v7

function ContactUs() {
  const contactMethods = [
    {
      channel: "EMAIL",
      value: "ds493133@gmail.com",
      action: "mailto:ds493133@gmail.com",
      status: "Primary",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      channel: "LINKEDIN",
      value: "devendrasingh100",
      action: "https://www.linkedin.com/in/devendrasingh100/",
      status: "Professional",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      channel: "WHATSAPP",
      value: "+91 63949 58180",
      action: "https://wa.me/916394958180",
      status: "Quick Chat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.15.224-.587.731-.718.881-.131.15-.262.169-.486.056-.224-.113-.953-.351-1.815-1.12-.673-.6-1.125-1.34-1.257-1.565-.131-.224-.014-.345.098-.458.101-.101.224-.263.336-.394.112-.131.149-.224.224-.374.075-.15.037-.281-.019-.393-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383-.13-.006-.28-.006-.429-.006-.15 0-.393.056-.6.281-.206.225-.787.769-.787 1.876 0 1.106.806 2.174.919 2.325.112.15 1.586 2.421 3.842 3.395.536.232.954.37 1.281.474.545.174 1.041.15 1.434.09.438-.066 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.206-.15-.43-.263"
          />
        </svg>
      ),
    },
    {
      channel: "INSTAGRAM",
      value: "@direct_msg",
      action: "https://instagram.com/",
      status: "Social",
      icon: (
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
          className="w-6 h-6"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black py-20 px-6 overflow-hidden relative">
      {/* Background: Signature Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Navigation / Breadcrumb */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Index_01 // Return</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-20 space-y-4 border-l border-zinc-800 pl-8">
          <h2 className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">
            Communication Protocol
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Get in Touch
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg font-light">
            Available for freelance projects, collaborative research, and
            technical consultation.
          </p>
        </div>

        {/* Contact Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-[#0a0a0a] p-10 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between h-48"
            >
              {/* Top Row: Icon & Status */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                  {method.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {method.status}
                  </span>
                </div>
              </div>

              {/* Bottom Row: Info & Action Arrow */}
              <div>
                <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  {method.channel}
                </h3>
                <div className="flex justify-between items-end">
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:underline decoration-zinc-700 underline-offset-4 decoration-1">
                    {method.channel === "LINKEDIN"
                      ? "Connect"
                      : method.channel === "INSTAGRAM"
                        ? "DM Me"
                        : method.value}
                  </span>
                  <span className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>Local Time: IST (UTC+05:30)</span>
          <span>Response Time: &lt; [cite_start]24 Hours [cite: 3]</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
