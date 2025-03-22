import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import React, { useState, useEffect } from 'react'

export const AlertError = ({ response, reset }) => {
    const [show, setShow] = useState(true);
    console.log(response);
    
    useEffect(() => {
        if (response?.status === 200) {
            setShow(false);
        } else if (response?.status !== 200) {
            // reset();
            setShow(true);
        }
    }, [response]); 

    if (!response) return null;

    return (
        <Alert 
            className={`p-3 rounded-lg border 
            ${show ? "bg-red-100 text-red-700 border-red-300" : "bg-green-100 text-green-700 border-green-300"}`}>
            <AlertTitle className="font-bold">{show ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{response.data?.message || response.response?.data?.message
             || response?.data}</AlertDescription>
        </Alert>
    );
};
