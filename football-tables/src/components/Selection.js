import React from 'react';

import styles from './Selection.module.css';

const Selection = props => {
  const selectedLeague = e => {
    props.getLeague(e.target.value);
  };
  return (
    <header className={styles.header}>
      <h1>Select a league table</h1>
      <select onChange={selectedLeague}>
        <option value={'pl'}>Premier League</option>
        <option value={'liga'}>Laliga</option>
        <option value={'bundesliga'}>Bundesliga</option>
        <option value={'seriea'}>Serie A</option>
        <option value={'ligue1'}>Ligue 1</option>
      </select>
    </header>
  );
};

export default Selection;
