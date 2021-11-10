import React, {useMemo, useState} from 'react';

const Demo: React.FC = function () {
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const result = useMemo(() => expensiveFunction(value), [value]);

  return (
    <div>
      <p>{result}</p>
      Value 1:
      <input
        type="text"
        value={value}
        onChange={x => setValue(x.target.value)}
      />
      Value 2:
      <input
        type="text"
        value={value2}
        onChange={x => setValue2(x.target.value)}
      />
      <p>
        A rule of thumb is to put all inputs in your function to the list of
        dependencies
      </p>
      <p>A more user-friendly way is to use asynchrozied mode.</p>
      <p>Self-study: async, Promise</p>
    </div>
  );
};

function expensiveFunction(value: string): string {
  console.log(`Recalculating. Input ${value}`);
  delay(3000);
  return `Hi ${value}`;
}

function delay(ms: number) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

export default Demo;
