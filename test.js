const ReadableDate = require('./ReadableDateTime.js')

console.log("toDateTime (with pad): "+new ReadableDate().toDateTime(new Date(), true))
console.log("toDateTime (without pad): "+new ReadableDate().toDateTime(new Date(), false))
console.log("toDate (with pad): "+new ReadableDate().toDate(new Date(), true))
console.log("toTime: "+new ReadableDate().toTime(new Date()))
console.log("toSQLDateTime: "+new ReadableDate().toSQLDateTime(new Date()))
console.log("toSQLDate: "+new ReadableDate().toSQLDate(new Date()))