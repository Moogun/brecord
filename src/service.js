import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTeam } from './graphql/mutations'
import { listTeams } from './graphql/queries'

export const fetchTeams = async () => {
  try {
    const teamData = await API.graphql(graphqlOperation(listTeams))

      const teams = teamData.data.listTeams.items
      console.log('[service] teams', teams)
      return teams

    } catch (err) { console.log('error fetching todos') }
}

export const addTeam = async () => {
  try {
    // if (!formState.name || !formState.description) return
    // const teamData = await API.graphql(graphqlOperation(listTeams))
    // const team = { ...formState }
     // setTeams([...teams, team])
     // setFormState(initialState)
     let t = {id: 't100', name: 't100'}
     await API.graphql(graphqlOperation(createTeam, {input: t}))
   } catch (err) {

     console.log('error creating todo:', err)
   }
}
