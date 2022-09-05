import { MongoClient } from "mongodb";
//api/new-meet-up

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_CLUSTER);
    const db = client.db();

    const meetupsCollection = db.collection("meetup");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close().then();

    res.status(201).json({ message: "meetup inserted" });
  }
};

export default handler;
