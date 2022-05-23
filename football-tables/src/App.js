import React, { useEffect, useState } from 'react';
import './App.css';
import Selection from './components/Selection';
import Table from './components/Table';

const App = () => {
  const [leagueTable, setLeagueTable] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'football98.p.rapidapi.com',
      'X-RapidAPI-Key': 'ebd43a904emsh2240dd2fa955afdp11e1aajsncc68e9f7f328',
    },
  };

  const getTable = async () => {
    fetch('https://football98.p.rapidapi.com/premierleague/table', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setLeagueTable(response);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <>
      <Selection />
      <Table teams={leagueTable} />
    </>
  );
};

export default App;
