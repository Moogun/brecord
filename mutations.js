/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          teamID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagues {
        items {
          id
          teamID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          teamID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagues {
        items {
          id
          teamID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          teamID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagues {
        items {
          id
          teamID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagues {
        items {
          id
          playerID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagues {
        items {
          id
          playerID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagues {
        items {
          id
          playerID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagueId
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagueId
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          playerID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      leagueId
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLeague = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          playerID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          name
          leagueId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLeague = /* GraphQL */ `
  mutation UpdateLeague(
    $input: UpdateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    updateLeague(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          playerID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          name
          leagueId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLeague = /* GraphQL */ `
  mutation DeleteLeague(
    $input: DeleteLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    deleteLeague(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          teamID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      players {
        items {
          id
          playerID
          leagueID
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          name
          leagueId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeamPlayer = /* GraphQL */ `
  mutation CreateTeamPlayer(
    $input: CreateTeamPlayerInput!
    $condition: ModelTeamPlayerConditionInput
  ) {
    createTeamPlayer(input: $input, condition: $condition) {
      id
      teamID
      playerID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeamPlayer = /* GraphQL */ `
  mutation UpdateTeamPlayer(
    $input: UpdateTeamPlayerInput!
    $condition: ModelTeamPlayerConditionInput
  ) {
    updateTeamPlayer(input: $input, condition: $condition) {
      id
      teamID
      playerID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeamPlayer = /* GraphQL */ `
  mutation DeleteTeamPlayer(
    $input: DeleteTeamPlayerInput!
    $condition: ModelTeamPlayerConditionInput
  ) {
    deleteTeamPlayer(input: $input, condition: $condition) {
      id
      teamID
      playerID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeamGame = /* GraphQL */ `
  mutation CreateTeamGame(
    $input: CreateTeamGameInput!
    $condition: ModelTeamGameConditionInput
  ) {
    createTeamGame(input: $input, condition: $condition) {
      id
      teamID
      gameID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        leagueId
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeamGame = /* GraphQL */ `
  mutation UpdateTeamGame(
    $input: UpdateTeamGameInput!
    $condition: ModelTeamGameConditionInput
  ) {
    updateTeamGame(input: $input, condition: $condition) {
      id
      teamID
      gameID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        leagueId
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeamGame = /* GraphQL */ `
  mutation DeleteTeamGame(
    $input: DeleteTeamGameInput!
    $condition: ModelTeamGameConditionInput
  ) {
    deleteTeamGame(input: $input, condition: $condition) {
      id
      teamID
      gameID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        leagueId
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeamLeague = /* GraphQL */ `
  mutation CreateTeamLeague(
    $input: CreateTeamLeagueInput!
    $condition: ModelTeamLeagueConditionInput
  ) {
    createTeamLeague(input: $input, condition: $condition) {
      id
      teamID
      leagueID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeamLeague = /* GraphQL */ `
  mutation UpdateTeamLeague(
    $input: UpdateTeamLeagueInput!
    $condition: ModelTeamLeagueConditionInput
  ) {
    updateTeamLeague(input: $input, condition: $condition) {
      id
      teamID
      leagueID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeamLeague = /* GraphQL */ `
  mutation DeleteTeamLeague(
    $input: DeleteTeamLeagueInput!
    $condition: ModelTeamLeagueConditionInput
  ) {
    deleteTeamLeague(input: $input, condition: $condition) {
      id
      teamID
      leagueID
      team {
        id
        name
        players {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlayerGame = /* GraphQL */ `
  mutation CreatePlayerGame(
    $input: CreatePlayerGameInput!
    $condition: ModelPlayerGameConditionInput
  ) {
    createPlayerGame(input: $input, condition: $condition) {
      id
      playerID
      gameID
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        leagueId
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayerGame = /* GraphQL */ `
  mutation UpdatePlayerGame(
    $input: UpdatePlayerGameInput!
    $condition: ModelPlayerGameConditionInput
  ) {
    updatePlayerGame(input: $input, condition: $condition) {
      id
      playerID
      gameID
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        leagueId
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayerGame = /* GraphQL */ `
  mutation DeletePlayerGame(
    $input: DeletePlayerGameInput!
    $condition: ModelPlayerGameConditionInput
  ) {
    deletePlayerGame(input: $input, condition: $condition) {
      id
      playerID
      gameID
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      game {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        leagueId
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlayerLeague = /* GraphQL */ `
  mutation CreatePlayerLeague(
    $input: CreatePlayerLeagueInput!
    $condition: ModelPlayerLeagueConditionInput
  ) {
    createPlayerLeague(input: $input, condition: $condition) {
      id
      playerID
      leagueID
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayerLeague = /* GraphQL */ `
  mutation UpdatePlayerLeague(
    $input: UpdatePlayerLeagueInput!
    $condition: ModelPlayerLeagueConditionInput
  ) {
    updatePlayerLeague(input: $input, condition: $condition) {
      id
      playerID
      leagueID
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayerLeague = /* GraphQL */ `
  mutation DeletePlayerLeague(
    $input: DeletePlayerLeagueInput!
    $condition: ModelPlayerLeagueConditionInput
  ) {
    deletePlayerLeague(input: $input, condition: $condition) {
      id
      playerID
      leagueID
      player {
        id
        name
        teams {
          nextToken
        }
        games {
          nextToken
        }
        leagues {
          nextToken
        }
        createdAt
        updatedAt
      }
      league {
        id
        name
        teams {
          nextToken
        }
        players {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
