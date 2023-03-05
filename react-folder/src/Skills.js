import Lists from "./Lists";

const Skills = () => {
    return (
        <section className="section-dark">
            <div className="skills whitespace">
                <h2>kompetencer.</h2>
                <div className="tools">
                <Lists array={[
                        {item: "HTML 5", id:1}, 
                        {item: "CSS 3", id:2}, 
                        {item: "JavaScript", id:3}, 
                        {item: "React", id:4}, 
                        {item: "Vue", id:5},
                        {item: "Wordpress", id:6}, 
                        {item: "Adobe XD", id:7}, 
                        {item: "Github", id:8},
                    ]}/>
                </div>
            </div>

        </section>
        
    );
}
 
export default Skills;