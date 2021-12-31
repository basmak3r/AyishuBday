import "../styles/cards.scss"
import Stories from "./Stories"
import Card from "./Card"
import image from "../images/dp.JPG"
import Post from "../data/Post"


function Cards()
{
    const myArray = []; 
    for (let index = 0; index < 2; index++) {
        myArray.push(index);
        
    }


    
    
    return (
        <div  className="cards">
            <div className="card1">
            <Stories/>
            </div>
            <div className="card2">

            {myArray.map(number => (  
         
         <Card 
         accountName={Post[number].accountName} 
         comments={Post[number].comments}
         storyBorder={Post[number].storyBorder}
        image={image}
        likedByText={Post[number].likedByText}
        likedByNumber={Post[number].likedByNumber}
        hours={Post[number].hours}
        post={Post[number].post}
        profile={image}
          />
 ))}  
            {/* <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image={image}
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
        post={Post[0].post}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      /> */}
</div>
        </div>
    )
}

export default Cards;