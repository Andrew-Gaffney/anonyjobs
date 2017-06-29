const router = require('express').Router();
const User = require('../models').User

router.get('/', (req, res) => {
	User.findAll()
	.then(foundUsers => {
		res.send(foundUsers)
	})
})

router.post('/', (req, res) => {
	console.log('in post route', req)
	// User.create(req.body)
	// .then (createdUser => {
	// 	res.send(createdUser)
	// })
	res.send('thanks')
})

module.exports = router