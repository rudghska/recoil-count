import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { counter as countState } from '../../recoil/counter';

const Counter = (): JSX.Element => {
  //   const [count, setCount] = useRecoilState<number>(countState);

  const count = useRecoilValue<number>(countState);
  const setCount = useSetRecoilState<number>(countState);

  return (
    <div style={{ padding: '5em' }}>
      <span style={{ fontSize: '2rem', display: 'block' }}>Count : {count}</span>
      <br />
      <button
        style={{ fontSize: '1rem' }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + 1
      </button>
      <button
        style={{ fontSize: '1rem' }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default Counter;
