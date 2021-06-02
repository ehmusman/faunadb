const faunadb = require('faunadb'),
    q = faunadb.query;
require("dotenv").config();


(async () => {
    const adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

    try {
        const result = await adminClient.query(
            // creating database        
            // q.CreateDatabase({ name: 'temp_db' })

            // creating secret key
            // q.CreateKey({
            //     database: q.Database('temp_db'),
            //     role: 'admin',
            // })

            // create collections
            q.CreateCollection({ name: 'messages' })

        )
        console.log(result)
    } catch (error) {
        console.log(error)
    }

})()