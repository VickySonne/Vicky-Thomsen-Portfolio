const Lists = (props) => {
    const {array} = props; 
    
    return (
        <div className="lists">
            {array.map((array) => (
              <li key={array.id}>{ array.item }</li>  
            ))}
        </div>
    );
}
 
export default Lists;