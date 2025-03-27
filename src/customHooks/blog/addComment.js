import { addComment } from '@/services/blog';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
import { userProfileQuery } from '@/services/react-query/userQuery';
export const AddCommentHook = ({userId}) => {
    const { data: userInfo, refetch, } = userProfileQuery();
    const user = userInfo?.data.userInfo._id
    const dispatch = useDispatch();
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const [response, setResponse] = useState();
    const [isLoader, setIsLoader] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const handleClick = () => {
        setShowCommentBox(!showCommentBox);
    }
    const handleAddComment = async () => {
        if(comment === '') return
        try {
            const res = await addComment(comment, id, userId, user);
            setResponse(res);
            setComment('');
        } catch (error) {
            if(error.status == 401) localStorage.removeItem("user");
            setComment('');
            setResponse(error);
        } 
    }
  return {
    comment,
    setComment,
    showCommentBox,
    setShowCommentBox,
    handleClick,
    handleAddComment,
    response,
    isLoader,
    setResponse
  }
}
