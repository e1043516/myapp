// Import packages
const express = require('express')
const morgan = require('morgan')

// Configure out port 
// Check if it set in the environment variable, if not then we default to 3000
const port = process.env.PORT || 3000

//Create an instance of express application
const app = express()

//Log all request
app.use(morgan('common'))

//GET/
app.get('/',(req,resp) => {
    //return HTML content
    resp.type('text/html')
    //set the status code
    resp.status(200)
    //send the response
    resp.send(`<h1>The current new time is ${new Date()} </h1><img src="/static/aaa.jpg">`) //when you need to substitute sth, you need to use ` instead of '

})

//serve static resource
app.use("/static", express.static(__dirname + "/static"))

//Start our web application
app.listen(port,() => {
    console.info(`Starting application on port ${port} at ${new Date()}`) //note this sign, at the top left hand corner, right below ESC button
})