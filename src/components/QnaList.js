import React from "react";
import qnalist from "../data/qna";
import { useState } from "react";

const QnaList = () => {
  const [list, setList] = useState(qnalist);

  const ListOfQna = (props) => {
    //* this state is belogs to "ListOfQna" so we have not to use outside this component
    //! if we use outside then it will change all question state and show us all answers
    const [show, setShow] = useState(false);

    const { question, answer } = props;
    return (
      <>
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            gap: "0.6rem",
            backgroundColor: "#d9d8d9",
            padding: "1rem",
            borderRadius: "1.2rem",
          }}
        >
          <p
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "➖" : "➕"}
          </p>
          <h4>{question}</h4>
        </div>
        <div
          style={{
            maxWidth: "28rem",
            minWidth: "28rem",
            padding: "0.4rem",
            position: "relative",
            left: "2.7rem",
          }}
        >
          <p>{show && answer}</p>
        </div>
        <br />
      </>
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "30rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            borderRadius: "1rem 1rem 1rem 1rem",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <h1>React Questions</h1>
          <br />
          <div>
            {list.map((curEle) => {
              // const { id, question, answer } = curEle; // we can use this way and in return type all or use spread operator
              const { id } = curEle;
              return <ListOfQna key={id} {...curEle} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QnaList;
