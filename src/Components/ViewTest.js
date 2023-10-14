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

const color = blueGrey[100]

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
  // Add more questions here
];

const QuestionPages = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [helperTexts, setHelperTexts] = useState(Array(questions.length).fill(''));
  const [errorStates, setErrorStates] = useState(Array(questions.length).fill(false));
  const [submitted, setSubmitted] = useState(false);

  const handleRadioChange = (event, index) => {
    const selectedAnswer = event.target.value;
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = selectedAnswer;
      return newAnswers;
    });
    if (submitted) {
      validateQuestion(index, selectedAnswer);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    questions.forEach((_, index) => {
      validateQuestion(index, selectedAnswers[index]);
    });
  };

  const validateQuestion = (index, selectedAnswer) => {
    const question = questions[index];
    if (selectedAnswer === question.correctAnswer) {
      setHelperTexts((prevTexts) => {
        const newTexts = [...prevTexts];
        newTexts[index] = 'You got it!';
        return newTexts;
      });
      setErrorStates((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[index] = false;
        return newErrors;
      });
    } else {
      setHelperTexts((prevTexts) => {
        const newTexts = [...prevTexts];
        newTexts[index] = ' wrong answer!';
        return newTexts;
      });
      setErrorStates((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[index] = true;
        return newErrors;
      });
    }
  };

  return (
    <div className="lst_of_ques">
    
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
           <Card key ={index} sx={{ // Add your card styles here
            width: 'auto', // Adjust the width as needed
            // margin: 'auto', // Center the card horizontally
            marginTop : 1,
            // marginLeft : '5px',
            padding: 3, // Adjust the padding as needed
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
            {submitted && <FormHelperText error={errorStates[index]}>{helperTexts[index]}</FormHelperText>}
          </Card>
        ))}
        <Button type="submit" variant="outlined">
          Check Answers
        </Button>
      </form>
    </div>
  );
};

export default QuestionPages;
