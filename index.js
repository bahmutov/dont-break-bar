const foo = require('dont-break-foo')
console.log('dont-break-foo gives us "%s"', foo)
console.assert(foo === 'foo', 'foo should be "foo"')
