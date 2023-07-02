import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="max-w-[1140px]  m-auto w-full p-4 py-16">
      <h2 className="text-center ">Menu</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzdXNoaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="food img"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
            alt="food img"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1404001241/photo/japanese-food-assortment-on-dark-background.webp?b=1&s=170667a&w=0&k=20&c=2_sBABg8lUAaE9Rj_j2MElViQVYbi3FxMWkJca8_Oq0="
            alt="food img"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581781870027-04212e231e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="food img"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1625108957587-8585dd1f4d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxzdXNoaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="food img"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
