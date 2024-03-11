const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const routes = require("./routes/index.js");

require('dotenv').config();

const { PORT } = process.env;

const corsOptions = {
    origin: "https://real-estate-capstone.onrender.com",
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

app.use('/login', (req, res, next) => {
    console.log('Incoming request to /login');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Body:', req.body);
    next();
});

app.use('/', routes)
app.use((req, res)=>{res.status(404).json({message:"This is not a proper route"})});

app.listen(PORT,()=>{console.log("listening on port "+ PORT)})
