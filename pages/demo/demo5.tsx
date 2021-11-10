import React from 'react';
import MyLabelV3, {MyButton} from '../../src/MyLabelV3';

const Demo5: React.FC = function () {
  function onClick() {
    console.log('A button is clicked');
  }

  return (
    <div>
      <MyLabelV3 text="Some text passed to the child">
        <MyButton text="A button" onClick={onClick} />
      </MyLabelV3>
      <p> Note the special property children </p>
      <p> Be careful. Note the difference between onClick and onClick() </p>
      <MyButton
        text="A different way to define the onClick action"
        onClick={() => alert('I want to use alert for this message')}
      />
    </div>
  );
};

export default Demo5;
