import React from "react";
import StyledContact from "../styled/Contact.styled";
import Button from "../styled/Button.styled";
import { MdEmail,MdLocationOn,MdSchedule } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImCircleRight } from "react-icons/im";
import  { useForm } from 'react-hook-form'

const Contact = () => {
    const { register, handleSubmit, reset, formState : { errors }} = useForm()

    const onSubmit = (data) => { 
        console.log(data)
        reset()
    }

    return (
        <>
        <StyledContact>
            <div className="address">
                <p><AiFillPhone size='30' className="icon"/> 0984537278623</p>
                <p><MdEmail size='25' className="icon"/> ourCompanyEmail@gmail.com</p>
                <p><MdLocationOn size='25' className="icon"/> 175 5th Ave, New York, NY 10010 United States</p>
                <p><MdSchedule size='25' className="icon"/> 9 AM - 5:30 PM</p>
                <p>Open: Weekdays</p>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Get in Touch</h3>
                <article className="row">
                    <div className="col-1">
                        <input {...register('name', { required: true })} placeholder="name"/>
                        <p className="error-message">{errors.name && 'Please fill a name' }</p>
                    </div>
                    <div className="col-2">
                        <input {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} placeholder="email"/>
                        <p className="error-message">{errors.email && 'Enter a valid email address' }</p>
                    </div>
                </article>
                <article className="row">
                    <div className="col-3">
                        <input {...register('subject', { required: true})} placeholder="subject"/>
                    </div>
                </article>
                <textarea 
                rows='6' 
                {...register('message', { required: true, minLength: 5  })}
                placeholder='Your message here...' ></textarea>
                <p className="error-message">{errors.email && 'Please state your inquiry' }</p>
                <Button type="submit">Send <ImCircleRight className="icon" /></Button>
            </form>
        </StyledContact>
        </>
    )
}

export default Contact