import { getBlogById } from '@/services/blog';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const blogByIdHook = () => {
    const [response, setResponse] = useState();
    const [blog, setBlog] = useState();
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(()=>{
        dispatch(showLoader());
        const fetch = async () =>{
            try {
                const res = await getBlogById(id);
                setResponse(res)
                if(res.status === 201){
                    setBlog(res.data.blog);
                    dispatch(hideLoader())
                }
                console.log(res);
            } catch (error) {
                dispatch(hideLoader())
               console.log(error);
                
            }
        }
        fetch();
    },[])
  return {
    response, blog
  }
}
