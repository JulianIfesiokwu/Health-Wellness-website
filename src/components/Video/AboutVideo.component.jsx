import { StyledVideoContainer } from "../styled/Video.styled";
import Video from '../../assets/videos/theraphy-session.webm'
import { useRef } from "react";

const AboutVideo = () => {
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
                Your browser does not support the video tag.
            </video>
        </StyledVideoContainer>
    )
}

export default AboutVideo