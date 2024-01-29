import { useRef, useEffect, useState } from "react";

import SectionHeading from "./SectionHeading";
import AboutImage from "./images/website-about.png";

const About = () => {

    const aboutRef = useRef();
    const [aboutIsVisible, setAboutIsVisible] = useState();

    const options = {
        threshold: 0.90
    };

    const navAbout = document.querySelector('#nav-about');


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setAboutIsVisible(entry.isIntersecting);
            
            if(aboutIsVisible){
                navAbout?.classList.add("active");
            } else {
                navAbout?.classList.remove("active");
            }
        }, options);

        observer.observe(aboutRef.current);
        
    }, [aboutIsVisible, navAbout?.classList, aboutRef, options]);

    return ( 
        <section ref={aboutRef} id="about" className="section-light">
            <div className="about whitespace">
                <div className="about-text">
                    <SectionHeading title={"omMig."} text={"Jeg er en kreativ webdesigner og udvikler med base i Odense"} />
                    <p>Jeg brænder for at kreere moderne, intuitive designs der skaber værdi. Når jeg ikke dykker ned i designuniverset finder du mig sammen med vennerne, igang med at indrette eller til polefitness. </p>
                </div>
                <img className="about-image hide" src={AboutImage} alt="andet portrait af Vicky Sonne Thomsen" />
            </div>
        </section>
    );
}
 
export default About;