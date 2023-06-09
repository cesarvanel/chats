import React from "react";

import "./profile.scss";
import { X } from "@phosphor-icons/react";
import { useAppSelector } from "../../states/stores/stores";

const Profile = () => {
  const { sesUser } = useAppSelector((state) => state.user);

  return (
    <div className="Profile">
      <X size={32} weight="fill" />

      <div className="top">
        <img src={`data:image/svg+xml;base64,${sesUser?.avatar}`} alt="" />
        <div>
          <p>{sesUser?.username}</p>
          <span>{sesUser?.city}</span>
        </div>
      </div>
      <hr />

      <div className="middle">
        <div className="items">
          <h4>About</h4>
          {sesUser?.about && (
            <div className="text">
              {sesUser.about}
            </div>
          )}
        </div>

        <div className="items">
          <h4>Contact Number</h4>
          {sesUser?.number && <div>{sesUser.number}</div>}
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="medias">
          <h4>Medias</h4>
          <div className="images">
            {sesUser?.images.map((image) => {
              return <img src={`data:image/svg+xml;base64,${image}`} alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
