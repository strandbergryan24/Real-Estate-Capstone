require('dotenv').config();

const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dataBase = require("./models/index");
const routes = require("./routes/index.js");

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use('/login', (req, res, next) => {
    console.log('Incoming request to /login');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Body:', req.body);
    next();
});

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', corsOptions.origin);
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGOURI,
        collectionName: "sessions"
    }),
    cookie: {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use('/', routes)
app.use((req, res)=>{res.status(404).json({message:"This is not a proper route"})});

app.listen(PORT,()=>{console.log("listening on port "+ PORT)})
