import SectionHeading from "./SectionHeading";
import AboutImage from "./images/website-about.png"

const About = () => {
    return ( 
        <section id="about" className="section-light">
            <div className="about whitespace">
                <div className="about-text">
                    <SectionHeading title={"omMig."} text={"Jeg er en kreativ webdesigner og udvikler med base i Odense"} />
                    <p>Jeg brænder for at kreere moderne, intuitive designs der skaber værdi. Når jeg ikke dykker ned i designuniverset finder du mig sammen med vennerne, igang med at indrette eller til polefitness. </p>
                </div>
                <img className="about-image" src={AboutImage} alt="andet portrait af Vicky Sonne Thomsen" />
            </div>
        </section>
    );
}
 
export default About;