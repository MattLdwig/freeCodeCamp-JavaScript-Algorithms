function rot13(str) { 

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const rotted13 = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('');
    const splittedStr = str.split('');
    const decoded = [];

    splittedStr.forEach(function(e) {
      alphabet.indexOf(e) != -1 ? decoded.push(rotted13[alphabet.indexOf(e)]) : decoded.push(e);
    })

    return decoded.join('');
}

rot13("SERR PBQR PNZC");