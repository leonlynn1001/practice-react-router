import useFetch from "./useFetch";

export default function useTeamArticle(team){
    return useFetch("/article","POST",JSON.stringify({team}))
}