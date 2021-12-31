import "../styles/sidebar.scss"
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestion from "./Suggestions";
import Footer from "./Footer";
import image from "../images/dp.JPG"



function Sidebar()
{
    return (
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile username="halo" caption="aaa" urlText="Switch" image={image} iconSize="big"       />
                
                <Suggestion/>
                <Footer/>
                </div>
            </Sticky>


    )
}

export default Sidebar;