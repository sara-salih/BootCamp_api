export default function longestWord (x){
var y = x.split(" ");
var longWord = 0;

for(var i = 0; i < y.length; i++){
  if(y[i].length >= longWord){
  longWord = y[i].length;
   var word = y[i];
    
   }
}
  return word;
}