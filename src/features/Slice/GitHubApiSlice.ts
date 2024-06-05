import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Repo {
  stargazers_count: number
  name: string
  length: number
}

interface UserApiResponse {
  login: string
}

export const githubApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  reducerPath: "usersApi",

  tagTypes: ["Users", "Repos"],
  endpoints: build => ({
    getUsers: build.query<UserApiResponse, string>({
      query: nickname => `users/${nickname}`,

      providesTags: ["Users"],
    }),
    getNumsOfRepos: build.query<Repo, string>({
      query: nickname => `users/${nickname}/repos`,
      providesTags: ["Users"],
    }),
    getRepos: build.query<Repo, string>({
      query: nicknameAndRepo => `repos/${nicknameAndRepo}`,
      providesTags: ["Repos"],
    }),
  }),
})

export const { useGetUsersQuery, useGetNumsOfReposQuery, useGetReposQuery } =
  githubApiSlice
