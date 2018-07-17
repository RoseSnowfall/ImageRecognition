let path=require('path')
let datageter = require(path.join(__dirname,'Module1.js'))
let Module1Options = {}
let MyModule = new datageter(Module1Options)
console.log(MyModule.dataCalls)
console.log(MyModule.getMyData())
console.log(MyModule.dataCalls)