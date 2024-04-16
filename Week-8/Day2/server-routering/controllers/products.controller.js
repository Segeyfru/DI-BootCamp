const { products } = require("../config/data.js");
const {_getAllProducts,
  _getProductById,
  _createProducts,
  _updateProduct,
  _deleteProductById,
  _searchProducts,
} = require('../models/products.models.js')

const getAllProducts = (req, res) => {
  _getAllProducts()
  .then(data =>{
    res.json(data);
  })
  .catch(err => {
    res.status(404).json({msg:'something went wrong'})
    console.log(err)
  })
  
};

const getProductById = (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  _getProductById(id)
  .then(data => res.json(data))
  .catch(err => {
    res.status(404).json({msg:'something went wrong'})
    console.log(err)
  })
  

  // const product = products.find((item) => item.id == id);
  // if (!product) {
  //   return res.sendStatus(404);
  // }
  // res.status(200).json(product);
};

const deleteProductById = (req, res) => {
  const { id } = req.params;
  _deleteProductById(id)
  .then(data => res.json(data))
  .catch(err => {
    res.status(404).json({msg:'something went wrong'})
    console.log(err)
  })

  // const index = products.findIndex((item) => item.id == id);
  // if (index === -1) {
  //   return res.status(404).json({ msg: "not found" });
  // }
  // products.splice(index, 1);
  // res.json(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  _updateProduct(id,name,price)
  .then(data => res.json(data))
  .catch(err => {
    res.status(404).json({msg:'something went wrong'})
    console.log(err)
  })
  // const index = products.findIndex((item) => item.id == id);

  // if (index === -1) {
  //   return res.status(404).json({ msg: "not found" });
  // }

  // products[index] = {
  //   ...products[index],
  //   name,
  //   price,
  // };

  // res.json(products);
};

const searchProducts = (req, res) => {
  const { q } = req.query;
  _searchProducts(q)
  .then(data => res.json(data))
  .catch(err => {
    res.status(404).json({msg:'something went wrong'})
    console.log(err)
  })
  // const filterd = products.filter((item) => {
  //   return item.name.toLowerCase().includes(q.toLowerCase());
  // });
  // if (filterd.length === 0) {
  //   return res.status(404).json({ msg: "no product matched your search" });
  // }
  // res.status(200).json(filterd);
};

const createProducts = (req, res) => {
  const {name,price} = req.body
  _createProducts(name, price)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.status(404).json({msg:'something went wrong'})
    console.log(err)
  })


  // console.log(req.body);
  // products.push(req.body);
  // res.json(products);
};

module.exports = {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProduct,
  searchProducts,
  createProducts,
};
