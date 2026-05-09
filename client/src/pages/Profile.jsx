import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../redux/user/userSlice";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice";

import ProfilePic from "../components/ProfilePic";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username || "",
        email: currentUser.email || "",
        password: "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateUserStart());
    setSuccess(null);

    try {
      const res = await fetch("/api/auth/updateuser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data.user));
      setSuccess("Profile updated successfully!");
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?"))
      return;

    dispatch(deleteUserStart());

    try {
      const res = await fetch("/api/auth/deleteuser", {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      dispatch(deleteUserSuccess());
      dispatch(signOut());
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      {/* 👇 CLEAN COMPONENT */}
      <ProfilePic />

      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="password"
          id="password"
          placeholder="New password (optional)"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <button
          disabled={loading}
          className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-5">{error}</p>}
      {success && <p className="text-green-500 mt-5">{success}</p>}

      <div className="mt-5">
        <span className="text-red-700 cursor-pointer" onClick={handleDelete}>
          Delete Account
        </span>
      </div>
    </div>
  );
};

export default Profile;
