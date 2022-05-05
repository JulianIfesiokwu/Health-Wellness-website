import React from "react";
import Button from "../styled/Button.styled";
import StyledSession from "../styled/Session.styled";
import { Link } from "react-router-dom";

const Session = () => {
    return (
        <StyledSession>
            <h2 className="title">A little rest never hurt anybody, especially one with a happy ending.</h2>
            <p className="more">Why I say old chap that is, spiffing off his nut cor blimey guvnords geeza
                bloke knees up bobby, sloshed arse William cack Richard. Bloke fanny around chesed of bum bag old lost the pilot say there spiffing off his nut.
            </p>
            <Link to='/sessions'><Button>Available sessions</Button></Link>

        </StyledSession>
    )
}

export default Session
