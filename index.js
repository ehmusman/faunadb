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
            // q.CreateCollection({ name: 'messages' })

            // creating index
            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            // })


            // inserting a document
            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: "I am fine, what's about you" } },
            // )

            // insert multiple docs at a time
            q.Map(
                [
                    'This is message one',
                    'This is message 2',
                    'This is message 3',
                ],
                q.Lambda(
                    'detail',
                    q.Create(
                        q.Collection('messages'),
                        { data: { title: q.Var('detail') } },
                    )
                ),
            )
        )
        console.log(result)
    } catch (error) {
        console.log(error)
    }

})()