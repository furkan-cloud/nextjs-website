import React, { Fragment } from "react";
import NewArticle from "../../components/articles/NewArticle";
import { useRouter } from "next/router";
import Head from "next/head";

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

  return (
    <Fragment>
      <Head>
        <title>Add new article</title>
        <meta name="description" content="Add articles about IT" />
      </Head>
      <NewArticle onAddArticle={addArticleHandler} />
    </Fragment>
  );
};

export default NewArticlePage;
