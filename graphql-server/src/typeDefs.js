const { gql } = require('apollo-server')

module.exports = gql`

  type ExposureFactors {
    val3: Float!
    val5: Float!
  }

  type Query {
    exposure(personId: Float!): ExposureFactors!
  }
`
