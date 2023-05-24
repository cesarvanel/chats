import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";

import "./App.scss";
import {
  CheckFat,
  DotOutline,
  DotsThreeOutlineVertical,
  MagnifyingGlass,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

function App() {
  const likns = [
    { label: "Message", router: "/", id: 1 },
    { label: "Groupe", router: "/groupe", id: 2 },
    { label: "Contact", router: "/contact", id: 3 },
    { label: "Profile", router: "/profile", id: 4 },
  ];
  const router = useLocation();

  const index = useMemo(() => {
    return likns.findIndex((link) => link.router === router.pathname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  console.log(index, router.pathname);

  return (
    <div className="App">
      <div className="left">
        <div className="contains">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="37.5" cy="37.5" r="37.5" fill="#324DA6" />
            <circle cx="37.5" cy="37.5" r="34.5" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              ></pattern>
            </defs>
          </svg>
          <div className="user">
            <div>Cesar Zoleko</div>
            <div>Web developper</div>
          </div>
        </div>

        <div className="sideBar">
          {likns.map((link) => {
            const active = link.id === index + 1;
            return (
              <Link key={link.id} to={`${link.router}`}>
                <div className={`item ${active && "active"}`}>
                  <li>{link.label}</li>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="setting">
          <hr />

          <div className="item">
            <button>Setting</button>
          </div>
          <div>
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="middle1">
        <h3>Conversations</h3>
        <div className="search">
          <MagnifyingGlass weight="bold" />
          <input type="text" name="" id="" placeholder="Search here..." />
        </div>

        <div className="text">
          <div>Recents-Chat</div>
          <div> + New Chat</div>
        </div>

        <div className="contacts">
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <div className="contact">
                <img src="assets/cesar.jpg" alt="" />
                <div className="data">
                  <div className="userName">
                    CesarVanel <DotOutline size={32} weight="fill" />
                  </div>
                  <div className="status">
                    <div className="check">
                      <CheckFat weight="bold" />{" "}
                      <span>cool je suis content</span>
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
      <div className="middle2">
        <header>
          <div className="tolbar">
            <img src="/assets/cesar.jpg" alt="" />
            <div className="user">
              <div>CesarVanel</div>
              <time>Last sunday at today 2:15</time>
            </div>
          </div>

          <div>
            <MagnifyingGlass weight="bold" />
            <DotsThreeOutlineVertical weight="bold" />{" "}
          </div>
        </header>

        <div className="chat">
          <div className="content sent">
            <span className="message-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </span>
            <span className="message-time">1:48</span>
          </div>

          <div className="content received">
            <span className="message-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <span className="message-time">1:48</span>
          </div>
        </div>

        <form action="">
          <div className="bottom-bar">
            <input type="text" name="msg" placeholder="Type a message..." />
            <button type="submit">
              <PaperPlaneTilt weight="fill" />
            </button>
          </div>
        </form>
      </div>

      <div className="right">4</div>
    </div>
  );
}

export default App;
