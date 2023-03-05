import SectionHeading from "./SectionHeading";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <section>
            <div className="contact whitespace">
                <SectionHeading title={"kontakt."} text={"Kontakt mig via sociale medier, mobil eller email"} />
                <div>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color="red" />
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div>
                    <a href="tel:+4542923630">
                        <FontAwesomeIcon icon={faPhone} color="red" />
                        <p>42 92 36 30</p>
                    </a>
                </div>
                <div>
                    <a href="mailto:vst1996@live.dk">
                        <FontAwesomeIcon icon={faEnvelope} color="red" />
                        <p>vst1996@live.dk</p>
                    </a>
                </div>
            </div>
        </section>
        
    );
}
 
export default Contact;