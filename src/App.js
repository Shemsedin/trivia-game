import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Answer, playAgain } from './util/trivia';
import getQuestions from './util/getQuestions';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';
import NotFound from './components/NotFound';

class App extends Component {
  static propTypes = {
    allQuestions: PropTypes.func.isRequired,
    onClickPlayAgain: PropTypes.func.isRequired,
    onClickAnswer: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
    currentQuestion: PropTypes.array,
    results: PropTypes.object
  };

  static defaultProps = {
    currentQuestion: null,
    results: null
  };

  componentDidMount() {
    this.props.allQuestions();
  }

  render() {
    const { questions, results, onClickPlayAgain, onClickAnswer, currentIndex } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact component={NotFound} />
          <Route exact path="/" component={Home}  />
          <Route
            exact
            path="/quiz"
            render={() =>
              questions ? (
                <Quiz
                  currentQuestion={questions[currentIndex]}
                  questionIndex={currentIndex}
                  questionsLength={questions.length}
                  onClickAnswer={onClickAnswer}
                />
              ) : null
            }
          />
          <Route
            path="/results"
            render={() =>
              questions && results ? (
                <Results
                  questions={questions}
                  results={results}
                  onClickPlayAgain={onClickPlayAgain}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentIndex: state.app.currentIndex,
    questions: state.app.questions,
    results: state.app.results
  };
}

function mapDispatchToProps(dispatch) {
  // Mapping dispatch props,  e.g. allQuestions getting the questions from the opentdb API and making it them available here.
  return bindActionCreators(
    {
      allQuestions: getQuestions,
      onClickPlayAgain: playAgain,
      onClickAnswer: Answer
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
