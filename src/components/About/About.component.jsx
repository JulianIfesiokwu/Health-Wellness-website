import React from "react";
import StyledAbout from "../styled/About.styled";
import Button from "../styled/Button.styled";
import OurStory from '../../assets/images/our-story-image1.jpg'

const About = () => {
    return (
        <StyledAbout>
            <div className="img-container">
                <img src={OurStory} alt="" />
            </div>
            <div className="about-info">
                <h3 className="info-title">our story</h3>
                <p className="info-summary">Our team comes with the experience and knowledge</p>
                <div className="short">
                    <div className="controls">
                        <Button>Who We Are</Button>
                        <Button>Our Vision</Button>
                        <Button>Our History</Button>
                    </div>
                    <p className="summarised">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.
                        There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour.
                    </p>
                </div>
            </div>
        </StyledAbout>

    )
}

export default About