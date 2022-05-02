import ServicesVideo from "../components/Video/ServicesVideo.component"
import ServicesPageStyled from "../components/styled/ServicesPage.styled"
import Button from "../components/styled/Button.styled"
import AllServices from "../components/styled/AllServices.styled"
import { massageTypes } from '../data'
import OneService from "../components/OneService/OneService.component"
import { AiOutlineSearch } from "react-icons/ai";

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
            <div className="filter-controls">
                <div className="price-control">
                    <h3>Search services by filters <AiOutlineSearch className="icon" size='30'/></h3>
                    <input type='range' />
                    <form>
                        <label htmlor='category'>Category:</label>
                        <select name="category" id="category">
                            {allCategories.map((category) => {
                                return (
                                <option value='category'>{category}</option>
                                )
                            })}
                        </select>
                        </form>
                </div>

            </div>
            <div className="listed-services">
                                {massageTypes.map((massage) => {
                    const {id} = massage
                    return (
                        <OneService key={id} massage={massage} />
                    )
                })}

            </div>
        </AllServices>
        </>
    )
}

export default ServicesPage
