import React, {useState} from 'react';
import {MyButton} from '../../src/MyLabelV3';

const Demo: React.FC = function () {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p> You clicked the button {count} times.</p>
      <MyButton text="Click me" onClick={() => setCount(x => x + 1)} />
      <p> This is another way to set the state using the previous state </p>
      <p> The setState function actually accepts a function </p>
      <p> The input is always the current state </p>
      <p>
        It is safer to use this method to update the state. Do you know why?
        Check the next demo
      </p>
    </div>
  );
};

export default Demo;
