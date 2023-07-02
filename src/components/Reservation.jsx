import React from "react";

const Reservation = () => {
  return (
    <div id="reservation" className="max-w-[1140px] m-auto w-full p-4">
      <form
        action=""
        className="lg:flex lg:justify-between w-full items-center"
      >
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option value="">Los Angeles</option>
            <option>San Francisco</option>
            <option>San Diego</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date"></input>
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Time</label>
            <input className="border rounded-md p-2" type="time"></input>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2">
          <label>Reservation</label>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
