import React, {useEffect, useState} from 'react';
import {MyButton} from '../../src/MyLabelV3';

const Demo: React.FC = function () {
  const [visible, setVisible] = useState<boolean>(true);
  if (visible) {
    const [count, setCount] = useState<number>(0);
    return (
      <div id="something">
        {visible && <Component count={count} setCount={setCount} />}
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Turn off' : 'Turn on'}
        </button>
        <p> Parent keeps the count: {count}</p>
        <p> Q1: Why not just clean the stuff at the parent? </p>
        <p>
          Q2: Can the clean up function in useEffect be replaced by another
          mechanism, e.g., button onClick?
        </p>
      </div>
    );
  } else {
    return (
      <div>
        Nothing here yet.
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Turn off' : 'Turn on'}
        </button>
      </div>
    );
  }
};

const Component: React.FC<{
  count: number;
  setCount: (x: number) => void;
}> = function ({count, setCount}) {
  useEffect(() => {
    return () => {
      console.log('Cleaning');
      setCount(0);
    };
  }, []);

  return (
    <div>
      <p> You clicked the button {count} times.</p>
      <MyButton text="Click me" onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Demo;
