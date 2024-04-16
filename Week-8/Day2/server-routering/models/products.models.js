const{db} = require('../config/data.js');


const _getAllProducts =() =>{
    return db('products').select('id','name','price').orderBy('id')
}

const _getProductById= (product_id) =>{
    return db('products').select('id','name','price').where({id:product_id})
}

const _createProducts = (name,price) =>{
    return db('products').insert({name,price},['id','name','price'])
}

const _updateProduct = (prod_id,prod_name,prod_price) =>{
    return db('products').update({name:prod_name, price:prod_price},['id','name','price']).where({id:prod_id})
}
const _deleteProductById = (prod_id)=>{
    return db('products').del().where({id: prod_id}).returning('id','name','price')
}

const _searchProducts = (query) => {
    return db('products').select('id','name','price').orderBy('id').where('name', 'ilike',`%${query}%`)
}



module.exports = {
    _getAllProducts,
    _getProductById,
    _createProducts,
    _updateProduct,
    _deleteProductById,
    _searchProducts,
}