const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://nodedb_user:4uR13GgQRF9cnBCY@node.ie3cr7m.mongodb.net/";
const client = new MongoClient(URI);
const database = "Home";
async function main() {
    await client.connect();
    console.log("connected succesfully to server");
    const db = client.db(database);
    const collection = db.collection("User");
    // insert Data
    const data = {
        firstname:"Ajay",
        lastname:"Thakue",
        city:"chandigarh"
    }
    const insertResult = await collection.insertOne(data);
    // Get data
    const findResult = await collection.find({}).toArray();
    console.log('Data Get ', findResult);
    return "done";
}
main().then((message) => console.log('connected message ', message)).catch((error) => console.log('connection error ', error)).finally(()=>client.close);