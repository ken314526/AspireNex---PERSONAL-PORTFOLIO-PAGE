"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { FormEvent, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="min-h-screen bg-black py-12 pt-24 relative">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl text-center mb-8 font-bold">Contact Me</h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Whether you have a project in mind, want to collaborate, or just have
          a question, feel free to drop me a message. I{`'`}m always open to new
          opportunities and connections.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-slate-700 to-slate-800 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-500 px-6 py-2 rounded-lg text-white hover:text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
