const SectionHeading = (props) => {
    const {title, text} = props;
    return ( 
        <div className="section-heading">
            <h2>{title}</h2>
            <h3>{text}</h3>
        </div>
    );
}
 
export default SectionHeading;