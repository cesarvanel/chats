import React from "react";

import "./profile.scss";
import { X } from "@phosphor-icons/react";

const Profile = () => {
  return (
    <div className="Profile">
      <X size={32} weight="fill" />

      <div className="top">
        <img src="/assets/cesar.jpg" alt="" sizes="" />
        <div>
          <p>CesarVanel</p>
          <span>Dschang</span>
        </div>
      </div>
      <hr />

      <div className="middle">
        <div className="items">
          <h4>About</h4>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className="items">
          <h4>Contact Number</h4>
          <div>+237693249369</div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="medias">
          <h4>Medias</h4>
          <div className="images">
            <img src="/assets/cesar.jpg" alt="" sizes="" />
            <img src="/assets/cesar.jpg" alt="" sizes="" />
            <img src="/assets/cesar.jpg" alt="" sizes="" />
            <img src="/assets/cesar.jpg" alt="" sizes="" />{" "}
            <img src="/assets/cesar.jpg" alt="" sizes="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
