require('dotenv').config()
const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const router = require('./router/index');
const xssClean = require('xss-clean');
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5400;
const app = express()
app.use(cors({
    credentials: true,
    origin : process.env.CLIENT_URL
}));
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"], 
      styleSrc: ["'self'", 'https://stackpath.bootstrapcdn.com' ],
      imgSrc: ["'self'", 'data:'],
      connectSrc: ["'self'", 'https://api.example.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  }));


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 650, // лимит каждого IP до n запросов за окно времени (15 минут)
    message: 'Слишком много запросов с этого IP, пожалуйста, попробуйте позже.'
});

app.use(limiter);
app.use(xssClean());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);
app.use(errorMiddleware);

const start = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();