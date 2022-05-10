import React from "react";
import { useForm } from "react-hook-form";
import Button from "../styled/Button.styled";
import StyledFooter from "../styled/Footer.styled";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ImCircleRight } from "react-icons/im";

const Footer = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: ''
        }
    })
    const onSubmit = (data) => { 
        console.log(data)
        reset()
    }

    return (
        <StyledFooter>
            <article className="column">
                <img src="" alt="" />
                <p>Making the world a better place through constructing elegant hierarchies.</p>
                <p>&copy; 2022</p>
                <p className="social"><FaFacebook size='20'/> <FaInstagram size='20'/> <FaTwitter size='20'/> <FaWhatsapp size='20'/></p>
            </article>
            <article className="column">
                <p className="heading">Solutions</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </article>
            <article className="column">
                <p className="heading">Support</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </article>
            <article className="column">
                <p>Subscribe to our latest newspaper and updates</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} placeholder='email address' />
                    <p>{errors.email && 'Enter a valid email address' }</p>
                    <Button type="submit">subscribe <ImCircleRight className="icon"/></Button>
                    
                </form>
            </article>

        </StyledFooter>
    )
}

export default Footer;