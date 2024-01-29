import { useRef, useEffect, useState } from "react";


import SectionHeading from "./SectionHeading";
import {FaEnvelope, FaLinkedinIn, FaPhone} from "react-icons/fa";
import ContactImage from "./images/contact.png"

const Contact = () => {

    const contactRef = useRef();
    const [contactIsVisible, setContactIsVisible] = useState();

    const options = {
        threshold: 0.70
    }

    const navContact = document.querySelector('#nav-contact');


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setContactIsVisible(entry.isIntersecting);
            
            if(contactIsVisible){
                navContact?.classList.add("active");
            } else {
                navContact?.classList.remove("active");
            }
        }, options);

        observer.observe(contactRef.current);
        
    }, [contactIsVisible, navContact?.classList, contactRef, options])

    return (
        <section ref={contactRef} id="contact">
            <div className="contact whitespace">
                <div className="contact-text">
                    <SectionHeading title={"kontakt."} text={"Kontakt mig via sociale medier, mobil eller email"} />
                    <div className="contact-icons">
                        <div className="contact-icon">
                            <a href="https://www.linkedin.com/in/vicky-thomsen-8533ba239/" target="_blank" rel="noreferrer">
                                <div className="icon-circle linkedin-bg-color">
                                    <FaLinkedinIn size="2.5em" color="#FFF" />
                                </div>
                                <p>LinkedIn</p>
                            </a>
                        </div>
                        <div className="contact-icon">
                            <a href="tel:+4542923630">
                                <div className="icon-circle phone-bg-color">
                                    <FaPhone size="2.1em" color="#FFF" />
                                </div>
                                <p>42 92 36 30</p>
                            </a>
                        </div>
                        <div className="contact-icon">
                            <a href="mailto:vst1996@live.dk">
                                <div className="icon-circle email-bg-color">
                                    <FaEnvelope size="2.5em" color="#FFF" />
                                </div>
                                <p>vst1996@live.dk</p>
                            </a>
                        </div>
                    </div>
                </div>
                <img className="contact-image hide" src={ContactImage} alt="Vicky Sonne Thomsen der sidder med sin bærbar klar til at at svare" />
            </div>
        </section>
        
    );
}
 
export default Contact;