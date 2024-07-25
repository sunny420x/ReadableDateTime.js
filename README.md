<h1>ReadableDateTime.js</h1>
ReadableDateTime.js is a small Node.js module that converts a return value from default JavaScript Date() function into readable date and time and the module also have methods to convert them into SQL date and date time format.
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