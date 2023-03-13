import React from "react";
import "./Sidebar.css";
import repairImg from "../../assets/workerrepairing.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <img className="sideBarImg" src={repairImg} alt="repairimg" />
        <p>Need an expert opinion on your car and bike related queries?</p>

        <button type="button" className="sidebarButton">
          Ask Now
        </button>
        
          <span className="sidebarTitle">MOST READ</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              nostrum consequuntur voluptatem.
            </li>
            <li className="sidebarListItem">
              Minus ad deleniti eveniet corrupti. Deserunt quia, eius ipsam a
              quam minima dolorum nostrum delectus{" "}
            </li>
            <li className="sidebarListItem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              nostrum consequuntur voluptatem.
            </li>
            <li className="sidebarListItem">
              Minus ad deleniti eveniet corrupti. Deserunt quia, eius ipsam a
              quam minima dolorum nostrum delectus{" "}
            </li>
          </ul>
        </div>
      </div>
        
  );
};

export default Sidebar;
