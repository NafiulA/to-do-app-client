import React from 'react';
import loading from "../../Assets/images/loading.gif";

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;