module.exports = {
  Query: {
    exposure: async (_parent, args, context) => {
      const { MockEntitiesApi } = context.dataSources
      const { val1, val2 } = await MockEntitiesApi.getPersonDetails(args.personId)
      const { val3 } = await MockEntitiesApi.getFacilityDetails(val1)
      const { val5 } = await MockEntitiesApi.getExposureDetails(val2)

      return {
        val3,
        val5,
      }
    }
  },
};
