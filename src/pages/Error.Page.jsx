import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <h2>Sorry the page you requested does not exist</h2>
        <Link to='/'>back to home</Link>
        </>
    )

}

export default ErrorPage;