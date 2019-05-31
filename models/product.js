//定义上传商品字段
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema({
    title:{type:String,required:true},
    pic:String,
    price:Number,
    fee:Number,
    description:String,
    creatAt:{type:Date,default:Date.now()},
    updateAt:{type:Date,default:Date.now()}
});

//指定数据中的存储集合mongoose
const product=mongoose.model("product",productSchema);

//暴露模块
module.exports=product;