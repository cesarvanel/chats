import { useModale } from "../../hooks/useModal";
import { Routerss } from "../../router/router";
import Modale from "../modal/modale";
import { useEffect, useState } from "react";

import "./conversation.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { AxiosInstance } from "../../api/axios-config";
import { ALL_USER } from "../../utils/constant/constant";
import { User } from "../../types/interface";
import Loader from "../loader/loader";

const Conversation = () => {
  const modale = useModale();
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectCurrentUserId, setSelectCurrentUserId] =
    useState<any>(undefined);
  const [userSelected, setUserSelected] = useState<User[]>([]);

  useEffect(() => {
    const loadContact = async () => {
      try {
        const response = await AxiosInstance.get(ALL_USER);

        setUsers((prev: any) => (prev = response.data));
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    loadContact();
  }, []);

  const checkSelected = (user: User) => {
    return userSelected.includes(user);
  };
  const cancelSelected = (_id: string) => {
    const filter = userSelected.filter((x: any) => x._id !== _id);
    setUserSelected(filter);
  };

  const selectUsers = (user: User) => {
    setSelectCurrentUserId((prev: string) => (prev = user._id));

    const isSelected = checkSelected(user);

    if (isSelected) return cancelSelected(user._id);

    setUserSelected((prev) => {
      return [...prev, user];
    });
  };

  console.log(userSelected, "data");
  return (
    <div className="Conversation">
      <h3>Conversations</h3>
      <div className="search">
        <MagnifyingGlass weight="bold" />
        <input type="text" name="" id="" placeholder="Search here..." />
      </div>

      <div className="text">
        <div>Recents-Chat</div>
        <div className="add">
          <button onClick={() => modale.setOpen(true)}>Add User</button>
        </div>
      </div>

      <Modale title="Add Contact" open={modale.open} onClose={modale.close}>
        <div className="wrappersss">
          {loaded ? (
            <>
              {" "}
              {users.map((user) => {
                const isSelected = checkSelected(user);
                return (
                  <div
                    key={user._id}
                    className={`user ${isSelected && "selected"}`}
                    onClick={() => selectUsers(user)}
                  >
                    <img
                      src={`data:image/svg+xml;base64,${user.avatar}`}
                      alt=""
                    />
                    <div>
                      <span>{user.username}</span>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </Modale>

      <Routerss />
    </div>
  );
};

export default Conversation;
