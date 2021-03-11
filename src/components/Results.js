import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  font-size: 24px;
  align-self: baseline;
  h1 {
    font-size: 24px;
  }
  h1:last-of-type {
    font-size: 24px;
    margin-bottom: 50px;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    margin-top: 20px;
  }
`;
const Answer = styled.div`
  color: #767676;
  text-align: left;
  max-width: 500px;
  display: flex;
  margin-bottom: 20px;
  span:last-of-type {
    margin-left: 40px;
  }
`;
const AnswerStatus = styled.div`
  display: inline-block;
  min-width: 40px;
  text-align: center;
  height: 100%;
  font-size: 30px;
  vertical-align: top;
  line-height: 24px;
`;

const Results = ({ questions, results, onClickPlayAgain }) => {
  // Filter correct (true) answers, converting object to boolean using !!key
  const totalCorrectAnswers = Object.values(results).filter((key) => !!key).length;

  return (
    <ResultWrapper>
      <h1>You scored</h1>
      <h1>{`${totalCorrectAnswers} / ${Object.keys(results).length}`}</h1>
      {questions.map((row, i) => (
        <Answer key={row.question}>
          <AnswerStatus>{results[i] ? '+' : '-'}</AnswerStatus>
          <span dangerouslySetInnerHTML={{ __html: row.question }} />
        </Answer>
      ))}
      <a href="#" onClick={onClickPlayAgain}>
        Play Again?
      </a>
    </ResultWrapper>
  );
};

Results.propTypes = {
  onClickPlayAgain: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  results: PropTypes.object.isRequired
};

export default Results;
