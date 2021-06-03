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
            //     { data: { detail: "this is message 4" } },
            // )

            // insert multiple docs at a time
            // q.Map(
            //     [
            //         'This is message one',
            //         'This is message 2',
            //         'This is message 3',
            //     ],
            //     q.Lambda(
            //         'detail',
            //         q.Create(
            //             q.Collection('messages'),
            //             { data: { title: q.Var('detail') } },
            //         )
            //     ),
            // )


            // retreive a single document by Ref
            // q.Get(q.Ref(q.Collection('messages'), '300310855113769473'))


            // retreive document by indexes
            // q.Get(
            //     q.Match(q.Index('detail_by_title'), "this is message 4")
            // )

            // update a document
            // q.Update(
            //     q.Ref(q.Collection('messages'), '300310855113769473'),
            //     { data: { detail: "i am fine" } },
            // )

            // Replace a document
            // q.Replace(
            //     q.Ref(q.Collection('messages'), '300310855113769473'),
            //     { data: { detail: "i am fine! wel" } },
            // )

            // delete a document
            q.Delete(
                q.Ref(q.Collection('messages'), '300311228350204421')
            )
        )
        console.log(result)
    } catch (error) {
        console.log(error)
    }

})()