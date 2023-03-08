import SectionHeading from "./SectionHeading";

const LandingPage = () => {
    return ( 
        <section id="home" className="landing-page-section section-light">
            <div className="landing-page whitespace">
                <div className="landing-page-text designer">
                    <SectionHeading hClass={"hide media-769-show"} title={"designer"} text={"Brugerorienteret UI/UX designer med et skarpt øje for detaljer"} />
                </div>
                <div className="landing-page-text coder">
                    <SectionHeading hClass={"hide media-769-show"} title={"udvikler"} text={"Alsidig og logisk front-end udvikler med passion for moderne teknologier"} />  
                </div>
            </div>
        </section>
    );
}
 
export default LandingPage;