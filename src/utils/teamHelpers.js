import nfl_teams from '../data/nfl_teams'

export const getByConference = conf => nfl_teams.filter(t => t.conference === conf)

export const getByConfAndDivision = (confAndDivision) => {
  const [conference, division] = confAndDivision.split(' ')

  return nfl_teams.filter(t => t.conference === conference && t.division === division)
}

export const getTeam = teamId => nfl_teams.find(t => t.id === teamId)