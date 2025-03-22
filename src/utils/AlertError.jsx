import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { hideLoader } from '@/redux/loader/LoaderSlice';
export const AlertError = ({ response, reset }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    useEffect(() => {
        if (response?.status === 200) {
            setShow(false);
            dispatch(hideLoader());
        } else if (response?.status !== 200) {
            setShow(true);
            dispatch(hideLoader());
        } else {
            setShow(false);
        }
    }, [response]); 

    if (!response) return null;

    return (
        <Alert 
            className={`p-3 rounded-lg border 
            ${show ? "bg-red-100 text-red-700 border-red-300" : "bg-green-100 text-green-700 border-green-300"}`}>
            <AlertTitle className="font-bold">{show ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{response.data?.message || response.response?.data?.message
             || response?.data || response}</AlertDescription>
        </Alert>
    );
};
