import React from 'react';

const MyLabelV3: React.FC<{
  text: string;
  children: React.ReactNode;
}> = function ({text, children}) {
  return (
    <>
      <p>
        Each component returns a single element. It cannot return two elements
      </p>
      <p>{text}</p>
      {children}
    </>
  );
};

export const MyButton: React.FC<{
  text: string;
  onClick: () => void;
}> = function ({text, onClick}) {
  return <button onClick={onClick}>{text}</button>;
};

export default MyLabelV3;
