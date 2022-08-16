const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/post.js");
const eventRoute = require("./routes/event.js");
const cors = require("cors");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/events", eventRoute);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running.");
});
