import { CContainer, CButton } from "@coreui/react";
import "../../scss/index.css";
import { React } from "react";
import { QuillEditor } from "../../components/index";
import parse from "html-react-parser";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilOptions } from "@coreui/icons";
import Category from "./Category";
import { useSelector } from "react-redux";

const NotesPage = () => {
  const state = useSelector((state) => state.reducer.categoried);
  console.log(state.length); // length karin lai laisu.
  // console.log(state[state.length - 1].value);
  const [value, setvalue] = useState("");
  // const [infervalue, setinfervalue] = useState("deefault");
  const [displayNote, setdisplayNote] = useState(false);
  const [notes, setnotes] = useState([]);
  const [currentEditindex, setcurrentEditindex] = useState(-1);

  const Notes = document.querySelectorAll(".noteOfNoteList");

  const showNoteOnEditorpad = (x, index) => {
    console.log(x);
    // setdisplayNote(false);
    console.log(displayNote);
    console.log(index);
    setcurrentEditindex(index);
    setdisplayNote(!displayNote);
    const updateNote = notes[index].props.children; //remove class..karavan badha ahi kem ke hu jya click karis enej lagu padse naki badhane ane pachhi remove thai jase.. etle.
    if (displayNote === true) {
      Notes[index].classList.add("highlightnote");
      setvalue(updateNote);
      // console.log(value);
      console.log(updateNote);
    } else {
      Notes[index].classList.remove("highlightnote");
      setvalue("");
    }
    // aafunction khali valune undar mokalse..
  };
  const newaddnote = () => {
    console.log(value);
    // console.log(inferValue.props.children);
    if (currentEditindex === -1) {
      if (value !== "<p><br><p>") {
        const inferValue = {
          category: state[state.length - 1].value,
          value: parse(value),
        };
        setnotes((note) => [...note, inferValue]);
        setvalue("");
      }
    } else {
      // console.log(index);
      // setnotes((note) => [...note, note[index]]);
    }
    // console.log(notes);
    // fs.push(parse(value));
    // console.log(fs);
    setcurrentEditindex(-1);
  };

  // const handleChange = (e) => {
  //   console.log("subimt", e);
  // };
  return (
    <>
      <div className="d-flex">
        <CContainer className="noteList">
          <div className="d-grid gap-2">
            <CButton
              className="AddNotebutton fw-semibold fs-5"
              onClick={newaddnote}
            >
              Add New Notes
            </CButton>
          </div>
          {notes.map((note, index) => (
            <div
              key={index}
              className="noteOfNoteList d-flex justify-content-between border-bottom"
              onClick={() => showNoteOnEditorpad("select", index)}
            >
              <div className="noteOfNoteListContent">
                <h4>{note.category}</h4>
                <p>{note.value}</p>
              </div>
              <div className="noteOfNoteListdate_icon">
                <CIcon icon={cilOptions} />
                <p className="saveNoteOnDate">00/00</p>
              </div>
            </div>
          ))}
          <div
            className="noteOfNoteList d-flex justify-content-between border-bottom"
            onClick={showNoteOnEditorpad}
          >
            <div className="noteOfNoteListContent">
              <h4>header content</h4>
              <p>content notes</p>
            </div>
            <div className="noteOfNoteListdate_icon">
              <CIcon icon={cilOptions} />
              <p className="saveNoteOnDate">01/00</p>
            </div>
          </div>
          {/* {fs.map((i) => (
            <div>{i}</div>
          ))} */}
        </CContainer>
        <CContainer className="noteEditor">
          <QuillEditor HandleChange={setvalue} value={value} />
          {/* <QuillEditor value={value} /> */}
        </CContainer>
      </div>
      <div>{currentEditindex}</div>
    </>
  );
};

export default NotesPage;
