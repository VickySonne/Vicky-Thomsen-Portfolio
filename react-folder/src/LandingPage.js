import SectionHeading from "./SectionHeading";

const LandingPage = () => {
    return ( 
        <section id="home" className="landing-page-section section-light">
            <div className="landing-page whitespace">
                <div className="landing-page-text designer">
                    <SectionHeading title={"designer"} text={"Part UI/UX designer..."} />
                </div>
                <div className="landing-page-text coder">
                    <SectionHeading title={"\<koder\>"} text={"Part Front-end udvikler..."} />  
                </div>
            </div>
        </section>
    );
}
 
export default LandingPage;