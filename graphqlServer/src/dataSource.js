const { RESTDataSource } = require('apollo-datasource-rest')

class MockEntitiesApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getPersonDetails(id) {
    return this.get(`person/${id}`)
  }

  async getFacilityDetails(id) {
    return this.get(`facility/${id}`)
  }

  async getExposureDetails(id) {
    return this.get(`exposure/${id}`)
  }
}

module.exports = MockEntitiesApi
