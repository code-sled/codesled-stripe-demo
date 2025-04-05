require("dotenv").config();
const express = require("express");
const {
  initStripe,
  createCheckoutSession,
} = require("@codesled/stripe-payments");

initStripe(); // uses STRIPE_SECRET_KEY from .env

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Stripe Payment Demo — visit /pay to test.");
});

app.get("/pay", async (req, res) => {
  try {
    const url = await createCheckoutSession({
      priceId: process.env.PRICE_ID,
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel",
      customerEmail: "test@example.com",
      mode: "payment", // or "subscription"
    });

    // Dynamically import open at runtime
    const open = await import("open").then((m) => m.default);
    await open(url); 

    res.redirect(url); // fallback redirect
  } catch (err) {
    console.error(" Stripe error:", err);
    res.status(500).send("Something went wrong.");
  }
});

app.get("/success", (req, res) => {
  res.send(" Payment successful!");
});

app.get("/cancel", (req, res) => {
  res.send(" Payment canceled.");
});

app.listen(PORT, () => {
  console.log(` Demo ready at http://localhost:${PORT}`);
});
