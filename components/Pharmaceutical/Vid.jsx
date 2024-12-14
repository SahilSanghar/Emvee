// VideoPlayer.js
import React from 'react';

const Vid = ({ videoSrc }) => {
return (
    <div className="video-container -mt-14">
    <video autoPlay loop muted playsInline className="w-[1800px] h-[90vh]">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    </div>
);
};

export default Vid;
