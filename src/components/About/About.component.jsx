import React, { useState } from "react";
import StyledAbout from "../styled/About.styled";
import Button from "../styled/Button.styled";
import OurStory from '../../assets/images/our-story-image1.jpg'
import { aboutDetails } from "../../data";

const About = () => {
    const [paragraph, setParagraph] = useState(aboutDetails[0].paragrapgh)

    return (
        <>
        <StyledAbout>
            <div className="img-container">
                <img src={OurStory} alt="" />
            </div>
            <div className="about-info">
                <h3 className="info-title">our story</h3>
                <p className="info-summary">Our team comes with the experience and knowledge</p>
                <div className="short">
                    <div className="controls">
                        {aboutDetails.map((item, index) => {
                            const {id, title} = item
                            return (
                            <Button key={id} 
                            onClick={() => {
                                setParagraph(aboutDetails[index].paragrapgh)}}>{title}</Button>
                            )
                        })}
                    </div>
                    <p className="summarised">
                        {paragraph}
                    </p>
                </div>
            </div>
        </StyledAbout>
        </>

    )
}

export default About