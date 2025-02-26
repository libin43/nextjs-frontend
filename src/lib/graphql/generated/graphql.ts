/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: UserLoginData;
};

export type Author = {
  __typename?: 'Author';
  fname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lname?: Maybe<Scalars['String']['output']>;
};

export type CreatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fname: Scalars['String']['input'];
  lname: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
};

export type LoginInput = {
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  deletePost: Post;
  login: AuthPayload;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type PostById = {
  __typename?: 'PostById';
  author?: Maybe<Author>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type PostList = {
  __typename?: 'PostList';
  data: Array<PostById>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllPosts: PostList;
  getAllUsers: UserList;
  getPost: PostById;
  getUser: User;
  hello: Scalars['String']['output'];
};


export type QueryGetAllPostsArgs = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllUsersArgs = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  role?: InputMaybe<UserRole>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lname?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lname: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserList = {
  __typename?: 'UserList';
  data: Array<User>;
  totalCount: Scalars['Int']['output'];
};

export type UserLoginData = {
  __typename?: 'UserLoginData';
  fname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lname: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}
