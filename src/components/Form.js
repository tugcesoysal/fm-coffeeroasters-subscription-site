import React, { useState, useEffect } from "react";
import { questions } from "./Questions";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [openQuestions, setOpenQuestions] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const scrollToNextQuestion = () => {
      if (currentQuestionIndex < questions.length) {
        const currentElement = document.getElementById(
          `question-${currentQuestionIndex}`,
        );
        if (currentElement) {
          currentElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        const createButton = document.getElementById("create-button");
        if (createButton) {
          createButton.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    scrollToNextQuestion();
  }, [currentQuestionIndex]);

  if (modalIsOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions((prevState) => {
      const newSelectedOptions = [...prevState];
      newSelectedOptions[questionIndex] = optionIndex;
      return newSelectedOptions;
    });

    if (questionIndex === 2 && selectedOptions[0] === 0) {
      setCurrentQuestionIndex(questionIndex + 2);
    } else {
      setCurrentQuestionIndex(questionIndex + 1);
    }

    setOpenQuestions((prevState) => {
      const newOpenState = [...prevState];

      if (selectedOptions[0] === 0 && questionIndex === 2) {
        newOpenState[questionIndex + 2] = true;
      } else {
        newOpenState[questionIndex + 1] = true;
      }
      return newOpenState;
    });

    if (questionIndex === 0 && optionIndex === 0) {
      setOpenQuestions((prevState) => {
        const newOpenState = [...prevState];
        newOpenState[3] = false;
        return newOpenState;
      });
      setSelectedOptions((prevState) => {
        const newSelectedOptions = [...prevState];
        newSelectedOptions[3] = null;
        return newSelectedOptions;
      });
    }
  };

  const allQuestionsAnswered = selectedOptions
    .slice(0, 4)
    .every((option, index) => {
      if (index === 3 && selectedOptions[0] === 0) {
        return true;
      } else {
        return option !== null;
      }
    });

  const orderSummary = (
    <div>
      <h4 className="summary">
        “I drink my coffee {selectedOptions[0] === 0 ? "using" : "as"}{" "}
        <span>
          {selectedOptions[0] !== null
            ? questions[0].options[selectedOptions[0]].title
            : " _____ "}
        </span>
        , with a{" "}
        <span>
          {selectedOptions[1] !== null
            ? questions[1].options[selectedOptions[1]].title
            : " _____ "}
        </span>{" "}
        type of bean.{" "}
        <span>
          {selectedOptions[2] !== null
            ? questions[2].options[selectedOptions[2]].title
            : " _____ "}
        </span>{" "}
        {selectedOptions[0] !== 0 && (
          <>
            {" ground ala "}
            <span>
              {selectedOptions[3] !== null
                ? questions[3].options[selectedOptions[3]].title
                : " _____ "}
            </span>
          </>
        )}
        , sent to me{" "}
        <span>
          {selectedOptions[4] !== null
            ? questions[4].options[selectedOptions[4]].title
            : " _____ "}
        </span>
        .”
      </h4>
    </div>
  );

  const createPlan = () => {
    setModalIsOpen(true);
  };

  const navigate = useNavigate();

  const reset = () => {
    setModalIsOpen(false);
    setOpenQuestions([true, false, false, false, false]);
    setSelectedOptions(new Array(questions.length).fill(null));
    setCurrentQuestionIndex(0);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const monthlyPrice = () => {
    if (selectedOptions[2] === 0) {
      if (selectedOptions[4] === 0) {
        return 7.2 * 4;
      } else if (selectedOptions[4] === 2) {
        return 9.6 * 2;
      } else {
        return 12.0;
      }
    } else if (selectedOptions[2] === 1) {
      if (selectedOptions[4] === 0) {
        return 13 * 4;
      } else if (selectedOptions[4] === 2) {
        return 17.5 * 2;
      } else {
        return 22.0;
      }
    } else {
      if (selectedOptions[4] === 0) {
        return 22 * 4;
      } else if (selectedOptions[4] === 2) {
        return 32 * 2;
      } else {
        return 42.0;
      }
    }
  };

  return (
    <>
      <div className="form">
        <ul className="form-headers-list">
          {questions.map((question, index) => (
            <li
              key={index}
              className={`${currentQuestionIndex === index ? "active" : ""} ${
                index === 3 && selectedOptions[0] === 0 ? "disabled" : ""
              }`}
            >
              <span>{`0${index + 1}`}</span>
              <h4>{question.header}</h4>
            </li>
          ))}
        </ul>
        <div className="form-content">
          {questions.map((question, questionIndex) => (
            <div
              id={`question-${questionIndex}`}
              key={questionIndex}
              className={`question ${
                selectedOptions[0] === 0 && questionIndex === 3
                  ? "disabled"
                  : ""
              }`}
            >
              <h2>
                {question.title}
                <svg
                  className={openQuestions[questionIndex] ? "opened-icon" : ""}
                  width="19"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </h2>
              {openQuestions[questionIndex] && (
                <div className="options">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`option-card ${
                        selectedOptions[questionIndex] === optionIndex
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleOptionSelect(questionIndex, optionIndex)
                      }
                    >
                      <h4>{option.title}</h4>
                      <p>{option.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="order-summary">
            <p>Order Summary</p>
            {orderSummary}
          </div>
          <button
            id="create-button"
            className="subscribe__button"
            disabled={!allQuestionsAnswered}
            onClick={createPlan}
          >
            Create my plan!
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-card">
            <h2 className="modal-header">Order Summary</h2>
            <div className="modal-summary">
              <h4>{orderSummary}</h4>
              <p>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
              <div className="modal-footer">
                <div className="desktop">
                  <h3>{`$${monthlyPrice().toFixed(2)}/mo`}</h3>
                  <button onClick={reset}>Checkout</button>
                </div>
                <div className="mobile">
                  <button onClick={reset}>
                    Checkout - <span>{`$${monthlyPrice().toFixed(2)}/mo`}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
