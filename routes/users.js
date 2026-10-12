import express from 'express'
import user from '../user.json' with { type: 'json' }

const routerUser = express.Router()

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (_, res) => {
	// sendFile('user.json', { root: '.' })
	res.send(user)
})

/*
            fs.readFile('./employees.json', 'utf8', (_, data) => {
                res.write(data)
                res.end()



- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req, res) => {
	const { username, password } = req.body

	if (username === user.username && password === user.password) {
		res.send({
			status: true,
			message: 'User Is valid',
		})
	} else if (username !== user.username) {
		res.send({
			status: false,
			message: 'User Name is invalid',
		})
	} else if (password !== user.password) {
		res.send({
			status: false,
			message: 'Password is invalid',
		})
	}
})

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req, res) => {
	const username = req.params.username

	res.send(`<b>${username} successfully logged out.<b>`)
})

export default routerUser
