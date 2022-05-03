import ServicesVideo from "../components/Video/ServicesVideo.component"
import ServicesPageStyled from "../components/styled/ServicesPage.styled"
import Button from "../components/styled/Button.styled"
import AllServices from "../components/styled/AllServices.styled"
import { massageTypes } from '../data'
import OneService from "../components/OneService/OneService.component"
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react"

const allCategories = ['all', ...new Set(massageTypes.map((massage) => massage.type))]

const ServicesPage = () => {
    
    const [categories, setCategories] = useState(allCategories)
    const [services, setServices] = useState(massageTypes)
    
    const filterServices = (type) => {
        if(type==='all') {
            setServices(massageTypes)
            return
        }
        const newServices = massageTypes.filter((service) => service.type === type)
        setServices(newServices)
    }

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
                    {/* <form>
                        <label htmlFor='category'>Category: </label>
                        <select name="category" id="category">
                            {allCategories.map((category) => {
                                return (
                                <option className="category" key={category} onClick={() => filterServices(type)}>{category.toUpperCase()}</option>
                                )
                            })}
                        </select>
                    </form> */}
                    {allCategories.map((category) => {
                        return (
                            <button onClick={() => filterServices(category)} key={category}>{category}</button>
                        )
                    })}
                </div>

            </div>
            <div className="listed-services">
                {services.map((massage) => {
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
