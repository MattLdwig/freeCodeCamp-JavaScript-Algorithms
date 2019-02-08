function telephoneCheck(str) {
    const phoneRegex = /^([1]( |-)?)?(\([0-9]{3}\)|[0-9]{3})( |-)?[0-9]{3}( |-)?[0-9]{4}$/g
    return phoneRegex.test(str) ? true : false
}

telephoneCheck("555-555-5555");