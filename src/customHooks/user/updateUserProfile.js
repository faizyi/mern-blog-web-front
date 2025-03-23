import { queryClient, userProfileQuery } from '@/services/react-query/userQuery';
import { updateUserProfile } from '@/services/user';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export const UpdateUserProfileHook = () => {
  const { data: userInfo, refetch } = userProfileQuery();
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState(userInfo?.profilePic || "");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const { register, handleSubmit, formState: { errors } , reset} = useForm({
    defaultValues: {
      username: userInfo?.username || "",
      email: userInfo?.email || "",
      currentPassword: "",
      newPassword: ""
    }
  });

  useEffect(() =>{
    reset({
      username: userInfo?.username || "",
      email: userInfo?.email || "",
      currentPassword: "",
      newPassword: ""
    })
    setProfilePic(userInfo?.profilePic || "");
  },[userInfo, reset]);

  
    const handleProfilePicChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        setProfilePic(URL.createObjectURL(file)); // Preview image
      }
    };
  
    const onSubmit = async (data) => {
      setLoading(true);
      const formData = { ...data,};
      if(file) formData.profilePic = file;
      
      try {
        const res = await updateUserProfile(formData);
        await refetch();
        console.log("Profile Updated:", res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
          console.error("Error updating profile:", error);
      }
  };
    
  return {
    profilePic,
    setProfilePic,
    handleProfilePicChange,
    onSubmit,
    handleSubmit,
    register,
    errors,
    loading
  }
}
