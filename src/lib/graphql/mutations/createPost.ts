import { gql } from '@apollo/client';

export const CREATE_POST_MUTATION = gql`
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    authorId
    content
    createdAt
    createdById
    id
    title
    updatedAt
    updatedById
  }
}
`;