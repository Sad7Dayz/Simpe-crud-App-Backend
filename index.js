/**
 * Index.js 페이지
 */

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

/**
 * 미들웨이설정
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoute);

/**
 * Rest Api Get
 * 메인페이지 localhost:3000
 *  @req : 요청
 *  @res : 응답
 */
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

/**
 * 몽구스 DB 연결 셋팅
 * Server 포트 3000
 */
mongoose
  .connect(
    "mongodb+srv://sadespair00:LPTZj8GSddBIho5A@backenddb.1ie9m.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
