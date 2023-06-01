import React, { useMemo } from "react";
import "./sidebar.scss";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const router = useLocation();

  const likns = [
    { label: "Contact", router: "/", id: 1 },
    { label: "Groupe", router: "/groupe", id: 2 },
    { label: "Profile", router: "/profile", id: 3 },
  ];

  const index = useMemo(() => {
    return likns.findIndex((link) => link.router === router.pathname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  console.log(index, router.pathname);

  return (
    <div className="Sidebar">
      <div className="contains">
        <img src="https://api.multiavatar.com/1257.png" alt="" />
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
  );
};

export default Sidebar;
