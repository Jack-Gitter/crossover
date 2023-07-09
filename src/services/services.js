import axios from "axios";


// make an api call to get the rosters of all current nfl teams 
// then just randomly pick a team to start, then randomly pick another team and see if they share a player
// keep doing this to assign the teams, then lightwork
export const generateValidFootballTeamCombinations = async () => {
        return [[Math.floor(Math.random() * 10), 
                                Math.floor(Math.random() * 10), 
                                Math.floor(Math.random() * 10)],
                         [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]]
}

export const checkFootballPlayer = async () => {
}
