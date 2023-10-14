import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const color = blueGrey[50];

export default function ErrorRadios() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    }
    // else if (value === 'worst') 
    else  {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } 
    // else {
    //   setHelperText('Please select an option.');
    //   setError(true);
    // }
  };

  return (
    <Card sx={{ // Add your card styles here
        width: 750, // Adjust the width as needed
        margin: 'auto', // Center the card horizontally
        marginTop : 1,
        padding: 1, // Adjust the padding as needed
        backgroundColor : color,
      }}>
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best" control={<Radio />} label="The best!" />
          <FormControlLabel value="worst" control={<Radio />} label="The worst." />
          <FormControlLabel value="worsti" control={<Radio />} label="The worst." />
          <FormControlLabel value="worste" control={<Radio />} label="The worst." />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
    </Card>
  );
}