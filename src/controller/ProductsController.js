const productModel = require('../models/ProductsModel');



exports.CreateProduct = async (req, res) => {

    let reqBody = req.body;

    try {

        let result = await productModel.create(reqBody);
        res.status(200).json({ status: "Success", data: result })

    }

    catch (error) {
        res.status(200).json({ status: "Fail", data: error })
    }
}




// R=Read
exports.ReadProduct = async (req, res) => {

    try {
        let result = await productModel.find()
        res.status(200).json({ status: "Success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "Fail", data: error })
    }


}

// R=Read By ID
exports.ReadProductByID = async (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };

    try {
        let result = await productModel.find(Query)
        res.status(200).json({ status: "Success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "Fail", data: error })
    }

}


// U=Update

exports.UpdateProduct = async (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };
    let reqBody = req.body;


    try {
        let result = await productModel.updateOne(Query, reqBody)
        res.status(200).json({ status: "success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "fail", data: error })
    }
}



// D=Delete
exports.DeleteProduct = async (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };

    try {
        let result = await productModel.deleteOne(Query);
        res.status(200).json({ status: "success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "fail", data: error })

    }

}




