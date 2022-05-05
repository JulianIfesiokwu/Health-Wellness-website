import React from "react";
import { StyledVideoContainer } from "../styled/Video.styled";
import Video from '../../assets/videos/background-video.webm'
import { useRef } from "react";

const BackgroundVideo = () => {
    const videoRef = useRef()
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.5
    }

    return (
        <StyledVideoContainer>
            <video ref={videoRef}
            onCanPlay={() => setPlayBack()}
            autoPlay='autoplay' loop='loop' muted>
                <source src={Video} type="video/mp4" />
            </video>
        </StyledVideoContainer>
    )
}

export default BackgroundVideo