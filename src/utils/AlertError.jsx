import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoader } from '@/redux/loader/LoaderSlice';

export const AlertError = ({ response, reset }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!response) return;

        if (response?.status === 200 || response?.status === 201) {
            setShow(false);
            dispatch(hideLoader());
        } else {
            setShow(true);
            dispatch(hideLoader());

            // Hide the alert after 3 seconds
            // const timer = setTimeout(() => {
            //     setShow(false);
            //     // if (reset) reset(); // Reset response if needed
            // }, 3000);

            // return () => clearTimeout(timer); // Cleanup timeout
        }
    }, [response, dispatch]);

    // if (!response || !show) return null;

    return (
        <Alert 
            className={`p-3 rounded-lg border transition-opacity duration-500 ease-in-out
            ${show ? "bg-red-100 text-red-700 border-red-300" : "bg-green-100 text-green-700 border-green-300"}`}>
            <AlertTitle className="font-bold">{response?.status === 200 || response.status === 201 ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>
                {response.data?.message || response.response?.data?.message || response?.data || response}
            </AlertDescription>
        </Alert>
    );
};
