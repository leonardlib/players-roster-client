import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        authToken(username: $email, password: $password) {
            token
        }
    }
`;
