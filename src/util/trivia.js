import { push } from 'react-router-redux';
import config from '../configurations/config';
import getQuestions from './getQuestions';

export const Answer = (data) => (dispatch, getState) => {
  const {
    app: { currentIndex, questions }
  } = getState();

  if (currentIndex + 1 >= questions.length) {
    dispatch(push('/results'));
    dispatch({
      type: config.constants.ANSWER,
      data
    });

    return;
  }

  dispatch({
    type: config.constants.ANSWER,
    data
  });
};

export const playAgain = (data) => (dispatch) => {
  dispatch({
    type: config.constants.PLAY_AGAIN,
    data
  });
  dispatch(getQuestions());
};

const handleClickAnswer = (state, action) => {
  const { questions, results, currentIndex } = state;
  const answer = action.data;
  const currentQuestion = questions[currentIndex];
  const correctAnswer = currentQuestion.correct_answer === 'True';
  const isCorrect = correctAnswer === answer;

  const updatedResults = Object.assign({}, results, {
    [currentIndex]: isCorrect
  });
  return Object.assign({}, state, {
    results: updatedResults,
    currentIndex: currentIndex + 1
  });
};

const initialState = {
  questions: null,
  results: null,
  currentIndex: 0
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case config.constants.GET_QUESTIONS:
      return Object.assign({}, state, { questions: action.data });
    case config.constants.ANSWER:
      return handleClickAnswer(state, action);
    case config.constants.PLAY_AGAIN:
      return initialState;
    default:
      return state;
  }
}
