import React from "react";

const SendMessage = () => {
  return (
    <div className="w-full space-y-6">
      <h3 className="text-2xl font-medium">Send Message</h3>
      <form className="space-y-6">
        {/* Name and Email Fields */}
        <div className="flex space-x-6">
          <div className="w-1/2 space-y-4">
            <label htmlFor="name" className="font-medium block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="border rounded-md w-full pl-2 py-2 focus:outline-none"
            />
          </div>

          <div className="w-1/2 space-y-4">
            <label htmlFor="email" className="font-medium block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="border rounded-md w-full pl-2 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-4">
          <label htmlFor="subject" className="font-medium block">
            Subject
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="How can we help?"
            className="border rounded-md w-full pl-2 py-1 focus:outline-none"
          ></textarea>
        </div>

        {/* Message Field */}
        <div className="space-y-4">
          <label htmlFor="message" className="font-medium block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            className="border rounded-md w-full pl-2 py-2 focus:outline-none"
            rows={5}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-4 bg-[#CBA135] text-white rounded-2xl focus:outline-none transition duration-300 hover:bg-[#edba38] text-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
