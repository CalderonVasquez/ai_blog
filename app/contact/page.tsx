import React from 'react'

const ContactForm = () => {
  return (
    <form className="max-w-lg mx-auto p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your message"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
