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
                <StyledCard className='card'>
                    <img src={aromatheraphyThumbnail} alt='aromatheraphy' />
                    <div className="details">
                        <h3>Aromatheraphy</h3>
                        <Link to='/services'>
                        <Button>Schedule <ImCircleRight className="icon" /></Button>
                        </Link>
                    </div>
                </StyledCard>
                <StyledCard className='card'>
                    <img src={hotstoneThumbnail} alt='Hot stone Massage' />
                    <div className="details">
                        <h3>Hot Stone Massage</h3>
                        <Link to='/services'>
                            <Button>Schedule <ImCircleRight className="icon" /></Button>
                        </Link>
                    </div>
                </StyledCard>
                <StyledCard className='card'>
                    <img src={swedishThumbnail} alt='Swedish Massage' />
                    <div className="details">
                    <h3>Swedish Massage</h3>
                    <Link to='/services'>
                        <Button>Schedule <ImCircleRight className="icon" /></Button>
                    </Link>
                    </div>
                </StyledCard>
                <StyledCard className='card'>
                    <div className="details">
                    <Link to='/services'>
                        <Button>All Services <ImCircleRight className="icon" /></Button>
                    </Link>
                    </div>
                </StyledCard>

            </div>

        </StyledServices>

    )
}

export default Services;