const SectionHeading = (props) => {
    const {title, text, hClass} = props;
    return ( 
        <div className="section-heading">
            <h2>{title}</h2>
            <h3 className={hClass}> {text} </h3>
        </div>
    );
}
 
export default SectionHeading;