import { useState } from "react"
import Button from "../styled/Button.styled"

const OneService = ({massage}) => {
    const {name,id,img,duration,available,type,desc} = massage
    const [showText, setShowText] = useState(false)
    const expandText = () => {
    setShowText(!showText)
    }

    return (
        <div className="service-card" key={id}>
            <div className="img-container">
                <img src={img} alt={name} />
            </div>
        <div className="details">
            <h4>{name}</h4>
            <p>Max-duration: {duration} hour(s)</p>
            <p>Locations available: {available}</p>
            <p className="massage-type">{type.toUpperCase()}</p>
            <p>{showText ? desc : desc.slice(0, 200).concat('...  ') }{<button onClick={() => expandText()}> {showText ? 'Show Less' : 'Read More...'}</button>}</p>
            <Button>Schedule</Button>
        </div>
    </div>
    )
}

export default OneService