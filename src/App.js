import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
// import { createTeam } from './graphql/mutations'
// import { listTeams } from './graphql/queries'

import {fetchTeams, addTeam} from './service.js'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// import logo from "./logo.svg";
// import "./App.css";


function App() {
  // const [index, setIndex] = useState(0);
  // const [formState, setFormState] = useState(initialState)
  const [teams, setTeams] = useState([])

  useEffect( () => {
    fetchTeams().then(teams => {
      setTeams(teams)
    })
  },[])

 //  const setInput= (key, value) => {
 //   setFormState({ ...formState, [key]: value })
 // }




  // break;

  return (
      <div>
        <button onClick={addTeam}> create team </button>

        {teams && teams.length > 0 && teams.map(t => {
          return <span> id: {t.id}, name: {t.name}  </span>
        })}
      </div>
  );
}

export default App;
