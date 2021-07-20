import React from "react";
import ArticleList from "../components/articles/ArticleList";

const DUMMY_ARTICLES = [
  {
    id: "1",
    title: "How to deploy your MERN app to heroku",
    image:
      "https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/rasptjnaprtkzys4tbbu.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quidem consequuntur accusantium quos minus, debitis ex. Natus enim illum, ut molestias deserunt fuga culpa rerum necessitatibus unde? Mollitia autem beatae eius voluptatum nulla officiis sint laudantium nihil voluptas alias ex sapiente, suscipit voluptatibus inventore iure fuga doloremque ipsa totam.",
  },
  {
    id: "2",
    title: "How to deploy your React app to heroku",
    image:
      "https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/rasptjnaprtkzys4tbbu.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quidem consequuntur accusantium quos minus, debitis ex. Natus enim illum, ut molestias deserunt fuga culpa rerum necessitatibus unde? Mollitia autem beatae eius voluptatum nulla officiis sint laudantium nihil voluptas alias ex sapiente, suscipit voluptatibus inventore iure fuga doloremque ipsa totam.",
  },
];

const HomePage = () => {
  return <ArticleList articles={DUMMY_ARTICLES} />;
};

export default HomePage;
