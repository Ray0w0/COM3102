import React, {useState} from 'react';

const Demo: React.FC = function () {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <p> You clicked {value} times. </p>
      <button
        style={{
          backgroundColor: value % 2 === 1 ? 'lightgreen' : 'white',
        }}
        onClick={() => setValue(value + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Demo;
