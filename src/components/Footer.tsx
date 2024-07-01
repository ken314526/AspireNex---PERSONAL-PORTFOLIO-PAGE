import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Links</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.github.com/ken314526"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/ken314526"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Leetcode
            </a>
            <a
              href="https://www.hackerrank.com/profile/CSAIML_1530010"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              HackerRank
            </a>
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
