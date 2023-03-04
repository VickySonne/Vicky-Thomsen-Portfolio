import SectionHeading from "./SectionHeading";
import LandingPageImage from "./images/website-frontpage.png"

const LandingPage = () => {
    return ( 
        <section className="landing-page-section section-light">
            <div className="landing-page whitespace">
                <div className="landing-page-text designer">
                    <SectionHeading title={"designer"} text={"UI/UX designer..."} />
                </div>
                {/* <img src={LandingPageImage} alt="portræt photo af Vicky Sonne Thomsen" /> */}
                <div className="landing-page-text coder">
                    <SectionHeading title={"\<koder\>"} text={"Front-end udvikler..."} />  
                </div>
            </div>
        </section>
    );
}
 
export default LandingPage;