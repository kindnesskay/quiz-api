const express = require("express");
const cors = require("cors");
const questions = require("./questions.json");
const questions2=require('./questions2.json')
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "You have reached the quiz api" });
});

app.get("/question/:id", (req, res) => {
  const questionID = parseInt(req.params.id);

  if (isNaN(questionID) || questionID < 0 || !questions[questionID]) {
    return res.status(404).json({ error: "Question not found" });
  }
  const { question, options, id } = questions[questionID];
  const questionWithoutAnswer = { question, options, id };
  res.json(questionWithoutAnswer);
});

app.post("/answer/:id", (req, res) => {
  const questionID = parseInt(req.params.id);
  const userAnswer = req.body.answer;

  if (isNaN(questionID) || questionID < 0 || !questions[questionID]) {
    return res.status(404).json({ error: "Question not found" });
  }

  const correctAnswer = questions[questionID].correct_option;  
  const correctAnswer_string=questions[questionID].options[correctAnswer];

  if (userAnswer==correctAnswer_string) {
    res.json({ correct: true, message: "Correct answer" });
  } else {
    res.json({ correct: false, message: "Wrong answer" });
  }
  
});

app.get('/question2/:id',(req,res)=>{
  const question2ID=parseInt(req.params.id)
  if(!question2ID|| question2ID <0 || !questions2[question2ID]){
    return res.status(404).json({error:"Question not found"})
  }
  return res.status(200).json({message:"Under construction"})

})

app.listen(port, () => {
  console.log(`server is  running on ${port}`);
});

module.exports=app