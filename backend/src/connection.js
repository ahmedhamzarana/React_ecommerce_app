const monggose = require('mongoose');

const connectDB = async () => {
    try {
        await monggose.connect('mongodb://localhost:27017/e_commerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;