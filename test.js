var assert = require('assert')

var db = require('./')(require('flat-file-db')('./test.db'));

process.exitCode = 1
db.on('open')
	.then(() => {
		db.put('hello', { world: 1 })
		assert.deepEqual(db.get('hello'), { world: 1 })
		return db.put('hey', { world: 2 })
	})
	.then(() => {
		assert.deepEqual(db.get('hey'), { world: 2 })
		assert.equal(db.has('hey'), true)
		var keys = db.keys()
		assert.equal(keys.indexOf('hey') > -1, true)
		assert.equal(keys.indexOf('hello') > -1, true)
		return db.clear()
	})
	.then(() => {
		assert.deepEqual(db.keys(), [])
		process.exitCode = 0
	})
