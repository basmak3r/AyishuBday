import "../styles/suggestions.scss"
import Profile from "./Profile";
import image  from "../images/dp.JPG"


function Suggestions()
{
    return(
        <div className="suggestions">
                  <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={image}
      />
      <Profile
        caption="Followed by dadatlacak + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        image={image}
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        image={image}
      />
      <Profile
        caption="Followed by dadatlacak + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={image}
      />
      <Profile
        caption="Followed by mapvault + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        image={image}
      />
    </div>


    )
}

export default Suggestions;






