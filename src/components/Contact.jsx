import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center">Send us a message</h2>
      <p className="text-center py-2">We're standing by</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHxqYXBhbmVzZSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="restaurant img"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="First"
            ></input>
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Last    "
            ></input>
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            ></input>
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Phone"
            ></input>
            <input
              className="border col-span-2 m-2 p-2"
              type="text"
              placeholder="Address"
            ></input>
            <textarea
              className="col-span-2 border m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 p-2 m-2 hover:text-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
