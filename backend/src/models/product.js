const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type:String, required: true, minLenght },
        description:  { type:String, required: true },
        
    }
)