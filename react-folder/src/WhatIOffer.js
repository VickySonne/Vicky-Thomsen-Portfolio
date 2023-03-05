import Lists from "./Lists";
import PieChart from "./images/pie-chart.png"

const WhatIOffer = () => {
    return ( 
        <section className="section-dark">
            <div className="what-i-offer whitespace">
                <h2>jegTilbyder.</h2>
                <div className="what-i-offer-lists">
                    <div className="part-designer">
                        <h3>UI/UX Design</h3>
                        <Lists array={[
                            {item: "Brugerundersøgelser", id:1}, 
                            {item: "Indholdsstrategi", id:2}, 
                            {item: "Prototyping", id:3}, 
                            {item: "Design Thinking", id:4}, 
                            {item: "Koncept Udvikling", id:5},
                        ]}/>
                    </div>
                    <img src={PieChart} alt="pie-chart der illustrere hvad jeg tilbyder, en tredjedel front-end udvikling, to tredjedele UI/UX design og konceptudvikling" />
                    <div className="part-coder">
                        <h3>Front-end Udvikling</h3>
                        <Lists array={[
                            {item: "\<clean code/\>", id:1}, 
                            {item: "CSS Animation", id:2}, 
                            {item: "Logical Thinking", id:3}, 
                            {item: "SEO", id:4}, 
                            {item: "Attention to detail", id:5},
                        ]}/>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
 
export default WhatIOffer;