import React from "react";

import "./Contact.scss";
import { DotOutline, CheckFat } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contacts">
        {[1, 2, 3].map(() => {
          return (
            <div className="contact">
              <img src="assets/cesar.jpg" alt="" />
              <div className="data">
                <div className="userName">
                  CesarVanel <DotOutline size={32} weight="fill" />
                </div>
                <div className="status">
                  <div className="check">
                    <CheckFat weight="bold" /> <span>cool je suis content</span>
                  </div>
                  <div className="times">
                    <time>2:15</time>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
