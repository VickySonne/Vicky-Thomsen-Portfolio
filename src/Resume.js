import SectionHeading from "./SectionHeading";
import FileSaver from 'file-saver';

const Resume = () => {
    const downloadCv = () => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/cv.pdf",
            "VickySonneThomsenMMD-CV.pdf"
        )
    }
    
    return (
        <section className="section-dark">
            <div className="resume whitespace">
                <SectionHeading title={"resume."} text={"Download mit CV"} />
                <button className="download-cv" onClick={downloadCv}>Download CV</button>
            </div>
        </section>
    );
}
 
export default Resume;