/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague {
    onCreateLeague {
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
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague {
    onUpdateLeague {
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
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague {
    onDeleteLeague {
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
export const onCreateTeamPlayer = /* GraphQL */ `
  subscription OnCreateTeamPlayer {
    onCreateTeamPlayer {
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
export const onUpdateTeamPlayer = /* GraphQL */ `
  subscription OnUpdateTeamPlayer {
    onUpdateTeamPlayer {
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
export const onDeleteTeamPlayer = /* GraphQL */ `
  subscription OnDeleteTeamPlayer {
    onDeleteTeamPlayer {
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
export const onCreateTeamGame = /* GraphQL */ `
  subscription OnCreateTeamGame {
    onCreateTeamGame {
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
export const onUpdateTeamGame = /* GraphQL */ `
  subscription OnUpdateTeamGame {
    onUpdateTeamGame {
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
export const onDeleteTeamGame = /* GraphQL */ `
  subscription OnDeleteTeamGame {
    onDeleteTeamGame {
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
export const onCreateTeamLeague = /* GraphQL */ `
  subscription OnCreateTeamLeague {
    onCreateTeamLeague {
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
export const onUpdateTeamLeague = /* GraphQL */ `
  subscription OnUpdateTeamLeague {
    onUpdateTeamLeague {
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
export const onDeleteTeamLeague = /* GraphQL */ `
  subscription OnDeleteTeamLeague {
    onDeleteTeamLeague {
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
export const onCreatePlayerGame = /* GraphQL */ `
  subscription OnCreatePlayerGame {
    onCreatePlayerGame {
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
export const onUpdatePlayerGame = /* GraphQL */ `
  subscription OnUpdatePlayerGame {
    onUpdatePlayerGame {
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
export const onDeletePlayerGame = /* GraphQL */ `
  subscription OnDeletePlayerGame {
    onDeletePlayerGame {
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
export const onCreatePlayerLeague = /* GraphQL */ `
  subscription OnCreatePlayerLeague {
    onCreatePlayerLeague {
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
export const onUpdatePlayerLeague = /* GraphQL */ `
  subscription OnUpdatePlayerLeague {
    onUpdatePlayerLeague {
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
export const onDeletePlayerLeague = /* GraphQL */ `
  subscription OnDeletePlayerLeague {
    onDeletePlayerLeague {
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
