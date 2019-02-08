const palindrome = str => {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reverseStr = str.split('').reverse('').join('');
    return str === reverseStr
}


palindrome("1 eye for of 1 eye.");