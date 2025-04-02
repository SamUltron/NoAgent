import React from "react";

const SendMessage = () => {
  return (
    <div className=" w-full space-y-3">
      <h3 className="text-2xl font-medium">Send Message</h3>
      <form className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="space-y-4">
            <label htmlFor="name" className="font-medium block">Name</label>
            <input type="text" name="" id="name" placeholder="Your name" className="border rounded-md w-full pl-2 pr-40 py-2" />
          </div>

          <div className="space-y-4">
            <label htmlFor="email" className="font-medium block">Email</label>
            <input type="text" name="" id="email" placeholder="Your email" className="border rounded-md w-full pl-2 pr-40 py-2"/>
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="subject" className="font-medium block">Subject</label>
          <textarea
            name=""
            id="subject"
            placeholder="How can we help?"
            className="border rounded-md w-full"></textarea>
        </div>

        <div className="space-y-4">
          <label htmlFor="message" className="font-medium block">Message</label>
          <textarea name="" id="message" placeholder="your message" className="border rounded-md w-full" rows={5}></textarea>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
