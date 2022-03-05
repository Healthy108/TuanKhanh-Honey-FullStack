import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Tuan Khanh Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/s851x315/161327300_992525551154495_2813325338791669610_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=HBT7oSDedogAX-Xv602&_nc_oc=AQl9mN3-jch8ygVwk08sk7fQjeDM_wzkqzp2FvfRYDbAdmeW4mScHY64jPr1Gl9LRFuVPYrjdWdeB661rSBx8mXr&_nc_ht=scontent.fhan5-3.fna&oh=00_AT_mN17RX2mWFpXnuJN4bcaUD1XZcau-EFPGRENjieDKfQ&oe=6237FEA0" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
