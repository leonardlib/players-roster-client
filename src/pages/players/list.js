import React from 'react';
import { useQuery } from '@apollo/client';
import {
    GET_ALL_PLAYERS
} from "../../data/queries/players";

const PlayersList = () => {
    const { loading, error, data } = useQuery(GET_ALL_PLAYERS);

    return (
        <div className="container">
            {
                loading &&
                <p>Loading players...</p>
            }
            {
                error &&
                <p>Error getting players</p>
            }
            {
                !loading && !error &&
                <ul>
                    {
                        data?.allPlayers?.map((player, key) =>
                            <li key={key}>
                                <p>
                                    {player?.jerseyNumber} - {player?.team?.name} - {player?.fullName}
                                </p>
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    )
};

export default PlayersList;
