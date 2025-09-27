// Go to MongoDB and create a M0 cluster
// Get the compass connection string
// Install Mongo DB compass

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://NamasteNode:rxAr6tEwnNYBBV56@namastenode.08pmfrn.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  // Referencing the database and getting the databas
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Lionel",
    lastName: "Messi",
    city: "Rosario",
    country: "Argentina",
  };

  // Insert documents
  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>", insertResult);

  // Read documents
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // Update documents
  const updateResult = await collection.updateOne(
    { firstName: "Cristiano" },
    { $set: { firstName: "CR" } }
  );
  console.log("Updated documents =>", updateResult);

  // Count documents
  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the user collection =>", countResult);

  // Find all documents with a filter of lastName: Ronaldo
  const result = await collection.find({ lastName: "Ronaldo" }).toArray();
  console.log("Result =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
