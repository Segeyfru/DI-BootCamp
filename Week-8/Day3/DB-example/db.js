const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
        host: 'ep-blue-rice-a5iscqbq.us-east-2.aws.neon.tech',
        port: 5433,
        user: 'neondb_owner',
        database: 'neondb',
        password: 'N0RHKyMg9IBr',

        ssl: {rejectUnauthorized: false},
    }
});

// const postgres = require('postgres');
// const sql = postgres({
//     host: '127.0.0.1',
//     port: 5433,
//     username: 'postgres',
//     database: 'postgres',
//     password: '1234'
// });

const test = async () => {
    try {
        const trx = await db.transaction()

        const product1 = await db('products')
            .insert({ name: 'iCat', price: 222 }, ['*'])
            .transacting(trx);
        console.log('Product1 =>', product1);
        const product2 = await db('products')
            .insert({ name: 'iCat2', price: 112 }, ['*'])
            .transacting(trx);
        console.log('Product2 =>', product2);
        await trx.commit()

    } catch (err) {
        console.log(err);
        await trx.rollback();
    }
}

test()
// async function getVersion(){
//     const result = await sql`select id, name, price from products`;
//     console.log(result);
// }
// getVersion()


// async function getVersion(){
//     const result = await db.raw('select * from products')
//     console.log(result.rows);
// }
// getVersion()

// db('products')
// .select('id','name')
// .where({id: 3})
// .then((data) => {
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

// db('products')
// .insert([
//     {name:'mac', price:5000},
//     {name:'Mac2', price:7000},
// ],
// ['id'])
// .then((data) => {
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

// db('products')
// .update({name:'iPhone15'},['id', 'name','price'])
// .where({id:1})

// .then((data) => {
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })


// db('products')
//     .del()
//     .where({ id: 6 })
//     .returning('*')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })