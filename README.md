# CodeSled Stripe Demo

This is a simple Node.js demo app using [`@codesled/stripe-payments`](https://www.npmjs.com/package/@codesled/stripe-payments) to create a working Stripe Checkout session with minimal setup.

## 🔧 Requirements

- Node.js (v18+)
- Stripe test secret key
- A Stripe Price ID

## 🚀 Getting Started

1. Clone this repo:

```bash
git clone https://github.com/code-sled/codesled-stripe-demo.git
cd codesled-stripe-demo
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
STRIPE_SECRET_KEY=sk_test_...
PRICE_ID=price_...
```

4. Run the server:

```bash
node server.js
```

5. Open [http://localhost:3000/pay](http://localhost:3000/pay) to test Stripe Checkout

## 🧠 What This Uses

- [`@codesled/stripe-payments`](https://www.npmjs.com/package/@codesled/stripe-payments)
- `express`
- `dotenv`
- `open` (auto-launch Stripe Checkout in browser)

## 🧪 Test Cards

Use test card: `4242 4242 4242 4242` (any future expiry + any CVC)

## 🏁 Success

After checkout, you’ll be redirected to `/success` or `/cancel`.

## 🧼 License

MIT — free to use, modify, share.

---

> Built by [CodeSled](https://codesled.com) 🛷

