import { gql } from 'apollo-boost'

export const GET_TWEETS = gql`
  query GetTweets {
    tweets {
      id
      content
      commentedOn
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

export const GET_TWEET = gql`
  query GetTweet($id: ID!) {
    tweet: tweet(id: $id) {
      content
      createdAt
    }
  }
`

export const FIND_TWEETS = gql`
  query FindTweets($filter: JSON!) {
    tweets: findTweets(filter: $filter) {
      content
      createdAt
    }
  }
`
