import "../styles/story.scss"
import ProfileIcon from "./ProfileIcon";
import users from "../data/user";

import Dp from "../images/dp.JPG"

function Story(props)
{
    const {number}=props;
    let accountName=users[number].username;

    if (accountName.length>10){
        accountName=accountName.substring(0,10)+"...";
    }

    return (
        <div  className="story">
            <ProfileIcon iconSize="big" image={Dp} storyBorder={true}/>
            <span className="accountName">{accountName}</span>
        </div>
    )
}

export default Story;