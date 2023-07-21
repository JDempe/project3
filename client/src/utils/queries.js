import { gql } from '@apollo/client';

export const QUERY_PHOTOS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PHOTOS = gql`
  {
    photos {
      _id
      url
      title
      description
      # createdBy {
      #   _id
      #   username
      # }
      likes
      #   comments {
      #     _id
      #     text
      #     createdAt
      #     createdBy {
      #       _id
      #       username
      #     }
      # }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
