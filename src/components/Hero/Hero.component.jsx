import BackgroundVideo from "../Video/Video.component";
import StyledHero from "../styled/Hero.styled";
import Button from "../styled/Button.styled";

const Landing = () => {
    return (
        <StyledHero>
        <BackgroundVideo />
        <h1>Your well being is our priority.</h1>
        <p>Schedule a visit or come right in for a personal session with any of our professional massage therapists.</p>
        <Button>Book a Session</Button>
        </StyledHero >
    )

}

export default Landing