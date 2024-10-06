import app from './Server/server'

app.listen(app.get('PORT'), () => {
	console.log(`Server on port http://localhost:${app.get('PORT')}`)
})
