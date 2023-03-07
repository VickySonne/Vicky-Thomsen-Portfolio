import SectionHeading from "./SectionHeading";

const LandingPage = () => {
    return ( 
        <section id="home" className="landing-page-section section-light">
            <div className="landing-page whitespace">
                <div className="landing-page-text designer">
                    <SectionHeading title={"designer"} text={"På den ene side brugerorienteret UI/UX designer og konceptudvikler"} />
                </div>
                <div className="landing-page-text coder">
                    <SectionHeading title={"udvikler"} text={"På den anden side alsidig og logisk Front-end udvikler"} />  
                </div>
            </div>
        </section>
    );
}
 
export default LandingPage;