const clubhouse = require("../clubhouse.app");

module.exports = {
  props: {
    clubhouse,
  },
  methods: {
    /**
     * This method takes the result from performing a validation with the `validate.js` library and
     *  will generate validation messages accordingly. If the validation results contain only one
     * entry, the same message contained in the result is returned, for multiple results, the
     * messages are concatenated.
     * @params {String} validationResult - An object containing validation results from the
     * `validate.js`library.
     * @returns { validationMessages: string } String with validation messages concatenated, if the
     *  input had multiple validation messages, or one validation message when the validation had
     * one result.
     */
    getValidationMessage(validationResult) {
      let validationResultKeys = Object.keys(validationResult);
      let validationMessages;
      if (validationResultKeys.length == 1) {
        validationMessages = validationResult[validationResultKeys[0]];
      } else {
        validationMessages =
          "Parameters validation failed with the following errors:\t";
        validationResultKeys.forEach(
          (validationResultKey) =>
            (validationMessages += `${validationResult[validationResultKey]}\t`),
        );
      }
      return validationMessages;
    },
    /**
     * This method iterates over the generator results returned by the `searchStories` method and
     *  wraps them into an array with all the search records yielded.
     * @params {String} generator - A generator object from the `searchStories` method.
     * @returns { searchStories: array } The search stories generated by the `searchStories`
     * method wrapped into an array.
     */
    async getGeneratorResults(generator) {
      const searchStories = [];
      let searchStoryResult;
      do {
        searchStoryResult = await generator.next();
        if (searchStoryResult.value) {
          searchStories.push(searchStoryResult.value);
        }
      } while (!searchStoryResult.done);
      return searchStories;
    },
  },
};