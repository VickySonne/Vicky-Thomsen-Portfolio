import SectionHeading from "./SectionHeading";

const LandingPage = () => {
    return ( 
        <section className="landing-page section-light">
            <div className="designer">
                <SectionHeading title={"UI/UX Designer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
            </div>
            <img src="xxx" alt="portræt photo af Vicky Sonne Thomsen" />
            <div className="coder">
                <SectionHeading title={"Front-end udvikler"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
            </div>
        </section>
    );
}
 
export default LandingPage;