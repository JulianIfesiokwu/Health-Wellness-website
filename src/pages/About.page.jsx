import { useState } from "react";
import StyledAboutPage from "../components/styled/About-Page.styled"
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import { testimonials } from "../data"
import { ImQuotesLeft } from "react-icons/im";

const AboutPage = () => {
    const [current,setCurrent] = useState(0)
    const length = testimonials.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <StyledAboutPage>
            <div className="heading">
                <h1>Professional massage therapists
                    dedicated to ensuring healthier lifestyles for our clients.
                </h1>
            </div>
            <div className="history">
                <div className="details">
                    <h2>Our History</h2>
                    <p>We have been in this game for 10years selling rap tunes, just kidding, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo in nam fugit facilis amet, natus laboriosam voluptatum molestias sapiente iste aliquam reprehenderit vero, autem et? Sunt, sit. Minus, itaque.</p>
                    <p>Now with offices in 4 countries, we hope to connect our clients with exceptional services at an affordable price. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed tempora nulla necessitatibus quae porro dolorum similique dolor tenetur architecto officiis aliquam natus saepe? Dignissimos earum aliquam vero esse maiores!</p>
                </div>
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="passion" />
                </div>
            </div>

            <div className="testimonials">
                <h2>Client testimonies</h2>
            <div className="carousel">
                <FaArrowAltCircleLeft onClick={prevSlide} className="left-btn" size='40'/>
                <FaArrowAltCircleRight onClick={nextSlide} className="right-btn" size='40'/>
                {
                    testimonials.map((testimony, index) => {
                        const {id,name,img,quote,occupation} = testimony
                        
                        return (
                            <div className={index === current ? 'textimonial-container slide-active' : 'textimonial-container slide'} key={id}>
                                <div className="client-quote">
                                    <div className="quote">
                                        <ImQuotesLeft size='50' className='icon'/>
                                        <p><em>{quote}</em></p>
                                    </div>
                                    <div className="client">
                                        <div className="img-container">
                                            <img src={img} alt="" />  
                                        </div>
                                        <div className="col-2">
                                            <h3 className="name">{name}</h3>
                                            <p className="occupation">{occupation}</p>
                                        </div>
                                    </div>                                 
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            </div>
        </StyledAboutPage>

    )
}

export default AboutPage