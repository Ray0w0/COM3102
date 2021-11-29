import {Button} from '@blueprintjs/core';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Button active={true} icon="archive" />

      <h1>Demo</h1>
      <Container>
        <a href="demo/demo1" className={styles.card}>
          Example 1 : Add a new page
        </a>
        <a href="demo/demo2" className={styles.card}>
          Example 2 : Integrating with TS codes
        </a>
        <a href="demo/demo3" className={styles.card}>
          Example 3 : React component
        </a>
        <a href="demo/demo4" className={styles.card}>
          Example 4 : Passing properties
        </a>
        <a href="demo/demo5" className={styles.card}>
          Example 5 : Passing properties - cont
        </a>
      </Container>
      <Container>
        <a href="demo/demo6" className={styles.card}>
          Example 6 : State
        </a>
        <a href="demo/demo7" className={styles.card}>
          Example 7 : "Smart" state
        </a>
        <a href="demo/demo8" className={styles.card}>
          Example 8 : "Smart" state - cont
        </a>
        <a href="demo/demo9" className={styles.card}>
          Example 9 : More on props passing
        </a>
        <a href="demo/demo10" className={styles.card}>
          Example 10 : Shopping cart
        </a>
      </Container>
      <Container>
        <a href="demo/demo11" className={styles.card}>
          Example 11 : CSS in React
        </a>
        <a href="demo/demo12" className={styles.card}>
          Example 12 : Function as state update parameter
        </a>
        <a href="demo/demo13" className={styles.card}>
          Example 13 : Error for using a wrong state
        </a>
        <a href="demo/demo14" className={styles.card}>
          Example 14 : Long delay in rendering
        </a>
        <a href="demo/demo15" className={styles.card}>
          Example 15 : useMemo
        </a>
      </Container>
      <Container>
        <a href="demo/demo16" className={styles.card}>
          Example 16 : Dependencies in useMemo
        </a>
        <a href="demo/demo17" className={styles.card}>
          Example 17 : useEffect
        </a>
        <a href="demo/demo18" className={styles.card}>
          Example 18 : Clean up function in useEffect
        </a>
        <a href="demo/demo19" className={styles.card}>
          Example 19 : Never miss a hook function
        </a>
      </Container>
      <h1>Exercise</h1>
      <Container>
        <a href="exercise/ex1" className={styles.card}>
          Exercise 1 : Guess my number
        </a>
        <a href="exercise/ex2" className={styles.card}>
          Exercise 2 : Enhanced shopping cart
        </a>
        <a href="exercise/ex3" className={styles.card}>
          Exercise 3 : Fixing state setting error
        </a>
        <a href="exercise/ex4" className={styles.card}>
          Exercise 4 : Solving equation
        </a>
        <a href="exercise/ex5" className={styles.card}>
          Exercise 5 : Filterable combo box
        </a>
      </Container>
      <Container>
        <a href="exercise/ex6" className={styles.card}>
          Exercise 6 : Field component
        </a>
      </Container>
      <h1>Storage</h1>
      <Container>
        <a href="store/demo1" className={styles.card}>
          Example 1 : Local storage
        </a>
        <a href="store/demo2" className={styles.card}>
          Example 2 : Session storage
        </a>
        <a href="store/demo3" className={styles.card}>
          Example 3 : Cookie
        </a>
        <a href="store/demo4" className={styles.card}>
          Example 4 : Cookie (2)
        </a>
        <a href="store/demo5" className={styles.card}>
          Example 5 : JSON
        </a>
      </Container>
      <h1>Storage Exercise</h1>
      <Container>
        <a href="storeex/ex1" className={styles.card}>
          Exercise 1 : Local storage
        </a>
        <a href="storeex/ex2" className={styles.card}>
          Exercise 2 : Session storage
        </a>
        <a href="storeex/ex3" className={styles.card}>
          Exercise 3 : JSON
        </a>
      </Container>
      <h1>Assignment 3</h1>
      <Container>
        <a href="assignment/" className={styles.card}>
          Assignment 3 : Shopping cart
        </a>        
      </Container>
    </div>
  );
}

const Container: React.FC<{children: React.ReactNode}> = function ({children}) {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {children}
    </div>
  );
};
