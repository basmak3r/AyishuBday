import "../styles/profileicon.scss"



function ProfileIcon(props){
    const {iconSize,storyBorder,image}=props;


    let randomID=2;
    let profileImage=image? image:`http://i.pravatar.cc/150?img=${randomID}`;
    


    return (
        <div className={storyBorder  ? "storyBorder" : "" }>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profileimage"/>
        </div>
    )
}

export default ProfileIcon;