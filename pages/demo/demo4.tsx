import React from 'react';
import MyLabelV2 from '../../src/MyLabelV2';

const Demo4: React.FC = function () {
  const data = 'Another pass';
  return (
    <div>
      <p>
        Note how the properties are passed in different ways for string
        constants and variables.
      </p>
      <MyLabelV2 text="Pass data to a child component" />
      <MyLabelV2 text={data} />
      <MyLabelV2 text={'A third pass'} />
      <MyLabelV2 text={`Combining ${data} and other texts`} />
    </div>
  );
};

export default Demo4;
