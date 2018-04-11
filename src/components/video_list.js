import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ( props ) => {
    const videoItems = props
        .videos
        .slice(1)
        .map(( item ) => {
            return ( <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={item.etag}
                video={item}/> );
        });
    return (
        <div className="col-lg-4">
            <ul className="list-group">
                {videoItems}
            </ul>
        </div>
    );
}
export default VideoList;