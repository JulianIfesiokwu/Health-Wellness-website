import StyledAboutPage from "../components/styled/About-Page.styled"

const AboutPage = () => {
    return (
        <StyledAboutPage>
            <div className="heading">
                <h1>A team of professional massage therapists
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
            {/* Your Story (History) */}
            {/* Your Services (And Benefits) */}
            {/* Your Social Proof */}
        </StyledAboutPage>

    )
}

export default AboutPage