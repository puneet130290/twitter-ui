import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { GET_TWEETS, GET_USERS } from '../resources/queries'
import { CREATE_TWEET } from '../resources/mutations'

//Query Hooks
export function useGetTweets() {
  const { loading, error, data } = useQuery(GET_TWEETS)
  return { loading, error, data }
}

export function useGetUsers() {
  const { loading, error, data } = useQuery(GET_USERS)
  return { loading, error, data }
}

//Mutation Hooks
export function useCreateTweet() {
  const [createTweet, { loading, error, data }] = useMutation(CREATE_TWEET, {
    refetchQueries: () => {
      return [
        {
          query: GET_TWEETS,
        },
      ]
    },
  })

  const saveTweet = ({ userId, content }) =>
    createTweet({ variables: { userId, content } })

  return [saveTweet, { loading, error, data }]
}
