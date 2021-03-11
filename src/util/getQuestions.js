import config from '../configurations/config';

/**
 * Prepare the data for dispatch. We need to set the type see dispatch function
 * at redux.js.
 *
 * @param data
 * @returns {{data: *, type: string}}
 *   Returning an object literal, type and the questions.
 */
export const questions = (data) => ({
  type: config.constants.GET_QUESTIONS,
  data
});

const getQuestions = () => (dispatch) => {
  fetch(config.constants.QUESTIONS_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      dispatch(questions(data.results));
    });
};

export default getQuestions;
