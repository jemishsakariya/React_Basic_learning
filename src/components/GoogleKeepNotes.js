import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "../style/GoogleKeepNotes.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 2rem",
          backgroundColor: "#FFD95A",
        }}
      >
        <h2>Keep Note</h2>
      </div>
    </>
  );
};

const CreateNote = (props) => {
  const [expend, setExpend] = useState(false);

  const expendIt = () => {
    setExpend(true);
  };

  const closeIt = () => {
    setExpend(false);
  };

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    const { value, name } = e.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div>
        <form className="form">
          {expend ? (
            <input
              className="input"
              type="text"
              name="title"
              onChange={inputEvent}
              value={note.title}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <p>
            <textarea
              className="textarea"
              rows={"5"}
              cols={""}
              name="content"
              value={note.content}
              onChange={inputEvent}
              placeholder="Write a Note..."
              onClick={expendIt}
              onDoubleClick={closeIt}
            />
          </p>
          {expend ? (
            <Button className="add_btn" onClick={addEvent}>
              <AddIcon
                style={{ color: "#FFD95A", width: "30px", height: "30px" }}
              />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

const Note = ({ title, content, deleteItem, id }) => {
  const deleteNote = () => {
    deleteItem(id);
  };

  return (
    <>
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <Button className="deletebtn" onClick={deleteNote}>
          <DeleteIcon
            style={{ color: "#FFD95A", width: "30px", height: "30px" }}
          />
        </Button>
      </div>
    </>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "sticky",
          top: "43rem",
        }}
      >
        <p>copyright © {year}</p>
      </footer>
    </>
  );
};

const GoogleKeepNotes = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <Header />
        <CreateNote passNote={addNote} />
        {/* <Note /> */}
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default GoogleKeepNotes;
