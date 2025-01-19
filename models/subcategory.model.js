import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    },
    category :[
        {
            type : mongoose.Schema.ObjectId,
            ref : "Category"
        }
    ]
},{
    timestamps : true
})

const SubcategoryModel = mongoose.model("Subcategory", subcategorySchema)
export default SubcategoryModel