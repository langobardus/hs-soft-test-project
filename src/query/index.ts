import { gql } from '@apollo/client'

export const GET_EXTERNAL_DATA = gql`
  query {
    data: continents {
      name
      children: countries {
        name
        children: languages {
          name
        }
      }
    }
  }
`
