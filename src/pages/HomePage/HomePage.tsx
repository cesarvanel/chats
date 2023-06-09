import "./HomePage.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Profile from "../../components/profile/profile";
import withAuthProtection from "../../hoc/withAuthProtection";
import { useEffect } from "react";
import Loader from "../../components/loader/loader";
import { useAppDispatch, useAppSelector } from "../../states/stores/stores";
import { getProfile } from "../../states/app/user/action";
import ChatContainers from "../../components/ChatContainers/ChatContainers";

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
          <ChatContainers />
          <Profile />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default withAuthProtection(HomePage);
