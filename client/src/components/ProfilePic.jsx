import React from "react";
import { useSelector } from "react-redux";

const ProfilePic = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center my-5">
      <img
        src={
          currentUser?.photoURL ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="profile"
        className="w-24 h-24 rounded-full object-cover border"
      />

      <button
        type="button"
        className="text-sm text-blue-600 mt-2 hover:underline"
      >
        Change Photo
      </button>
    </div>
  );
};

export default ProfilePic;
