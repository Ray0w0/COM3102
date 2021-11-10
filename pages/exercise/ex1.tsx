import {useState} from 'react';

const secret = 42;

const Exercise: React.FC = function () {
  const [guess, setGuess] = useState<string>('0');

  function check(x: string) {
    const num = parseInt(x);
    if (num > secret) {
      alert('Too large');
    } else if (num < secret) {
      alert('Too small');
    } else {
      alert('Bingo');
    }
  }

  return (
    <div>
      <p> Guess my secret number: </p>
      <input
        type="number"
        value={guess}
        onChange={x => setGuess(x.target.value)}
      />
      <button onClick={() => check(guess)}> Check</button>
      <p>Points to notes:</p>
      <p> 1. the input filed is {'<input type="number"/>'}</p>
      <p>
        2. it is a typical way to use value and onChange function like this to
        keep the values in the state
      </p>
      <p>
        3. Checking is done when the button is clicked. But potentially can be
        done during onChange
      </p>
    </div>
  );
};

export default Exercise;
