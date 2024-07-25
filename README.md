<h1>ReadableDateTime.js</h1>
ReadableDateTime.js is a small Node.js module that converts a return value from default JavaScript Date() function into readable date and time and the module also have methods to converts them into SQL date and date time format.
<h1>Usage:</h1>
<h2>toDateTime (with pad):</h2>
<pre>
new ReadableDate().toDateTime(new Date(), true)
</pre>

<h2>toDateTime (without pad):</h2>
<pre>
new ReadableDate().toDateTime(new Date(), false)
</pre>

<h2>toDate (with pad):</h2>
<pre>
new ReadableDate().toDate(new Date(), true)
</pre>

<h2>toSQLDateTime:</h2>
<pre>
new ReadableDate().toSQLDateTime(new Date())
</pre>

<h2>toSQLDate:</h2>
<pre>
new ReadableDate().toSQLDate(new Date())
</pre>
<h1>Example:</h1>
<pre>
const ReadableDate = require('./ReadableDateTime.js')

console.log("toDateTime (with pad): "+new ReadableDate().toDateTime(new Date(), true))
console.log("toDateTime (without pad): "+new ReadableDate().toDateTime(new Date(), false))
console.log("toDate (with pad): "+new ReadableDate().toDate(new Date(), true))
console.log("toSQLDateTime: "+new ReadableDate().toSQLDateTime(new Date()))
console.log("toSQLDate: "+new ReadableDate().toSQLDate(new Date()))
</pre>