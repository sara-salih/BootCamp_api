export default function shortestWord (sht){
    var l = sht.split(" ");
      var shortWord = l[0];
      
      for(var i = 0; i < l.length; i++){
        var y = l[i]
        if(y.length <= shortWord.length){
        shortWord = y;
         
         }
      }
      return shortWord;
    }