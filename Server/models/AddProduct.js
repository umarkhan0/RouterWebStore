import mongoose from 'mongoose';

const AddProduct = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        discription: {
            type: String,  
        },
        price: {
            type: Number,
        },
        firstImage: {
            type: String,
        },
        secondImage: {
            type: String,
        },
        thirdImage: {
            type: String
        },
        rating: {
            type: Number,
            
        }
    },
    {
        timestamps: true,
    }
);


const AddProducts = mongoose.model('AddProducts', AddProduct);

export default AddProducts;
