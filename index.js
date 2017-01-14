var Promise = require('promise')

function then(db) {
	return {
		put: Promise.denodeify(db.put.bind(db)),
		del: Promise.denodeify(db.del.bind(db)),
		get: db.get.bind(db),
		has: db.has.bind(db),
	  keys: db.keys.bind(db),
		clear: Promise.denodeify(db.clear.bind(db)),
		close: db.close.bind(db),
		on: Promise.denodeify(db.on.bind(db)),
	}
}

module.exports = then
