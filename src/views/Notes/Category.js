import {
  cibAddthis,
  cilCommentBubble,
  cilCursor,
  cilPencil,
  cilTrash,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CContainer, CFormInput, CInputGroup } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useState } from "react";
import "../../views/category.css";
import store from "src/store";
import { addCategory, updateCategory } from "src/redux/actions";
import { add } from "lodash";

function Category(props) {
  // console.log(store.getState());
  const dispatch = useDispatch(); // hooks
  // const state = useSelector((state) => state.reducer);
  // console.log(state);
  const [value, setvalue] = useState("");
  const [display, setdisplay] = useState(true);
  const [categoried, setcategoried] = useState([]);
  const [toggleSubmit, settoggleSubmit] = useState(false);
  const [editItem, seteditItem] = useState("");

  // console.log(cate.length);
  const handleSelect = (index) => {
    const cate = document.querySelectorAll(".category");
    console.log(cate);
    // cate.classList.remove("select");   // ahi hu index index pass karais ane pachi jo  e inde x hase to ene remove kari navi index state ma nakhavani.
    // console.log(index);
    setdisplay(!display);
    // console.log(index);
    if (display == true) {
      cate[index]?.classList?.add("select");
    } else {
      cate[index]?.classList?.remove("select");
    }
  };
  // const handlechange = (e) => {
  //   setvalue(e.target.value);
  // };
  const handleclick = () => {
    // cate.classList.remove("select");
    // console.log(value);
    // const inputValue = { value };
    // console.log(inputValue);
    // if (value) {
    // dispatch(addCategory(categoried(inputValue))); // how to push value in array. baki
    // const allInputData = { id: Math.random(), value };
    // setcategoried((categery) => [...categery, inputValue]);
    // setcategoried((categery) => [...categery, allInputData]);
    // dispatch(addCategory(value));
    // setcategoried((categery) => [...categery, { value }]); // aa 1 hoy to use karay ..
    // setvalue("");
    // } else if (value && toggleSubmit) {
    // console.log(categoried);
    // setcategoried();
    // koi vastu chalu kare id to joisej kem ke ena vagar kaij thase nai etlu samjin kar badhu so.. kale farithi aa video joi ne puru kar bapor thij aa chalu karde ane mare compleate joie.
    // }

    // if (value && toggleSubmit) {
    //   setcategoried();
    // } else if (value) {
    //   const allInputData = { id: Math.random(), value };
    //   setcategoried((categery) => [...categery, allInputData]);
    //   setvalue("");
    // } else {
    // }
    if (!value) {
    } else if (value && toggleSubmit) {
      setcategoried(
        categoried.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, value };
          }
          return elem; // aa return item kya jase setcategoried ma..
        })
      );
      const selectedCategory = categoried.findIndex(
        (item) => item.id === editItem
      ); // update category valu..
      console.log(selectedCategory);
      categoried[selectedCategory] = { id: editItem, value };
      console.log(categoried);
      dispatch(updateCategory({ id: editItem, value }));
      settoggleSubmit(!toggleSubmit);
      setvalue("");
      seteditItem(null);
    } else if (value && !toggleSubmit) {
      const allInputData = { id: Math.random(), value };
      setcategoried((categery) => [...categery, allInputData]);
      dispatch(addCategory(allInputData));
      setvalue("");
    } else {
    }
    // dispatch(addCategory(categoried));
  };
  // console.log(categoried);
  const changecategory = (category) => {
    // console.log(category);
    // console.log(categoried[index]);
    const editCategory = category.value;
    // console.log(editCategory);
    setvalue(editCategory);
    settoggleSubmit(!toggleSubmit);
    // console.log(index);
    seteditItem(category.id);
    // have aapde ahi exiting vlue ma edit karsu..
    // console.log(editItem);
    // toggle icon..
  };
  return (
    <CContainer className="w-50">
      <h3 className="text-center mb-3">Category</h3>
      <div className="category-input">
        <CInputGroup className="mb-2">
          <CFormInput
            placeholder="Category Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="border-0 categoryInput"
            value={value} // ahi mare value aapvij pade kem ke ene nai kahbar padti ke hu kai value ni vat karu chu..
            onChange={(e) => setvalue(e.target.value)}
          />
          {/* <CButton
            className="bg-white border-0 text-dark category-add-btn"
            onClick={handleclick}
          >
            {toggleSubmit ? (
              <CIcon icon={cibAddthis}></CIcon>
            ) : (
              <CIcon icon={cilCommentBubble}></CIcon>
            )}
          </CButton> */}
          {toggleSubmit ? (
            <CButton
              className="bg-white border-0 text-dark category-add-btn"
              onClick={handleclick}
            >
              <CIcon icon={cilCommentBubble}></CIcon>
            </CButton>
          ) : (
            <CButton
              className="bg-white border-0 text-dark category-add-btn"
              onClick={handleclick}
            >
              <CIcon icon={cibAddthis}></CIcon>
            </CButton>
          )}
        </CInputGroup>
      </div>
      {categoried.map((category, index) => {
        return (
          <div
            key={category.id}
            className="d-flex justify-content-between border-bottom my-1 p-2 category align-items-center"
            // onClick={() => { 1 kara vadhre argument hati etle
            //   // console.log(index);
            //   handleSelect(index);
            // }}
            onClick={() => handleSelect(index)}
          >
            <p className="m-0">{category.value}</p>
            <div className="categroy-icons">
              <CIcon
                icon={cilPencil}
                className="category-edit-icon"
                onClick={() => changecategory(category)} // ahi thi mare id mokal vanu che..
              ></CIcon>
              <CIcon icon={cilTrash}></CIcon>
            </div>
          </div>
        );
      })}
    </CContainer>
  );
}

export default Category;
