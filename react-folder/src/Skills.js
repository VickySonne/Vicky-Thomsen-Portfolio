import Tools from "./Tools";

const Skills = () => {
    return ( 
        <div className="skills section-dark">
            <h2>kompetencer.</h2>
            <div className="tools">
                <Tools tool="HTML 5"/>
                <Tools tool="CSS 3"/>
                <Tools tool="JavaScript"/>
                <Tools tool="React"/>
                <Tools tool="Vue"/>
                <Tools tool="Wordpress"/>
                <Tools tool="Adobe XD"/>
                <Tools tool="Github"/>
            </div>
        </div>
    );
}
 
export default Skills;