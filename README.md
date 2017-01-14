# `then-flat-file-db`

Promise based interface for [`flat-file-db`](https://github.com/mafintosh/flat-file-db)

[![Build Status](https://travis-ci.org/then/then-flat-file-db.svg?branch=master)](https://travis-ci.org/then/then-flat-file-db)

## Installation

```
npm install then-flat-file-db
```

## Usage

```JS
var db = require('then-flat-file-db')(require('flat-file-db')('./data.db'))

db.on('open')
	.then(() => {
		db.put('hello', { world: 1 }) // store some data
		console.log(db.get('hello')) // -> { world: 1 }
		// 'hello' might not be fully persisted yet
		return db.put('hey', { world: 2 })
	})
	.then(() => {
		// 'hey' is fully persisted, so the Promise resolves
		console.log(db.get('hey')) // -> { world: 2 }
	})
```

## License

Copyright ©️ 2017 Maximilian Stoiber, licensed under the MIT license. See [LICENSE](LICENSE) for more information.
