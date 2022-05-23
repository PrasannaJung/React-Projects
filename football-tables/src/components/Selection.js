import React from 'react';

import styles from './Selection.module.css';

const Selection = () => {
  return (
    <header className={styles.header}>
      <h1>Select a league table</h1>
      <select>
        <option value={'pl'}>Premier League</option>
        <option value={'laliga'}>Laliga</option>
        <option value={'bundesliga'}>Bundesliga</option>
        <option value={'seriea'}>Serie A</option>
        <option value={'ligue1'}>Ligue 1</option>
      </select>
    </header>
  );
};

export default Selection;
