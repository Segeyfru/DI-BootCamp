const knex = require('knex')

// const dotenv = require('dotenv')

// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
    client: 'pg',
    connection: {
        connectionString: 'postgresql://neondb_owner:N0RHKyMg9IBr@ep-blue-rice-a5iscqbq-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
        // host: PGHOST,
        // port: PGPORT,
        // user: PGUSER,
        // database: PGDATABASE,
        // password: PGPASSWORD,

        ssl: {rejectUnauthorized: false},
    }
});

module.exports = { db }