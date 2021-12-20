import express from 'express';

const app = express();
app.use(express.json())

app.get("/bot/send", async (req, res, next) => {
  try {
    res.send({message: "Message sent"})
    res.status(200)
  }
  catch(ex) {
    next(ex)
  }
})

app.listen(3000, '0.0.0.0');

console.log("WebScraper is running on port 3000");