import React, {useMemo, useState} from 'react';

const Demo: React.FC = function () {
  const [value, setValue] = useState<string>('');
  const result = useMemo(expensiveFunction, []);

  return (
    <div>
      <p>{result}</p>
      <input
        type="text"
        value={value}
        onChange={x => setValue(x.target.value)}
      />
      <p>Use useMemo to memorize computed results of expensive tasks</p>
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
