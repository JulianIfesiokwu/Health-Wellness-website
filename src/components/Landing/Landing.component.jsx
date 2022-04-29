import BackgroundVideo from "../Video/Video.component";
import StyledHero from "../styled/Hero.styled";
import Button from "../styled/Button.styled";
import { ImCircleRight } from "react-icons/im";

const Landing = () => {
    return (
        <StyledHero>
        <BackgroundVideo />
        <h1>Your well being is our priority.</h1>
        <p>Schedule or come in for a session with any of our professional massage therapists.</p>
        <Button>Book a Session <ImCircleRight className="icon" /></Button>
        </StyledHero >
    )

}

export default Landing