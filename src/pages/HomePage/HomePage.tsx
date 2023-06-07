import "./HomePage.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Conversation from "../../components/conversation/conversation";
import Profile from "../../components/profile/profile";
import Chat from "../../components/chat/chat";
import withAuthProtection from "../../hoc/withAuthProtection";
import { useEffect } from "react";
import Loader from "../../components/loader/loader";
import { useAppDispatch, useAppSelector } from "../../states/stores/stores";
import { getProfile } from "../../states/app/user/action";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    const loadProfile = async () => {
      dispatch(getProfile());
    };

    loadProfile();
  }, [dispatch]);

  return (
    <div className="HomePage">
      {loading === "1" ? (
        <>
          <Sidebar />
          <Conversation />
          <Chat />
          <Profile />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default withAuthProtection(HomePage);
