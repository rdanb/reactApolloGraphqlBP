const { gql } = require('apollo-server')

module.exports = gql`

  type ExposureFactors {
    val3: Int!
    val5: Int!
  }

  type Query {
    exposure(personId: Int!): ExposureFactors!
  }
`
