import { gql } from 'apollo-boost'

export const GET_TWEETS = gql`
  query GetTweets {
    tweets {
      id
      content
      createdAt
    }
  }
`

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      handle
    }
  }
`
