const express = require('express');
const path = require('path');
const formidable = require('formidable');
const product=require("../models/product");
const router = express.Router();
var arr = [];

router.get("/", function (req, res) {
    res.render("add");
})

router.post('/', function (req, res) {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        //保存数据
        var obj = {
            ...fields,
            pic: "/" + path.basename(files.pic.path),
            date: new Date()
        }
        var productIstance=new product(obj);//集合的实例  一个文档  一条数据
        productIstance.save();//保存数据
        // productIstance.save(function(err){
        //     if(err) throw err;
        //     console.log("保存成功");
        // })
    
        res.redirect('/add/list');
        // res.redirect('/add/list');
        // res.end('success');
    })
})

router.get('/list', function (req, res) {
    product.find({},function(err,results){
        if(err) throw err;
        res.render("list",{arr:results})
    })
})

module.exports = router;