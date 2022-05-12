import { useState } from "react"
import Button from "../styled/Button.styled"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const OneService = ({massage}) => {
    const {name,id,img,duration,available,type,desc,price} = massage
    const numberFormatter = Intl.NumberFormat('en-US');

    const [showText, setShowText] = useState(false)
    const expandText = () => {
    setShowText(!showText)
    }

    return (
        <motion.div layout className="service-card" key={id}>
            <div className="img-container">
                <img src={img} alt={name} loading='lazy' />
            </div>
        <div className="details">
            <h4>{name}</h4>
            <p>Max-duration: {duration} hour(s)</p>
            <p>Locations available: <br /><b>{available.join(" & ").toUpperCase()}</b></p>
            <p className="massage-type">{type.toUpperCase()}</p>
            <p className="description">{showText ? desc : desc.slice(0, 200).concat('...  ') }  {<button onClick={() => expandText()}> {showText ? 'Show Less' : 'Read More...'}</button>}</p>
            <p className="price">&#8358;{numberFormatter.format(price)}</p>
            <Link to='/sessions'><Button className="schedule-btn">Schedule</Button></Link>
        </div>
    </motion.div>
    )
}

export default OneService