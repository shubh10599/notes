import { CContainer, CButton } from "@coreui/react";
import "../../scss/index.css";
import { React } from "react";
import { QuillEditor } from "../../components/index";
import parse from "html-react-parser";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilList, cilOptions } from "@coreui/icons";

const NotesPage = () => {
  const [value, setvalue] = useState("");
  const [infervalue, setinfervalue] = useState();
  const [displayNote, setdisplayNote] = useState(false);

  const showNoteOnEditorpad = () => {
    // console.log("helo");
    console.log(displayNote);
    setdisplayNote(!displayNote);
    const notes = document.querySelector(".noteOfNoteList");
    // {
    // displayNote && notes.classList.add("highlightnote");
    // }
    if (displayNote == true) {
      notes.classList.add("highlightnote");
    } else {
      notes.classList.remove("highlightnote");
    }
  };
  return (
    <>
      <div className="d-flex">
        <CContainer className="noteList">
          <div className="d-grid gap-2">
            <CButton
              // color="outline-primary"
              className="AddNotebutton fw-semibold fs-5"
              onClick={() => setinfervalue(parse(value))}
            >
              Add New Notes
            </CButton>
          </div>
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
              <p className="saveNoteOnDate">00/00</p>
            </div>
          </div>
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
        </CContainer>
        <CContainer className="noteEditor">
          <QuillEditor handleChange={setvalue} value={value} />
        </CContainer>
      </div>
      {/* only for information perpose.. */}
      <div>{infervalue}</div>
    </>
  );
};

export default NotesPage;
