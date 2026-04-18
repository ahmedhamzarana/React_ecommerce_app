const express = require('express');
require('./connection');
const User = require('./models/users');
const app = express();

app.use(express.json());

const UserRouter = express.Router();

UserRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.use('/users', UserRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
