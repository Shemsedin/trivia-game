import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuizContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  h1,
  p,
  a {
    font-size: 24px;
  }
`;
const QuestionsWrapper = styled.div``;
const Question = styled.div`
  font-size: 24px;
  border: 1px solid black;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  span {
    max-width: 100%;
    word-wrap: break-word;
  }
`;
const QuestionIndex = styled.div`
  margin-top: 20px;
`;
const AnswerButtons = styled.div`
  button {
    width: 80px;
    height: 40px;
    font-size: 18px;
  }
  button:first-of-type {
    margin-right: 15px;
  }
`;

const Quiz = ({ onClickAnswer, currentQuestion, questionIndex, questionsLength }) => (
  <QuizContent>
    <h1>{currentQuestion.category}</h1>
    <QuestionsWrapper>
      <Question>
        <span dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      </Question>
    </QuestionsWrapper>
    <QuestionIndex>{`${questionIndex + 1} of ${questionsLength}`}</QuestionIndex>
    <AnswerButtons>
      <button onClick={() => onClickAnswer(true)}>True</button>
      <button onClick={() => onClickAnswer(false)}>False</button>
    </AnswerButtons>
  </QuizContent>
);

Quiz.propTypes = {
  onClickAnswer: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questionsLength: PropTypes.number.isRequired
};

export default Quiz;
