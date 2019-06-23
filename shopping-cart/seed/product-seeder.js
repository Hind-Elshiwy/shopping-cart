var Product =require('../models/product');

var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping" ,{useNewUrlParser: true});

var products =[ 
    new Product({
        imagePath :'http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg',
        imagePaths :'http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg',
        title : 'Fashion',
        description : 'A product description is the marketing ',      
        price :10
        }),

    new Product({
        imagePath :'http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg',
        imagePaths :'http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg',
        title : 'victoria',
        description : 'A product description is the marketing ',      
        price :10
        }),

    new Product({
        imagePath :'http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg',
        imagePaths :'http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg',
        title : 'love bink',
        description : 'A product description is the marketing ',      
        price :10
        }),
    new Product({
        imagePath :'http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg',
        imagePaths :'http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg',
        title : 'Nike',
        description : 'A product description is the marketing ',   
        price :10
   
        }),

    new Product({
        imagePath :'http://bestjquery.com/tutorial/product-grid/demo4/images/img-5.jpg',
        imagePaths :'http://bestjquery.com/tutorial/product-grid/demo4/images/img-6.jpg',
        title : 'cloths for girls',
        description : 'A product description is the marketing ',    
        price :10
   
        }),
        new Product({
            imagePath :'http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg',
            imagePaths :'http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg',
            title : 'Fashion',
            description : 'A product description is the marketing ',      
            price :10
            }),
    
        new Product({
            imagePath :'http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg',
            imagePaths :'http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg',
            title : 'victoria',
            description : 'A product description is the marketing ',      
            price :10
            }),

    new Product({
        imagePath :'http://bestjquery.com/tutorial/product-grid/demo4/images/img-3.jpg',
        imagePaths :'http://bestjquery.com/tutorial/product-grid/demo4/images/img-4.jpg',
        title : 'clothes',
        description : 'A product description is the marketing ',
        price :10
        })
];


var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}