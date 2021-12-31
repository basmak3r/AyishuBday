import "../styles/stories.scss"
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story"
import React from "react";
import H from "../images/Story/H.gif"
import A from "../images/Story/A.gif"
import B from "../images/Story/B.gif"
import D from "../images/Story/D.gif"
import I from "../images/Story/I.gif"
import P  from "../images/Story/P.gif"
import R from "../images/Story/R.gif"
import T  from "../images/Story/T.gif"
import Y from "../images/Story/Y.gif"
import F from "../images/Story/F.gif"



// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


function Storeis()
{
    const myArray = [];  
    for (let index = 0; index < 10; index++) {
        myArray.push(index);
        
    }

    return (
        
        <div  className="stories">



            
            <HorizontalScroll className="scroll" reverseScroll={true} >

            {/* {myArray.map(name => (  
         
                    <Story number={name} image={`H${name}`} />
            ))}   */}
            <Story name="H" image={H}/>
            <Story name="A" image={A}/>
            <Story name="P" image={P}/>
            <Story name="P" image={P}/>
            <Story name="Y" image={Y}/>
            <Story name="H" image={F}/>
            <Story name="B" image={B}/>
            <Story name="I" image={I}/>
            <Story name="R" image={R}/>
            <Story name="T" image={T}/>
            <Story name="H" image={H}/>
            <Story name="D" image={D}/>
            <Story name="A" image={A}/>
            <Story name="Y" image={Y}/>

            </HorizontalScroll>
        </div>
    )
}


export default Storeis;

