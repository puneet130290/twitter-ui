import { gql } from 'apollo-boost'

export const CREATE_TWEET = gql`
  mutation CreateTweet($content: String, $userId: ID, $commentedOn: ID) {
    tweet: createTweet(
      tweet: { userId: $userId, content: $content, commentedOn: $commentedOn }
    ) {
      userId
    }
  }
`
