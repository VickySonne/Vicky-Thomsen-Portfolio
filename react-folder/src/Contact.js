import SectionHeading from "./SectionHeading";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contact">
            <SectionHeading title={"kontakt."} text={"Kontakt mig via sociale medier, mobil eller email"} />
            <div>
                <a href="https://www.linkedin.com/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color="red" />
                    <p>LinkedIn</p>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/" target="_blank">
                    <FontAwesomeIcon icon={faPhone} color="red" />
                    <p>42 92 36 30</p>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} color="red" />
                    <p>vst1996@live.dk</p>
                </a>
            </div>
        </div>
    );
}
 
export default Contact;