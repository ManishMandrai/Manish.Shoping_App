import React from 'react';

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Add your logic to handle form submission here
    }

    return (
        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-lg text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Subscribe now & get 20% off
            </p>
            
            <p className="text-gray-600 mb-6">
                Be the first to know about the latest updates, exclusive deals, and more! Don't miss out!
            </p>

            <form onSubmit={onSubmitHandler} className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
                <div className="flex flex-col gap-4">
                    <input 
                        className="w-full text-gray-700 py-3 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                        type="email"
                        placeholder="Enter your email address"
                        required
                    />

                    <button 
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 transition-all text-white font-semibold py-3 rounded-lg shadow-md"
                    >
                        SUBSCRIBE NOW
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewsletterBox;
