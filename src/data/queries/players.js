import { gql } from '@apollo/client';

export const GET_ALL_PLAYERS = gql`
    query {
        allPlayers {
            id
            firstName
            lastName
            jerseyNumber
            fullName
            team {
                id
                name
            }
        }
    }
`;
