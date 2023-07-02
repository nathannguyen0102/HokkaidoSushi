import React from "react";

const Footer = () => {
  return (
    <div className=" w-[1140px] py-4 m-auto border-t-2 border-black">
      <div className="md:flex px-6   justify-between gap-20">
        <div className="pb-5">
          <h1 className="font-bold  ">Contact us</h1>
          <p>623 N Hathaway, San Francisco, CA 94107</p>
          <p>888-888-8888</p>
          <p>hokkaidosushi@gmail.com</p>
        </div>
        <div className="pb-5">
          <h1 className="font-bold">Resources</h1>
          <p>For business</p>
          <p>Help center</p>
          <p>Privacy & terms</p>
        </div>
        <div className="pb-5">
          <h1 className="font-bold ">Account</h1>
          <p>iOS app</p>
          <p>Android app</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
