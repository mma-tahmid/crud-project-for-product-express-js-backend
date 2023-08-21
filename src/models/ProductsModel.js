const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        ProductName: { type: String },
        ProductCode: { type: String },
        Img: { type: String },
        UnitPrice: { type: String },
        Qty: { type: String },
        TotalPrice: { type: String },
        CreatedDate: { type: Date, default: Date.now() }
    },
    { versionKey: false }
);

const productsModel = mongoose.model('products', productSchema);
module.exports = productsModel;