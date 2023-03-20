import { useRef, useEffect, useState } from "react";

import Tools from "./Tools"

const Skills = () => {

    const skillsRef = useRef();
    const [skillsIsVisible, setSkillsIsVisible] = useState();

    const options = {
        threshold: 0.90
    }

    const navSkills = document.querySelector('#nav-skills');


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSkillsIsVisible(entry.isIntersecting);

            if(skillsIsVisible){
                navSkills?.classList.add("active");
            } else {
                navSkills?.classList.remove("active");
            }
        }, options);

        observer.observe(skillsRef.current);
        
    }, [skillsIsVisible, navSkills?.classList, skillsRef, options])

    return (
        <section ref={skillsRef} id="skills" className="section-dark">
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