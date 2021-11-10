import React, {useState} from 'react';
import {MyButton} from '../../src/MyLabelV3';

interface State {
  callback: () => void;
}

const Demo: React.FC = function () {
  const [state, setState] = useState<State | undefined>(undefined);

  console.log('callback', state);

  return (
    <div>
      <Counter setCallBack={x => setState({callback: x})} />
      {state !== undefined && (
        <>
          <MyButton text="Parent can click now" onClick={state.callback} />
          <p>Understand why we have different instances of the component</p>
        </>
      )}
    </div>
  );
};

const Counter: React.FC<{
  setCallBack: (f: () => void) => void;
}> = function ({setCallBack}) {
  const [count, setCount] = useState<number>(0);

  function updateCounterByParent() {
    setCount(count + 1);
  }

  return (
    <div>
      <p> You clicked the button {count} times.</p>
      <MyButton text="Click me" onClick={() => setCount(x => x + 1)} />
      <p> You have seen me already. </p>
      <MyButton
        text="Empower parent to click too"
        onClick={() => setCallBack(updateCounterByParent)}
      />
    </div>
  );
};

export default Demo;
