/* Notice how we have used this file to store all the sensitive information that our app uses.
This is to improve the security of our application. In practice, we would add this file to our .gitignore file. */
module.exports ={
	google: {
		clientID: '810681205666-4gpi3oo42tc31dptseahnhe9vmjsnjkh.apps.googleusercontent.com',
		clientSecret: 'lCm32KvJ5YZXke9SVwU8U4gU'
	},
	mongoDB: {
		dbURI: 'mongodb+srv://Tijan:zuoNr3as@module3task5-m9vxq.mongodb.net/test?retryWrites=true&w=majority'
	},
	session: {
		cookieKey: 'hyperion!1253453425'
	}
}


// Client ID: 810681205666-4gpi3oo42tc31dptseahnhe9vmjsnjkh.apps.googleusercontent.com

// Secret ID: lCm32KvJ5YZXke9SVwU8U4gU