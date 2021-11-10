import React, {useState} from 'react';
import {MyButton} from '../../src/MyLabelV3';

const Demo: React.FC = function () {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p> You clicked the button {count} times.</p>
      <MyButton text="Click me" onClick={() => setCount(count + 1)} />
      <p>
        Use 'state' to remember something. Pass the necessary properties and
        functions to the child as needed
      </p>
      <p>
        Rule of thumb: don't pass more than enough to the child. Think carefully
        of your design.
      </p>
    </div>
  );
};

export default Demo;
