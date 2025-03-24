import { queryClient, userProfileQuery } from '@/services/react-query/userQuery';
import { deleteUser, updateUserProfile } from '@/services/user';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const UpdateUserProfileHook = () => {
  const disptach = useDispatch();
  const [response, setResponse] = useState(null);
  const { data: userInfo, refetch, } = userProfileQuery();
  const [profilePic, setProfilePic] = useState(userInfo?.data.userInfo.profilePic || "");
  const [file, setFile] = useState(null);
  const { register, handleSubmit, formState: { errors } , reset} = useForm({
    defaultValues: {
      username: userInfo?.data.userInfo.username || "",
      email: userInfo?.data.userInfo.email || "",
      currentPassword: "",
      newPassword: ""
    }
  });

  useEffect(() =>{
    reset({
      username: userInfo?.data.userInfo.username || "",
      email: userInfo?.data.userInfo.email || "",
      currentPassword: "",
      newPassword: ""
    })
    setProfilePic(userInfo?.data.userInfo?.profilePic || "");
  },[userInfo, reset]);

  
    const handleProfilePicChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        setProfilePic(URL.createObjectURL(file)); // Preview image
      }
    };
  
    const onSubmit = async (data) => {
      disptach(showLoader());
      const formData = { ...data,};
      if(file) formData.profilePic = file;
      
      try {
        const res = await updateUserProfile(formData);
        setResponse(res);
        await refetch();
        disptach(hideLoader());
      } catch (error) {
          disptach(hideLoader());
      }
  };

  const handleDeleteAccount = async () => {
    disptach(showLoader());
    try {
      const res = await deleteUser();
      setResponse(res);
      localStorage.removeItem('user');
      queryClient.removeQueries(['userInfo']);
      disptach(hideLoader());
    } catch (error) {
      disptach(hideLoader());
      console.log(error);
    }
  }
    
  return {
    profilePic,
    setProfilePic,
    handleProfilePicChange,
    onSubmit,
    handleSubmit,
    register,
    errors,
    response,
    handleDeleteAccount
  }
}
