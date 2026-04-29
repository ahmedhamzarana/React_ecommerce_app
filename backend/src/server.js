const express = require('express');
const cors = require('cors')
require('dotenv').config({path: __dirname + '/.env'});
const connectDB =require('./config/conn');

const authRoutes =require('./routes/authRoutes');
const usersRoutes =require('./routes/usersRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();


app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
