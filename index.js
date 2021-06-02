const faunadb = require('faunadb'),
    q = faunadb.query;
const dotenv = require("dotenv");
dotenv.config()

    (async () => {
        const adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
        try {
            const result = await adminClient.query(q.CreateDatabase({ name: 'temp_db' }))
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    })()