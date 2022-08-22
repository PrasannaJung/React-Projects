import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.navbar}>
      <h1>DineDelicious</h1>
      <div>
        <button className={styles.btn}>
          Show Cart <span className={styles['item-amount']}>2</span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
