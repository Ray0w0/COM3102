import React from 'react';
import MyLabel from '../../src/MyLabel';

const Demo3: React.FC = function () {
  return (
    <div>
      <p> I can use a custom component defined in another file. </p>
      <MyLabel />
      <p>
        There are diffrent ways / styles to write React application. You can
        look at
        <a href="https://reactjs.org/tutorial/tutorial.html"> React</a> tutorial
        for more information.
      </p>
    </div>
  );
};

export default Demo3;
