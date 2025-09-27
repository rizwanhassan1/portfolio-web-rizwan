import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="p-8 flex justify-center bg-pink-100">
        <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;