import React, {useEffect, useMemo, useState} from 'react';

const options = ['AHCC', 'BBA', 'BA', 'DSBI'];

const Exercise: React.FC = function () {
  const [filter, setFilter] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);
  const [major, setMajor] = useState<string>('');

  const filtered = useMemo(
    () => options.filter(o => o.includes(filter) || filter === ''),
    [filter]
  );

  return (
    <div>
      Name required?:
      <input
        type="checkbox"
        checked={visible}
        onChange={() => setVisible(!visible)}
      />
      <p>
        Name: <Field isVisible={visible} />
      </p>
      <p>
        Filter:
        <input value={filter} onChange={x => setFilter(x.target.value)} />
      </p>
      <p>
        Major:
        <select value={major}>
          {filtered.map(o => (
            <option
              key={o}
              value={o}
              onSelect={x => setMajor(x.currentTarget.value)}
            >
              {o}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};

const Field: React.FC<{
  isVisible: boolean;
}> = function ({isVisible}) {
  const [value, setValue] = useState<string>('');
  useEffect(() => () => setValue(''), [isVisible]);

  return isVisible ? (
    <input value={value} onChange={x => setValue(x.target.value)} />
  ) : (
    <> Not visible</>
  );
};

export default Exercise;
