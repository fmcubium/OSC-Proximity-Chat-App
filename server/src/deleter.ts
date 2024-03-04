import { deleteMessages } from './actions/deleteMessages'
const cron = require('node-cron')

//Schedule tasks to be run on the server
cron.schedule('*/30 * * * * *', function() {
    console.log('running a task every 30s.')

    //Deleter action, takes in a unix timestamp and deletes
    //everything older than that
    deleteMessages(60000) //Set to 1 minute for testing purposes
})