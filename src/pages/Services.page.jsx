import StyledServices from "../components/styled/Services.styled"
import ServicesVideo from "../components/Video/ServicesVideo.component"
import ServicesPageStyled from "../components/styled/ServicesPage.styled"
import Button from "../components/styled/Button.styled"

const ServicesPage = () => {
    return (
        <ServicesPageStyled>
        <ServicesVideo />
        <h1>Explore a wide range of affordable services.</h1>
        <p>Schedule your session with any of our massage therapists either on site or in your home.</p>
        <Button>Lets GO!</Button>
        </ServicesPageStyled>
    )
}

export default ServicesPage
