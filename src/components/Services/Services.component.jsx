import React from 'react'
import StyledServices from '../styled/Services.styled'
import StyledCard from '../styled/Card.styled'
import Button from '../styled/Button.styled'
import aromatheraphyThumbnail from '../../assets/images/aromatheraphy-thumbnail.jpg'
import hotstoneThumbnail from '../../assets/images/hotstone-thumbnail.jpg'
import swedishThumbnail from '../../assets/images/swedish-thumbnail.jpg'
import { ImCircleRight } from "react-icons/im";
import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <StyledServices>
            <div className="title">
                <h2>Our Services</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className='offerings'>
                <StyledCard>
                    <h3>Aromatheraphy</h3>
                    <img src={aromatheraphyThumbnail} alt='aromatheraphy' />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <Link to='/services'>
                        <Button>Schedule <ImCircleRight className="icon" /></Button>
                    </Link>
                </StyledCard>
                <StyledCard>
                    <h3>Hot Stone Massage</h3>
                    <img src={hotstoneThumbnail} alt='Hot stone Massage' />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <Link to='/services'>
                        <Button>Schedule <ImCircleRight className="icon" /></Button>
                    </Link>
                </StyledCard>
                <StyledCard>
                    <h3>Swedish Massage</h3>
                    <img src={swedishThumbnail} alt='Swedish Massage' />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <Link to='/services'>
                        <Button>Schedule <ImCircleRight className="icon" /></Button>
                    </Link>
                </StyledCard>

            </div>

        </StyledServices>

    )
}

export default Services;