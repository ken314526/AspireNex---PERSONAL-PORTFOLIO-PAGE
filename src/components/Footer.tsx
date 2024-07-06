import Link from "next/link";
import React from "react";
import footerlinksData from "@/data/footerlinks.json";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            {footerlinksData.quicklinks.map((ql) => (
              <li key={ql.id}>
                <a
                  href={ql.link}
                  className="hover:text-white transition-colors duration-300"
                >
                  {ql.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Links</h2>
          <div className="flex space-x-4">
            {footerlinksData.link.map((lk) => (
              <a
                href={lk.link}
                className="hover:text-white transition-colors duration-300"
                target="_blank"
                key={lk.id}
              >
                {lk.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <Link href={"/contact"}>
            <p>Developer</p>
            <p>ABHISHEK SHARMA</p>
            <p>From India</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
