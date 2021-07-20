import React from "react";
import NewArticle from "../../components/articles/NewArticle";
import { useRouter } from "next/router";

const NewArticlePage = () => {
  const router = useRouter();

  async function addArticleHandler(enteredArticleData) {
    console.log(enteredArticleData);
    const response = await fetch("/api/newarticle", {
      method: "POST",
      body: JSON.stringify(enteredArticleData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();

    console.log("data", data);

    router.push("/");
  }

  return <NewArticle onAddArticle={addArticleHandler} />;
};

export default NewArticlePage;
