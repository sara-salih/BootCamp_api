import express from 'express';

import longestWord from './bootcamp test/longestword.js';
import shortestWord from './bootcamp test/shortestWord.js';
import totalPhoneBill from './bootcamp test/totalPhoneBill.js';
import enoughAirtime from './bootcamp test/enoughAirtime.js';
import wordLengths from './bootcamp test/wordLengths.js';
const app = express();

app.use(express.static('public'))
app.get("/api/word_game", function(req, res){
    const sentence = req.query.sentence;
    res.json({ "longestWord": longestWord(sentence), 
    "shortestWord": shortestWord(sentence),
    "wordLengths": wordLengths(sentence)

});
  });

  app.get("/api/total_bill", function(req, res){
    const phoneBill = req.query.phoneBill;
    res.json({  
    "totalPhoneBill": totalPhoneBill(phoneBill)

});
  
  });

  app.get("/api/enough", function(req, res){
    const usage = req.query.usage;
    const amount = req.query.amount;
    res.json({
    "enoughAirtime": enoughAirtime(usage, amount)
    

});
  
  });
  
const PORT = process.env.PORT || 6007;
app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });
