
export default function totalPhoneBill(x){
var y = x.split(',');
  const call = 2.75;
  const sms = 0.65;
 var totalBill = 0;
  
  for (var i = 0; i < y.length; i++){
  let list = y[i].trim();
    
    if(list === 'call'){
    totalBill = totalBill + call;
    }
    else if(list === 'sms'){
      totalBill = totalBill + sms;
      }
    else if (list.length> 0 && !list.includes('sms','call')) {
      totalBill = undefined
     }
   
  }
  if (totalBill===undefined){
      return "string can only contain sms and or call";
  }
  else if (totalBill===0){
    return "string is empty"
  }
  else
  {return 'R' + totalBill.toFixed(2); } 
}