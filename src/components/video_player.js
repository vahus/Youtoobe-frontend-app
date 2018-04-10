import React from 'react';

const VideoPlayer = ({ video }) => {
    if ( !video ) {
        return (
            <div id="preloader">
                <div id="loader"></div>
            </div>
        );
    }
    const videoID = video.id.videoId;
    const url = `https://youtube.com/embed/${ videoID }`;
    return (
        <div className="col-lg-8 video-player">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe allowFullScreen className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h2>{video.snippet.title}</h2>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoPlayer;