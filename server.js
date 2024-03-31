const express = require("express");
const cors = require("cors");
const swaggerjsdoc = require( "swagger-jsdoc" );
const swaggerui = require( "swagger-ui-express" ) ;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const hotelRoute = require("./Routes/hotelRoute.js");
const roomRoute = require("./Routes/roomRoute.js");
const customerRoute = require("./Routes/customerRoute.js");
const bookingRoute = require("./Routes/bookingRoute.js");




//Connect Database
dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connect to database success");
})
.catch(err => console.error('Error connecting to MongoDB:', err));



app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));



// //Routes
const option = {
    definition:{
        openapi:"3.0.1",
        info:{
            title:"Hotel Management System API",
            version:"0.1"
        },
        description:"",
        contact:{
            name:"Hồng Sơn",
            url:"sonph.com",
            
            email:"phamhongson1107@gmail.com"
        },
        servers:[
                    {
                         url:"http://localhost:8000/"
                     },
                ]
    },
    apis:[
        "./Routes/hotelRoute.js",
        "./Routes/roomRoute.js",
        "./Routes/customerRoute.js",
        "./Routes/bookingRoute.js"
    ],
};
const spacs = swaggerjsdoc(option)
app.use("/api-docs",swaggerui.serve,swaggerui.setup(spacs))
app.use("/hotel",hotelRoute);
app.use("/hotel",roomRoute); 
app.use("/hotel",bookingRoute);
app.use("/hotel",customerRoute); //Use /v1 for


// app.use("/hotel",()=>{
//     console.log("hello")
// })


app.listen(8000, () => {
    console.log("Server is running...");
});

