const module = require.context('./api',true,/\.js$/)

function importAll(){
    let apiObj = module.keys().reduce((obj, key) => {
        return {
            ...obj,
            ...(module(key)?.default || module(key))
        }
    }, {})
    return apiObj
}

export default importAll()
