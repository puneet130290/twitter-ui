import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  GET_TWEETS,
  GET_USERS,
  GET_TWEET,
  FIND_TWEETS,
} from '../resources/queries'
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

export function useGetTweet(id) {
  const { loading, error, data } = useQuery(GET_TWEET, { variables: { id } })
  return { loading, error, data }
}

export function useFindTweets(filter) {
  const { loading, error, data } = useQuery(FIND_TWEETS, {
    variables: { filter },
  })
  return { loading, error, data }
}

//Mutation Hooks
export function useCreateTweet(reset) {
  const [createTweet, { loading, error, data }] = useMutation(CREATE_TWEET, {
    refetchQueries: () => {
      return [
        {
          query: GET_TWEETS,
        },
      ]
    },
    onCompleted: () => reset(),
  })

  const saveTweet = tweet => createTweet({ variables: { ...tweet } })

  return [saveTweet, { loading, error, data }]
}

export function useCreateComment(filter) {
  const [createTweet, { loading, error, data }] = useMutation(CREATE_TWEET, {
    refetchQueries: () => {
      return [
        {
          query: FIND_TWEETS,
          variables: { filter },
        },
      ]
    },
  })

  const saveComment = comment => createTweet({ variables: { ...comment } })

  return [saveComment, { loading, error, data }]
}
