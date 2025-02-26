import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
query GetAllPosts($page: Int!, $limit: Int!) {
  getAllPosts(page: $page, limit: $limit) {
    data {
      author {
        fname
        lname
        id
      }
      title
      id
      content
    }
    totalCount
  }
}
`;