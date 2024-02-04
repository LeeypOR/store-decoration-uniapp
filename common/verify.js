function regPhone(param) {
    const reg = new RegExp( /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/)
    return !reg.test(param)
}

// 用途：检查输入字符串是否为空  空返回true,否则返回false
function isNull(param) {
    const rep = new RegExp( /\S/);
    return !rep.test(param);
}

// 校验邮箱是否合法
function regEmail(param){
    const rep = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)
    return !rep.test(param)
}

export {
    regPhone,
    isNull,
    regEmail
}