import CryptoJS from 'crypto-js/crypto-js'

// 请求加密的 key  和 偏移向量
const REQ_KEY = CryptoJS.enc.Utf8.parse('fb21f92598c745d192ef3dd7dad59cae')
const REQ_IV = CryptoJS.enc.Utf8.parse('8f42f9081cb02d0e')

// 响应加密的 key  和 偏移向量
const RES_KEY = CryptoJS.enc.Utf8.parse('062a6cfae5ae45f286b45440d5c25fcb')
const RES_IV = CryptoJS.enc.Utf8.parse('f15b68acf3e3aa02')



//base64加密
export function getBase64(params) {
	return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(params))
}


/**
 * 3DES加密 ：字符串 key iv 返回base64
 */
export function Encrypt(word, keyStr, ivStr) {
	let key = REQ_KEY
	let iv = REQ_IV
	if (keyStr) {
		key = CryptoJS.enc.Utf8.parse(keyStr)
	}
	if (ivStr) {
		iv = CryptoJS.enc.Utf8.parse(ivStr)
	}
	let srcs = CryptoJS.enc.Utf8.parse(word)
	const encrypted = CryptoJS.AES.encrypt(srcs, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	})
	return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

/**
 * 3DES 解密 ：字符串 key iv  返回base64
 *
 */
export function Decrypt(word, keyStr, ivStr) {
	let key = RES_KEY
	let iv = RES_IV

	if (keyStr) {
		key = CryptoJS.enc.Utf8.parse(keyStr)
	}
	if (ivStr) {
		iv = CryptoJS.enc.Utf8.parse(ivStr)
	}

	let base64 = CryptoJS.enc.Base64.parse(word)
	let src = CryptoJS.enc.Base64.stringify(base64)

	const decrypt = CryptoJS.AES.decrypt(src, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	})

	const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
	return decryptedStr.toString()
}
