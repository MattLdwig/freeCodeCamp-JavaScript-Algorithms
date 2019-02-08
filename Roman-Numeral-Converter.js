function convertToRoman(num) {
    const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL','L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    
    let romanized = [];
    const inversedRoman = roman.reverse();
    const invertedArab = arab.reverse();
    
    function loopOver() {
      invertedArab.forEach(function(e) {
        if (num >= e) {
          let index = arab.indexOf(e);
          romanized.push(inversedRoman[index]);
          num -= e;
          if (num >= e) loopOver();
        }
      })
    }

    loopOver();

    return romanized.join('');
}

convertToRoman(6);