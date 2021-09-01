import { gql } from "@apollo/client";

export const GET_USER_ID = gql`
  query GET_USER_ID($email: String!) {
    getUserID(email: $email) {
      id
      name
    }
  }
`;

export const GET_USER = gql`
  query GET_USER($displayName: String!) {
    getUserData(displayName: $displayName) {
      id
      name
      displayName
      image
      bannerUrl
      bio
      created_at
      numFollowing
      numFollowers
      numContributions
      online
    }
  }
`;

export const GET_USER_CONTENT = gql`
  query GET_USER_CONTENT($displayName: String!, $currentUserId: String!) {
    getUserContent(displayName: $displayName, currentUserId: $currentUserId) {
      id
      name
      displayName
      image
      content {
        id
        content_text
        userId
        image_id
        created_at
        numLikes
        numComments
        gif_url
        favourite
        tags {
          hashtag {
            id
            text
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_CONTENT = gql`
  query GET_SINGLE_CONTENT($userId: String!, $contentId: String!) {
    getSingleUserContent(userId: $userId, contentId: $contentId) {
      id
      content_text
      userId
      image_id
      created_at
      numLikes
      numComments
      gif_url
      tags {
        hashtag {
          id
          text
        }
      }
      user {
        name
        displayName
        image
      }
    }
  }
`;

export const GET_COMMENTS_OF_CONTENT = gql`
  query GET_COMMENTS_OF_CONTENT($contentId: String!, $currentUserId: String!) {
    getCommentsOfContent(contentId: $contentId, currentUserId: $currentUserId) {
      id
      comment_text
      userId
      created_at
      numLikes
      gif_url
      favourite
      user {
        name
        displayName
        image
      }
    }
  }
`;

export const GET_CONTENT_LIKE_STATUS = gql`
  query GET_CONTENT_LIKE_STATUS($contentId: String!, $currentUserId: String!) {
    getContentLikeStatus(contentId: $contentId, currentUserId: $currentUserId) {
      favourite
    }
  }
`;

export const CHECK_FOR_AVAILABLE_USERNAME = gql`
  query CHECK_FOR_AVAILABLE_USERNAME($displayName: String!) {
    checkForAvailableUsername(displayName: $displayName)
  }
`;
