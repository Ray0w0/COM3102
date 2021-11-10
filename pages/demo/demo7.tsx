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
    setState(state);
  }

  return (
    <div>
      <p>
        The sum is {state.sum}. The count is {state.count}.
      </p>
      <MyButton text="+10" onClick={() => addValue(10)} />
      <MyButton text="+5" onClick={() => addValue(5)} />
      <MyButton text="+1" onClick={() => addValue(1)} />
      <p> Oops..., it is not updating. Why? </p>
      <p> React is smart. It renders the UI only when there is a change. </p>
      <p> The state has not changed. Why? </p>
      <p> The object reference is the same! </p>
      <p> This is a common mistake for learners. </p>
    </div>
  );
};

export default Demo;
