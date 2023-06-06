
import "./HomePage.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Conversation from "../../components/conversation/conversation";
import Profile from "../../components/profile/profile";
import Chat from "../../components/chat/chat";


export const HomePage = () => {



  /*
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await AxiosInstance.get(USER_DATA_PROFILE);

        setData(response.data);
        setIsload(true);
      } catch (error) {
        console.log(error);
      }
    };

    loadProfile();
  }, []);*/

  return (
    <div className="HomePage">
      <>
        <Sidebar />
        <Conversation />
        <Chat />
        <Profile />
      </>
    </div>
  );
};

export default HomePage;
