import SectionHeading from "./SectionHeading";

const Resume = () => {
    return (
        <section className="section-dark">
            <div className="resume whitespace">
                <SectionHeading title={"resume."} text={"Download mit CV"} />
                <button>Download</button>
            </div>
        </section>
    );
}
 
export default Resume;