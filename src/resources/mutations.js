import { gql } from 'apollo-boost'

export const CREATE_TWEET = gql`
  mutation CreateTweet($content: String, $userId: ID) {
    tweet: createTweet(tweet: { userId: $userId, content: $content }) {
      userId
    }
  }
`
