import ServicesVideo from "../components/Video/ServicesVideo.component"
import ServicesPageStyled from "../components/styled/ServicesPage.styled"
import Button from "../components/styled/Button.styled"
import AllServices from "../components/styled/AllServices.styled"
import { massageTypes } from '../data'

const ServicesPage = () => {
    return (
        <>
        <ServicesPageStyled>
        <ServicesVideo />
        <h1>Explore a wide range of affordable services.</h1>
        <p>Schedule your session with any of our massage therapists either on site or in your home.</p>
        <Button>Lets GO!</Button>
        </ServicesPageStyled>
        <AllServices>
            {massageTypes.map((massage) => {
                const {name,id,img,duration,available,type} = massage
                return (
                    <div className="service-card" key={id}>
                        <div className="img-container">
                            <img src={img} alt={name} />
                        </div>
                        <div className="details">
                            <h4>{name}</h4>
                            <p>{duration} hours</p>
                            <p>{available}</p>
                            <p>{type}</p>

                        </div>
                    </div>
                )
            })}
        </AllServices>
        </>
    )
}

export default ServicesPage
