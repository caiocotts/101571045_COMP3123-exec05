import express from 'express'
import userRouter from './routes/users.js'

const app = express()

app.use(express.json())

// Add User Router
app.use('/api/v1/user', userRouter)

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (_, res) => {
	res.sendFile('home.html', { root: '.' })
})

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
	console.log(err)
	res.status(500).send('Server Error')
})

app.listen(process.env.port || 8081)

console.log(`Web Server is listening at port ${process.env.port || 8081}`)
