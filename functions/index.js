const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const { request, response } = require("express");

const stripe = require('stripe')('sk_test_51I9gAMKlXYLW2Zmf0mJKeMrJMuF8R1XOnr72WyYSo9ko9EbrHR6889c3Io4g9YHnvfb7nm5Y8vGtI5rzkmndOtRa00gFbxETC7')

//API


//App config
const app = express();

// Middlewares
app.use(cors({origin: true}))
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received!! ", total);

    const paymentIntent =  await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    // Went ok and Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

})

// Listen command
exports.api = functions.https.onRequest(app)


//http://localhost:5001/clone-66947/us-central1/api