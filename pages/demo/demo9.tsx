import React, {useState} from 'react';

const Demo: React.FC = function () {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <ComplexComponent label="Readonly field:" text={value}>
        Yes, there is something.
      </ComplexComponent>
      <ComplexComponent text={value} onChange={setValue} />
      <p>Note how the state updates different components at the same time.</p>
    </div>
  );
};

const ComplexComponent: React.FC<{
  label?: string;
  text: string;
  onChange?: (x: string) => void;
  children?: React.ReactNode;
}> = function ({text, onChange, children, label}) {
  return (
    <div>
      {label !== undefined && <span>{label}</span>}
      <input
        type="text"
        value={text}
        readOnly={onChange === undefined}
        onChange={x => onChange!(x.target.value)}
      />
      {children !== undefined && <p> There is something! {children} </p>}
    </div>
  );
};

export default Demo;
