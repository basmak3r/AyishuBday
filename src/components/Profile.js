import "../styles/profile.scss"
import ProfileIcon from "./ProfileIcon"

function Profile(props)
{
    const{
         username,
         caption,urlText,
         iconSize,
         captionSize,
         storyBorder,
         hideAccountName,
        image,
    }=props;

    let accountName=username?username : "basil"
    return(
        <div className="profile">
            <ProfileIcon  
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}/>
            {(accountName || caption ) && !hideAccountName &&(
                <div className="textContainer">
                        <span className="accountName">
                            {accountName}
                        </span>
                        <span className={`caption ${captionSize}` }>
                            {caption}
                        </span>
                        
                </div>
            )}
            <a href="/">{urlText}</a>
        </div>
    );
}

export default Profile