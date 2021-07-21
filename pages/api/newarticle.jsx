import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("dataa", data);
    const { title, description, image } = data;

    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();

    const articleCollection = db.collection("articles");

    const result = await articleCollection.insertOne(data);

    console.log("result", result);

    client.close();

    res.status(201).json({ message: "Article added!" });
  }
}

export default handler;
