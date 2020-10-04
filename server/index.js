const express = require("express");
const superagent = require("superagent");

// CORS middleware is required to enable pur client
// to access api-endpoint
const cors = require("cors");

const app = express();
app.use(cors());

const PRODUCT_API_ENDPOINT =
  "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

app.get("/api/product-list", async function (req, res) {
  try {
    console.log("received request");
    const response = await superagent.get(PRODUCT_API_ENDPOINT);
    res.status(200).send(response.text);
  } catch (error) {
    res.send({
      ok: false,
      error: error,
    });
  }
});

app.listen(4000, function () {
  console.log("running on port 4000");
});
