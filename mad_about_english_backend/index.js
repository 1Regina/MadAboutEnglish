const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cors(corsOptions));
// app.use(express.static(path.join(__dirname, 'public')));
const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

// routes middleware
app.use('/api', contactRoutes);


const port = process.env.PORT || 5000; // nodejs env we get process to run itconst port = 8001;

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree"] });
// });


app.listen(port, () => console.log("Server started on port 5000"))
