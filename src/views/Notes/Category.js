import { cibAddthis, cilCursor, cilPencil, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CContainer, CFormInput, CInputGroup } from "@coreui/react";
import React from "react";
import { useState } from "react";
import "../../views/category.css";

const categoried = [];

function Category(props) {
  const [value, setvalue] = useState("bank");
  const [display, setdisplay] = useState(false);

  const handleSelect = () => {
    setdisplay(!display);
    console.log(display);
    const cate = document.querySelector(".category");
    if (display == true) {
      cate.classList.add("select");
    } else {
      cate.classList.remove("select");
    }
  };
  const handlechange = (e) => {
    setvalue(e.target.value);
  };
  const handleclick = (value) => {
    // console.log("subit", value);
    categoried.push(value);
    console.log(categoried);
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
            onChange={handlechange}
          />
          <CButton
            className="bg-white border-0 text-dark category-add-btn"
            onClick={() => handleclick(value)}
          >
            <CIcon icon={cibAddthis}></CIcon>
          </CButton>
        </CInputGroup>
      </div>
      {categoried.map((category) => (
        <div
          key={category}
          className="d-flex justify-content-between border-bottom my-1 p-2 category align-items-center"
          onClick={handleSelect}
        >
          <p className="m-0">{category}</p>
          <div className="categroy-icons">
            <CIcon icon={cilPencil} className="category-edit-icon"></CIcon>
            <CIcon icon={cilTrash}></CIcon>
          </div>
        </div>
      ))}
      <div
        className="d-flex justify-content-between border-bottom p-2 category align-items-center"
        onClick={handleSelect}
      >
        <p className="m-0">lorem10</p>
        <div className="categroy-icons">
          <CIcon icon={cilPencil} className="category-edit-icon"></CIcon>
          <CIcon icon={cilTrash}></CIcon>
        </div>
      </div>
    </CContainer>
  );
}

export default Category;
