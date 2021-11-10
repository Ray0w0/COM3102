import React, {useState} from 'react';

const Demo: React.FC = function () {
  const [value, setValue] = useState<string>('');
  const result = expensiveFunction();

  return (
    <div>
      <p>{result}</p>
      <input
        type="text"
        value={value}
        onChange={x => setValue(x.target.value)}
      />
      <p>Notice the delay everytime you update the state</p>
      <p>
        The whole component is rendered again when there is a change to the
        state
      </p>
    </div>
  );
};

function expensiveFunction(): string {
  console.log('Recalculating');
  delay(3000);
  return 'Hi';
}

function delay(ms: number) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

export default Demo;
