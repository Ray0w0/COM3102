import React, {useState} from 'react';
import {MyButton} from '../../src/MyLabelV3';

interface MyState {
  sum: number;
  count: number;
}

const Demo: React.FC = function () {
  const [state, setState] = useState<MyState>({sum: 0, count: 0});

  function addValue(value: number) {
    state.sum += value;
    state.count++;
    setState({...state});
  }

  return (
    <div>
      <p>
        The sum is {state.sum}. The count is {state.count}.
      </p>
      <MyButton text="+10" onClick={() => addValue(10)} />
      <MyButton text="+5" onClick={() => addValue(5)} />
      <MyButton text="+1" onClick={() => addValue(1)} />
      <p> Only one statement is changed. </p>
      <p> Do you know the difference between the two? </p>
    </div>
  );
};

export default Demo;
