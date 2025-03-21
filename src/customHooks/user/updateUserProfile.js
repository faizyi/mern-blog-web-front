import { userProfileQuery } from '@/services/react-query/userQuery';
import { updateUserProfile } from '@/services/user';
import React, { useState } from 'react'

export const UpdateUserProfileHook = () => {
    const { data: userInfo } = userProfileQuery();
    console.log(userInfo);
    
    const [profilePic, setProfilePic] = useState(userInfo?.profilePic || "");
    const [username, setUsername] = useState(userInfo?.username);
    const [email, setEmail] = useState(userInfo?.email || "");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [file, setFile] = useState(null);
  
    const handleProfilePicChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        setProfilePic(URL.createObjectURL(file)); // Preview image
      }
    };
  
    const handleUpdateProfile = async () => {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      if (currentPassword && newPassword) {
        formData.append("currentPassword", currentPassword);
        formData.append("newPassword", newPassword);
      }
  
      if (file) formData.append("profilePic", file);
      for (const [key, value] of formData.entries()) {
          console.log(key, value);
      }
  
      try {
          const res = await updateUserProfile(formData);
          console.log("Profile Updated:", res.data);
          alert("Profile updated successfully!");
  
          // ✅ Update user state with new values
          setUsername(res.data.userInfo.username);
          setEmail(res.data.userInfo.email);
          setProfilePic(res.data.userInfo.profilePic);
      } catch (error) {
          console.error("Error updating profile:", error);
          alert("Failed to update profile.");
      }
  };
    
  return {
    userInfo,
    profilePic,
    username,
    email,
    currentPassword,
    newPassword,
    setCurrentPassword,
    setNewPassword,
    setUsername,
    setEmail,
    setProfilePic,
    handleProfilePicChange,
    handleUpdateProfile
  }
}
