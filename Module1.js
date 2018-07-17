let njdb = require('node-json-db')
let joyceDb = new njdb('myData')
let myModule = function(options){
    let core = this
    core.dataCalls = 0
    let joyceData = joyceDb.getData('/joyceData')
    core.getMyData = ()=>{
        core.dataCalls++
        return joyceData
    }
}
module.exports = myModule
