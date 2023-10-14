import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import { blueGrey } from '@mui/material/colors';



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
  











const QuestionPage = () => {
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
    // Add your logic for checking answers here
    // You can compare selectedAnswers with the correct answers in your question data
    // and calculate the user's score.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
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
          </div>
        ))}
        <Button type="submit" variant="outlined">
          Check Answers
        </Button>
      </form>
    </div>
  );
};

export default QuestionPage;
