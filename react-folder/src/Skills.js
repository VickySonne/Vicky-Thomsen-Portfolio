import Tools from "./Tools"

const Skills = () => {
    return (
        <section id="skills" className="section-dark">
            <div className="skills whitespace">
                <h2>kompetencer.</h2>
                <div className="tools-list">
                <Tools array={[
                        {item: "HTML 5", cName: "html", id:1}, 
                        {item: "CSS 3", cName: "css", id:2}, 
                        {item: "JavaScript", cName: "js", id:3}, 
                        {item: "React", cName: "react", id:4}, 
                        {item: "Vue", cName: "vue", id:5},
                        {item: "Wordpress", cName: "wp", id:6}, 
                        {item: "Adobe XD", cName: "xd", id:7}, 
                        {item: "Github", cName: "github", id:8},
                    ]}/>
                </div>
            </div>
        </section>
        
    );
}
 
export default Skills;