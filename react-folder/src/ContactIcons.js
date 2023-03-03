const ContactIcons = (props) => {
    const {icon, label} = props;
    return (
        <div className="contact-icons">
            <i>{icon}</i>
            <p>{label}</p>
        </div>
    );
}
 
export default ContactIcons;