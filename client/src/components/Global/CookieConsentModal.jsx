import React, { useState, useEffect } from 'react';

export const CookieConsentModal = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            setOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setOpen(false);
    };

    const handleClose = () => {
        localStorage.setItem('cookieConsent', 'false');
        setOpen(false);
    };

    return (
        <div>
            {open && (
                <div className="fixed bottom-4 right-4 bg-gray-900 shadow-lg  w-80 z-50">
                    <div className="p-4">
                       
                        <div className="mb-4">
                            <p className="text-sm text-white">
                            Our website uses cookies in order to offer you the most relevant information. Please accept for optimal experience.
                            </p>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="bg-white text-gray-900  text-sm  px-4 py-1 rounded-xs hover:bg-gray-900  border hover:border-white hover:text-white"
                                onClick={handleAccept}
                            >
                                Accept
                            </button>
                            <button
                                className="border border-white text-white text-xs px-4 py-1 rounded-sm hover:bg-gray-white hover:text-white"
                                onClick={handleClose}
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

 
