import { useEffect, useState } from "react";

import "./Step3.scss";
import { Buffer } from "buffer";
import axios from "axios";
import Loader from "../loader/loader";
import { DisplayToast } from "../../utils/toastDispaly/DisplayToast";
import { File_Api} from "../../utils/constant/constant";
import { useFormContext } from "react-hook-form";
import { Register } from "../../types/interface";


const Step3 = () => {


  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<Register>();
  const [isLoading, setIsLoading] = useState(true);
  const [avatars, setAvatars] = useState<any[]>([]);
  const [selectedAvatarIndex, setetSelectedAvatarIndex] =
    useState<any>(undefined);


  useEffect(() => {
    async function fetchAvatars() {
      let data = [];
      try {
        for (let index = 0; index < 6; index++) {
          const images = await axios.get(`${File_Api}/${Math.random() * 1000}`);
          const buffer = new Buffer(images.data);
          data.push(buffer.toString("base64"));
        }

        setAvatars(data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        } else {
          DisplayToast.Error({ message: "Check Your network and try againt" });
        }
      }
    }

    const timeout = setTimeout(() => {
      fetchAvatars();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const selectAvatar = (index: number, avatar: any) => {
    setetSelectedAvatarIndex((prev: number) => (prev = index));
    setValue("avatar",avatar, {
      shouldValidate: true
    })
  };

  return (
    <div className="Step3">
      <h1>Select Avatar Image</h1>

      {errors.avatar && <small>{errors.avatar.message}</small>}

      {isLoading ? (
        <div
          style={{
            height:"max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className="container">
          {avatars.map((avatar, index) => {
            return (
              <div
                className={`avatar ${
                  index === selectedAvatarIndex && "selected"
                }`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt=""
                  onClick={() => selectAvatar(index, avatar)}
                  {...register("avatar",{
                    required:"select avatar image"
                  })}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Step3;
