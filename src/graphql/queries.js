/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
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
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeamPlayer = /* GraphQL */ `
  query GetTeamPlayer($id: ID!) {
    getTeamPlayer(id: $id) {
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
export const listTeamPlayers = /* GraphQL */ `
  query ListTeamPlayers(
    $filter: ModelTeamPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        playerID
        team {
          id
          name
          createdAt
          updatedAt
        }
        player {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeamGame = /* GraphQL */ `
  query GetTeamGame($id: ID!) {
    getTeamGame(id: $id) {
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
export const listTeamGames = /* GraphQL */ `
  query ListTeamGames(
    $filter: ModelTeamGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        gameID
        team {
          id
          name
          createdAt
          updatedAt
        }
        game {
          id
          name
          leagueId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeamLeague = /* GraphQL */ `
  query GetTeamLeague($id: ID!) {
    getTeamLeague(id: $id) {
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
export const listTeamLeagues = /* GraphQL */ `
  query ListTeamLeagues(
    $filter: ModelTeamLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        leagueID
        team {
          id
          name
          createdAt
          updatedAt
        }
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayerGame = /* GraphQL */ `
  query GetPlayerGame($id: ID!) {
    getPlayerGame(id: $id) {
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
export const listPlayerGames = /* GraphQL */ `
  query ListPlayerGames(
    $filter: ModelPlayerGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        gameID
        player {
          id
          name
          createdAt
          updatedAt
        }
        game {
          id
          name
          leagueId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayerLeague = /* GraphQL */ `
  query GetPlayerLeague($id: ID!) {
    getPlayerLeague(id: $id) {
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
export const listPlayerLeagues = /* GraphQL */ `
  query ListPlayerLeagues(
    $filter: ModelPlayerLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        leagueID
        player {
          id
          name
          createdAt
          updatedAt
        }
        league {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
