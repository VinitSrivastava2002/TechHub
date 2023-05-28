/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const serviceAccount = require("./config.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

const express = require("express");
const app = express();
const db = firebase.firestore();
const cors = require("cors");

app.use(cors({origin: true}));

app.get("/techubtest", (request, response)=> {
  const name = request.body.name;
  const description = request.body.description;
  const category = request.body.category;
  const images = request.body.images;
  const client = request.body.client;
  const date = request.body.date;
  const projectUrl = request.body.projectUrl;
  db.collection("projects").doc("collection1").set({
    name: name,
    description: description,
    category: category,
    images: images,
    client: client,
    date: date,
    projectUrl: projectUrl,
  })
      .then(() => {
        return response.status(200).send("Data added");
      })
      .catch((error) => {
        return response.status(200).send("Fail to add ");
      });
});

app.get("/read-project", (request, response) =>{
  const collectionId = request.body.collection;
  const docRef = db.collection("projects").doc(collectionId);

  docRef.get().then((doc) => {
    if (doc.exists) {
      return response.status(200).send(doc.data());
    } else {
      return response.status(200).send("No such project");
    }
  }).catch((error) => {
    return response.status(200).send("Failed to get data");
  });
});

app.get("/delete-data", (request, response)=>{
  const collectionId = request.body.collection;
  const docRef = db.collection("projects").doc(collectionId);
  docRef.delete().then(() => {
    return response.status(200).send("Deleted succesfully");
  }).catch((error) => {
    return response.status(200).send("Failed to delete");
  });
});

exports.techhub = functions.https.onRequest(app);
