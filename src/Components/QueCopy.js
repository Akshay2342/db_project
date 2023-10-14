import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';
import { CenterFocusStrong } from '@mui/icons-material';

const color = blueGrey
const questions = [
    {
      questionText: "What is the capital of France?",
      options: ["London", "Madrid", "Paris", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      questionText: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      questionText: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
      correctAnswer: "Blue Whale"
    }
  ];
  

const QuestionPageCopy = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));

  const handleRadioChange = (event, index) => {
    const selectedAnswer = event.target.value;
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = selectedAnswer;
      return newAnswers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const results = questions.map((question, index) => {
        return selectedAnswers[index] === question.correctAnswer;
    });
    
    // You can now use the `results` array to calculate the user's score, display a message, etc.
    console.log(results);
    (results.map() =(
        
    ))
  };

  return (
      <>
      <div className="lst_of_ques">
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <Card key ={index} sx={{ // Add your card styles here
            width: 750, // Adjust the width as needed
            margin: 'auto', // Center the card horizontally
            marginTop : 1,
            padding: 1, // Adjust the padding as needed
            backgroundColor : color,
        }}>
            <h3>{question.questionText}</h3>
            <RadioGroup
              name={`question_${index}`}
              value={selectedAnswers[index]}
              onChange={(e) => handleRadioChange(e, index)}
              >
              {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                  key={optionIndex}
                  value={option}
                  control={<Radio />}
                  label={option}
                  />
              ))}
            </RadioGroup>
          </Card>
        ))}
                  {/* <center> */}
        <Button type="submit" variant="outlined" style={{alignItems :'center'}} >
          Check Answers
        </Button>
        {/* </center> */}
      </form>
      </div>
      </>
  );
};

export default QuestionPageCopy;
