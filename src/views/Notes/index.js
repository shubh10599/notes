import {
  CContainer,
  CFormSelect,
  CCardBody,
  CCard,
  CCardText,
  CInputGroup,
  CFormInput,
} from "@coreui/react";
import "../../scss/index.css";
import { React, useEffect } from "react";
import { QuillEditor } from "../../components/index";
import parse from "html-react-parser";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash } from "@coreui/icons";
// import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import {
  addNote,
  deleteNote,
  getNotes,
  postNote,
  removeNote,
  updateNote,
} from "src/redux/actions";
import LodingContainer from "src/components/loding";
import { toast, ToastContainer } from "react-toastify";

const NotesPage = () => {
  const { notes, categories, loading, success, error } = useSelector(
    (state) => ({
      notes: state.reducer.notes,
      categories: state.reducer.categories,
      loading: state.reducer.loading,
      success: state.reducer.success,
      error: state.reducer.error,
    })
  );
  // console.log(notes, categories, loading, success, error);
  // console.log(state.reducer);
  // console.log(state.categoried[0]);
  const dispatch = useDispatch();
  // console.log(state.length); // length karin lai laisu.
  // console.log(state[state.length - 1].value);
  const [value, setvalue] = useState("");
  const [filterNotes, setFilterNotes] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(false); // aa sudharvu padse.
  const [idOfCategory, setIdOfCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "631ddf0f2956e5400430b701"
  );
  const [titleValue, setTitleValue] = useState("");
  // const [selecCategory, setSelecCategory] = useState("");
  // const [updateTime, setUpdateTime] = useState("");
  // console.log(titleValue);
  const [editItem, setEditItem] = useState("");
  const displayNote = true;
  // const [notes, setnotes] = useState([]);
  const [currentEditindex, setcurrentEditindex] = useState("");
  // console.log(filterNotes);
  useEffect(() => {
    dispatch(getNotes()); // AHI THI DIRECT ACTION MA CALL VAGSE.
  }, []);
  useEffect(() => {
    // aa band karel 6.
    const tempNote =
      selectedCategory !== ""
        ? notes.filter((item) => item.categoryId._id === selectedCategory) // hu jyre item.category id karis tyre mare ahi + mukvu padese kemke aa string male che etle..
        : notes;
    // console.log(tempNote[0].category);
    setFilterNotes(tempNote);
    // setFilterNotes(notes);
  }, [notes]);
  useEffect(
    () => {
      if (success !== "") {
        toast(success + "");
      }
      if (error !== "") {
        toast(error + "");
      }
    },
    [success],
    [error]
  );

  const handleClickOnNotes = (index) => {
    console.log(notes);
    const Notes = document.querySelectorAll(".noteOfNoteList");
    // console.log(Notes);
    Notes[currentEditindex]?.classList?.remove("highlightnote");
    setcurrentEditindex("");
    if (displayNote) {
      Notes[index]?.classList?.add("highlightnote");
      setcurrentEditindex(index);
    }
  };
  const newaddnote = (e) => {
    // console.log(state.categoried);
    // console.log(selecCategory);
    // console.log(titleValue);
    let valueCopy = value;
    console.log(valueCopy);
    valueCopy = valueCopy.replaceAll(" ", "");
    valueCopy = valueCopy.replaceAll("<p></p>", "");
    valueCopy = valueCopy.replaceAll("<p><br></p>", "");
    console.log(valueCopy.length);
    if (!value || valueCopy.length < 1) {
      alert("plz enter text in text area");
      // <P></p> aana sivay kaik navu hoy tej aapo..
    } else if (titleValue === "") {
      toast("Title is required");
    } else if (value && toggleSubmit) {
      // dispatch(updateNote);
      // dispatch(
      //   // update mate..
      //   updateNote({
      //     category: idOfCategory,
      //     id: editItem,
      //     value,
      //     updateAt: new Date().toISOString(),
      //   })
      // );
      // return;
      dispatch(
        updateNote({
          noteId: editItem,
          categoryId: idOfCategory,
          content: value,
          modifiedAt: new Date().toISOString(),
        })
      );
      setToggleSubmit(!toggleSubmit);
      setEditItem(null);
      setvalue("");
      // setUpdateTime("");
    } else if (value && titleValue) {
      // console.log("error");
      // console.log(value);
      // let valueCopy = value;
      // valueCopy = valueCopy.replaceAll(" ", "");
      // valueCopy = valueCopy.replaceAll("<p></p>", "");
      // valueCopy = valueCopy.replaceAll("<p><br></p>", "");
      // console.log(valueCopy.length);
      // return;
      const inferValue = {
        // category: state.categoried[state.categoried.length - 1].id // ahi id nai use kari sakto..
        //   ? state.categoried[state.categoried.length - 1].id
        //   : null,                 ahi evu karvanu che ke jyre koi click mna karel hoy tyre default ane jyre add kare category tyre e category ma and koi category par click kare tyre e particular category maj..
        // category: categories[categories.length - 1]
        // ? categories[categories.length - 1].value // search karva mate me ahi change keryo id ni jagya e value
        // : "", // akhi category pass karau.. value ne j compaire karsu jyre aapde category par click karsu tyre..
        // category: selectedCategory,
        // value: value,
        // id: Math.random(),
        // createdAt: new Date().toISOString(),
        // updatedAt: new Date().toISOString(),
        // upper nnu badhu redux vadu hatu..
        title: titleValue,
        content: value,
        categoryId: selectedCategory,
        modifiedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };
      // setnotes((note) => [...note, inferValue]); // ama ane niche dispatch ma bau oto fark che array ma add karvano joie leje..
      console.log(inferValue);
      // dispatch(addNote(inferValue)); // aa backend natu tyr nu 6.
      dispatch(postNote(inferValue));
      setvalue("");
      setTitleValue("");
    } else {
      // console.log(index);
      // setnotes((note) => [...note, note[index]]);
    }
    // console.log(notes);
    // fs.push(parse(value));
    // console.log(fs);
  };
  const searchHandler = (e) => {
    // ahii aapde serach karau e bau mast vastu che ane biju ke jyre aaapde state ni ki value use karvi hoy tyre ene distructing karine pachh use karvani.. peli web jevuj use karu che kahli thodu dimag chalavaun hatu.. have dhire dhire chalse..
    // console.log(e.target.value);

    // console.log(tempNotes);

    // if (selectCategory) {
    //   tempNotes = notes.filter((item) => +selectCategory === item.category);         // aa category vadu baki..
    // }
    // if (selectCategory) {
    //   tempNotes = selectCategory
    //     ? notes.filter((item) => item.category === +selectCategory)
    //     : notes;
    // }
    setFilterNotes(notes);
    const tempNotes = notes.filter(
      (note) =>
        // console.log(note)
        note.content.includes(e.target.value) ||
        note.title.includes(e.target.value)
    );
    // categories.filter((category) => category.value.includes(e.target.value))
    console.log(tempNotes);
    setFilterNotes(tempNotes);
  };

  // const tempcate = categories.map((cat) => console.log(cat.value));
  // aaj rite aapde category mate pan kari sakie ke hu click karis tyre amne eni id apse ane pachi hu filter karais..
  // console.log(notes.map((note) => note.category.id === ));
  // const handleChange = (e) => {
  //   console.log("subimt", e);
  // };
  const selectCategory = (e) => {
    console.log(e.target.value); ///   state ma .
    // const a = document.querySelector(".selectA").value;
    // console.log(a);
    // const sCategory = e.target.value;

    // ahi thi hu tya laijat ane aaj category ma add karvanu kaik karat but ahi value first time ma add nai thati..
    // setSelectedCategory(e.target.value);
    // console.log(selectedCategory);
    // setSelecCategory(e.target.value);
    // console.log(selecCategory); // ahi e.target.value dirct karvanu hatu..
    if (e.target.value === "") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(e.target.value);
    }
    const tempNote =
      e.target.value !== ""
        ? notes.filter((item) => item.categoryId._id === e.target.value) // hu jyre item.category id karis tyre mare ahi + mukvu padese kemke aa string male che etle..
        : notes;
    // console.log(tempNote[0].category);
    setFilterNotes(tempNote);
    // setPredefineCategory(tempNote[0].category);
    // searchHandler();
  };

  // const handleSearch = (e) => {
  //   // const searchQuery = e.target.value;
  //   setSearchValue(e.currentTarget.value);
  //   console.log(searchValue);
  // };

  // const selectCategoryhandler = () => {
  //   const a = document.querySelector(".selectA").value; // je levu hoy te id or value e tya option ma change karvanu rese..
  //   // console.log(a);
  //   setSelectCategory(a);
  //   console.log(+selectCategory);
  //   // selectedCategoriesNotes();
  //   if (selectCategory) {
  //     const selected = notes.filter(
  //       (item) => item.category === +selectCategory
  //     );
  //     setFilterCategoryWise(selected);
  //     // console.log(selected.category);
  //   }
  // };
  // console.log(updateTime);
  const handleClickForUpdateNote = (note) => {
    console.log(note);
    setvalue(note.content);
    setToggleSubmit(!toggleSubmit);
    setIdOfCategory(note.categoryId);
    // setUpdateTime(new Date().toISOString());
    // ahi khali id moklavanu karan ej che ke aapde aaj id ma value ne change karvani che tethi me khali id moklu
    setEditItem(note._id);
    setTitleValue(note.title);
  };
  // setUpdateTime(false);
  const removeNoteHandler = (note) => {
    // remove note handler..
    // console.log(note);
    dispatch(
      deleteNote({
        noteId: note._id,
      })
    );
    // dispatch(removeNote(note));
    setTitleValue("");
    setvalue("");
  };
  // console.log(filterNotes);
  // {
  //   filterNotes.map((item) => {
  //     if (item.categoryId) {
  //       console.log(item);
  //     }
  //   });
  // }
  return (
    <CContainer>
      {/* <span id="second"></span> */}
      <ToastContainer />
      <CContainer className="d-flex">
        {loading && <LodingContainer />}
        <CContainer className="noteList">
          <div className="d-flex justify-content-between gap-2 w-100">
            {/* ahi search and dropdown banne lavanu che ane auto save karvanu che.. */}
            {/* <CButton
              className="AddNotebutton fw-semibold fs-5"
              onClick={newaddnote}
            >
              Add New Notes
            </CButton> */}
            <input type="text" onChange={searchHandler} className="w-75" />
            {/* {categories.map((category) => { */}
            <CFormSelect //  jyre bi select par ki fun use kare to e onchange use karvanu naki onclick ok..
              aria-label="default select example"
              className="w-25 selectA"
              onChange={selectCategory} // ahi thi pela khol je pachhi thase.
            >
              <option value="" selected>
                All
              </option>
              {categories.map(
                (
                  category // shi me change karyo search mste value ma
                ) => (
                  <option value={category.id} key={category.id}>
                    {category.value}
                  </option>
                )
              )}
            </CFormSelect>
          </div>
          {/* {filterNotes.map((item) => console.log(item.category))} aa ni badle mare card joise aa nai chalve.. */}
          {filterNotes.map((note, index) => (
            // console.log(note);
            <CCard
              className="noteOfNoteList border-bottom "
              color="secondary-50 "
              key={note._id}
              onClick={() => handleClickOnNotes(index)}
            >
              <CCardBody className=" d-flex justify-content-between pb-0">
                {/* ahi mane direct category ni value aapi dese.. */}
                <div className="flex-grow-1 break-word">
                  {/* {categories.map(
                    (category) =>
                      category.id === note.categoryId ? category.value : "" // ahi chammge karo search mate..
                  )} */}
                  {note.title}
                  {/* {note._id} */}
                  {parse(note.content)}
                </div>
                <div className="flex-shrink-0">
                  <CIcon
                    icon={cilPencil}
                    className="edit-icon"
                    onClick={() => handleClickForUpdateNote(note)}
                  />
                  <CIcon
                    icon={cilTrash}
                    onClick={() => removeNoteHandler(note)}
                  />
                </div>
              </CCardBody>
              {/* time mate bakii aaje rate karis.. */}
              <CContainer className="saveNoteOnDate">
                {/* // aa baki che.. */}
                {/* <CCardText>
                  Created At:
                  {moment(note.createdAt).format("MMM Do YYYY, h:mm a")}
                </CCardText> */}
                <CCardText>
                  {/* Updated At: */}
                  {/* {moment(note.updateAt).format("MMM Do YYYY, h:mm a")}  aa bandha karu..*/}
                </CCardText>
              </CContainer>
              {/* <CCardBody> */}
              {/* </CCardBody> */}
            </CCard>
            // <div
            //   key={note.id}
            //   className="noteOfNoteList d-flex justify-content-between border-bottom"
            //   onClick={() => handleClickOnNotes(index)}
            // >
            // <div className="noteOfNoteListContent">
            // {/* {categories.map((category) =>
            //   // console.log(category.id === note.category)   ahi koi state lais ne check karais ke e state hase to e block ma jajo naito niche vadu karo.
            //   category.id === note.category ? category.value : ""
            // )} */}
            // {/* <h5>{note.category}</h5> */}
            // {/* <h3>{}</h3>  mare ahi parse karvani hati nai hu jyre add karau tyre.. */}
            // {/* {parse(note.value)}
            //   </div>
            //   <div className="noteOfNoteListdate_icon">
            //     <CDropdown className="w-50">
            //       <CDropdownToggle>
            //         <CIcon icon={cilOptions} />
            //       </CDropdownToggle>
            //       <CDropdownMenu>
            //         <CDropdownItem className="w-50">
            //           <CIcon icon={cilTrash} />
            //         </CDropdownItem>
            //         <CDropdownItem className="w-50">
            //           <CIcon icon={cilPencil} />
            //         </CDropdownItem>
            //       </CDropdownMenu>
            //     </CDropdown>
            //     <p className="saveNoteOnDate">00/00</p>
            //   </div>
            // </div> */}
          ))}
          {/* {fs.map((i) => (
            <div>{i}</div>
          ))} */}
        </CContainer>
        <CContainer className="noteEditor">
          <CInputGroup className="my-2 rounded border border-dark w-100">
            <CFormInput
              placeholder="Title"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="border-0 categoryInput"
              value={titleValue}
              // value={value} // ahi mare value aapvij pade kem ke ene nai kahbar padti ke hu kai value ni vat karu chu..
              onChange={(e) => setTitleValue(e.target.value)} //4
              // onBlur={(e) => setTitleValue(e.target.value)}
            />
          </CInputGroup>
          <QuillEditor
            HandleChange={setvalue}
            value={value}
            newaddnote={newaddnote}
          />
          {/* <QuillEditor value={value} /> */}
        </CContainer>
      </CContainer>
    </CContainer>
  );
};

export default NotesPage;
