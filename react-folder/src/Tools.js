const Tools = (props) => {
    const {array} = props; 
    
    return (
        <div className="tools">
            {array.map((array) => (
                <div className="tool">
                    <p className={ array.cName } key={ array.id }>{ array.item }</p>
                </div>
            ))}
            <div className="tool empty-box">
                <p>empty-box</p>
            </div>
        </div>
    );
}
 
export default Tools;