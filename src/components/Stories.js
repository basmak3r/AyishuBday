import "../styles/stories.scss"
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story"
import React from "react";


// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


function Storeis()
{
    const myArray = [];  
    for (let index = 0; index < 10; index++) {
        myArray.push(index);
        
    }

    return (
        
        <div  className="stories">



            
            <HorizontalScroll className="scroll" >

            {myArray.map(name => (  
         
                    <Story number={name}/>
            ))}  

            </HorizontalScroll>
        </div>
    )
}


export default Storeis;

