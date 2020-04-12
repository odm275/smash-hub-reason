/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          body
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          body
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          body
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      body
      tags
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      body
      tags
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      body
      tags
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
