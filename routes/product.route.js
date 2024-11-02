/**
 * Router 설정
 * @getProducts     상품리스트 경로
 * @getProduct      상품      경로
 * @createProduct   상품생성   경로
 * @updateProduct   상품수정   경로
 * @deleteProduct   상품삭제   경로
 */

const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
