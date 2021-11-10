import React, {useEffect} from 'react';

const Demo: React.FC = function () {
  useEffect(() => {
    const elm = document.getElementById('something');
    if (elm !== null) {
      elm.innerHTML = '<p>Now, I have something</p>';
    }
  });

  return (
    <div id="something">
      <p> I have nothing here. </p>
    </div>
  );
};

export default Demo;
