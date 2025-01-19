import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required :[true, "Name is required"]
    },
    email : {
        type : String,
        required :[true, "Email is required"],
        unique : true
    },
    password : {
        type : String,
        required :[true, "password is required"]
    },
    avatar : {
        type : String,
        required : ""
    },
    mobile : {
        type : Number,
        default : null
    },
    refresh_token : {
        type : String,
        default : ""
    },
    verify_email : {
        type : Boolean,
        default : false
    },
    last_login_date : {
        type : Date,
        default : ""
    },
    status : {
        type : String,
        enum : ["active", "inactive","Suspended"],
        default : "active"
    },
    address_details :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Address'
        }

    ] ,
    Shopping_cart :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'cartProduct'
        }

    ],
    Shopping_cart :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'cartProduct'
        }

    ],
    OrderHistory :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'order'
        }

    ],
    forgot_password_otp :{
        type : String,
        default :null
    },
    forgot_password_expires :{
        type : Date,
        default : ""
    },
    role : {
        type :String,
        enum : ["User", "Admin"],
        default : "User"
    
    },
    updated_at : {
        type : Date,
        default : Date.now
    }


},{
    timestamps : true
})

const UserModel = mongoose.model("User", userSchema)
export default UserModel