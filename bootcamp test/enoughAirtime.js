export default function enoughAirtime(x,y){ 
    const data = 12;
    const sms = 0.75;
    const call = 1.88; 
    let bill = 0.00;
      
    let strSplt = x.split(',');
      for (var i = 0; i < strSplt.length; i++){
      var abc = strSplt[i];
        if(abc === "call"){
        bill = bill + call;
        }else if(abc === "sms"){
        bill = bill + sms;
        }else {
        bill = bill + data;
        }
      }
        
        let rA = y - bill;
        if (y > bill){
        return 'R' + rA.toFixed(2);
        } else {
          return 'R0.00';
        
      }
      
    }
    