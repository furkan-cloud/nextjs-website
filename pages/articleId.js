import React, { Fragment } from "react";
import ArticleDetail from "../components/articles/ArticleDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.articleData.title}</title>
        <meta name="description" content={props.articleData.description} />
      </Head>
      <ArticleDetail
        title={props.articleData.title}
        description={props.articleData.description}
        image={props.articleData.image}
      />
    </Fragment>
  );
};

export default index;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const articleCollection = db.collection("articles");

  const articles = await articleCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: articles.map((article) => ({
      params: { articleId: article._id.toString() },
    })),
    // paths: [
    //   {
    //     params: {
    //       articleId: "1",
    //     },
    //   },
    //   {
    //     params: {
    //       articleId: "2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single article

  const articleId = context.params.articleId;

  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const articleCollection = db.collection("articles");

  const selectedArticle = await articleCollection.findOne({
    _id: new ObjectId(articleId),
  });

  client.close();

  console.log("articleId", articleId);

  return {
    props: {
      articleData: {
        id: selectedArticle._id.toString(),
        title: selectedArticle.title,
        image: selectedArticle.image,
        description: selectedArticle.description,
      },
    },
  };
}
