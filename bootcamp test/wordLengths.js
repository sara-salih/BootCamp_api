export default function wordLengths(sum){
    var strSplt = sum.split(' ');
      var wordlength = strSplt.map(c => c.length);
      let total = 0;
      for (var i = 0; i < wordlength.length; i++){
      total += wordlength[i]
      }
      return total;
    }