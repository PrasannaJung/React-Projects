import React from 'react';

import styles from './Table.module.css';

const Table = ({ teams }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead className={styles['table-heading']}>
          <tr>
            <th></th>
            <th></th>
            <th>Team</th>
            <th>Played</th>
            <th>Win</th>
            <th>Draw</th>
            <th>Lost</th>
            <th>Points</th>
            <th>GD</th>
          </tr>
        </thead>
        <tbody className={styles.flex}>
          {teams.map(team => {
            return (
              <tr>
                <td>{team.Position}</td>
                <td>
                  <img src={team.SquadLogo} alt='' />
                </td>
                <td>{team.Name}</td>
                <td>{team.Played}</td>
                <td>{team.Winned}</td>
                <td>{team.Tie}</td>
                <td>{team.Loosed}</td>
                <td>{team.Points}</td>
                <td>{team['Goal Difference']}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
