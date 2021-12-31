import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment"; 
import { Collapse } from "react-collapse";
import { useState } from "react";




function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
    post,profile,
    accountName,post1
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} username={accountName} image={profile}/>
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        {/* <Profile iconSize="small" hideAccountName={true} /> */}
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="content">
        <span>
        <strong>{accountName}</strong>{" "} {post}
        <a  onClick={() => setOpen( !open )}>
          <Collapse isOpened={!open}>
          See more</Collapse></a>
        <Collapse isOpened={open}>
        <div>
           
             {post1} <a   onClick={() => setOpen( !open )}>
          <Collapse isOpened={open}>
          See less</Collapse></a>         
        </div>
       
      </Collapse>
      </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} </div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
}

export default Card;