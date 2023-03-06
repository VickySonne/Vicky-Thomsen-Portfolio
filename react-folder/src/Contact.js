import SectionHeading from "./SectionHeading";
import {FaEnvelope} from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact whitespace">
                <SectionHeading title={"kontakt."} text={"Kontakt mig via sociale medier, mobil eller email"} />
                <div>
                    <a href="https://www.linkedin.com/" target="_blank">
                        
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div>
                    <a href="tel:+4542923630">
                        
                        <p>42 92 36 30</p>
                    </a>
                </div>
                <div>
                    <FaEnvelope />
                    <a href="mailto:vst1996@live.dk">
                        
                        <p>vst1996@live.dk</p>
                    </a>
                </div>
            </div>
        </section>
        
    );
}
 
export default Contact;