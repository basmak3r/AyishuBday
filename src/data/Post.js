import p1 from "../images/Post/1.jpg"
import p2 from "../images/Post/2.JPG"




import d2 from "../images/dp/2.JPG"

const commentsOne = [
    {
      user: "a_k_menon",
      text: "Enike Thinade irine kayikada 😒",
      id: 1,
    },
  ];

  const commentsTwo = [
    {
      user: "_the_fallen.mist",
      text: "U 2 guys ente opam nine pic iduthilalo",
      id: 4,
    },
    {
      user: "rohit_georgergt8",
      text: "#pavam_chair_oppam",
      id: 4,
    },
  ];

  // const commentsThree = [
  //   {
  //     user: "dadatlacak",
  //     text: "Love this!",
  //     id: 5,
  //   },
  // ];

const Post = [
    {
        accountName:"kaju katli",
        storyBorder:false,
        comments:commentsOne,
        likedByText:"sumayya_navas_",
        likedByNumber:89,
        image:p1,
        dp:p1,
        hours:"DECEMBER 22, 2021",
        post:"Ayishu chelathe namale aghrakium athe pakshe namale aghraikandavthe kittanam ila",
        post1:`ninode njan ithe kondu varan parnjila paskhe nee ithe kodu vanile kore naaaley aghrikanu kayikan..... kazhichila! pakshe nee arinju konduvanile Thank u da🥰 `
      
    },

    {
      accountName:"ieeefisatsb",
      storyBorder:false,
      comments:commentsTwo,
      likedByText:"dev_nandan__",
      likedByNumber:200,
      image:p2,
      dp:d2,
      hours:"DECEMBER 5, 2021",
      post:"Ayishu chelathe namale aghrakium athe pakshe namale aghraikandavthe kittanam ila",
      post1:`ninode njan ithe kondu varan parnjila paskhe nee ithe kodu vanile kore naaaley aghrikanu kayikan..... kazhichila! pakshe nee arinju konduvanile Thank u da🥰 `
    
      },
  ];
  
  export default Post;