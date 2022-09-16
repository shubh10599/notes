import { cibAddthis, cilPencil, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CContainer, CFormInput, CInputGroup } from "@coreui/react";
import React from "react";
import { useState } from "react";
import "../../views/category.css";

function Category(props) {
  const [value, setvalue] = useState("");
  const [submit, setsubmit] = useState("");
  const [abc, setabc] = useState(false);
  // console.log(submit);

  const handleSelect = () => {
    setabc(!abc);
    console.log(abc);
    const cate = document.querySelector(".category");
    if (abc == true) {
      console.log("bf");
      cate.classList.add("select");
    } else {
      console.log("gf");
      cate.classList.remove("select");
    }
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
            className="border-0"
          />
          <CButton className="bg-white border-0 text-dark category-add-btn">
            <CIcon icon={cibAddthis}></CIcon>
          </CButton>
        </CInputGroup>
      </div>
      <div
        className="d-flex justify-content-between border-bottom my-1 p-2 category align-items-center"
        onClick={handleSelect}
      >
        <p className="m-0">lorem10</p>
        <div className="categroy-icons">
          <CIcon icon={cilPencil} className="category-edit-icon"></CIcon>
          <CIcon icon={cilTrash}></CIcon>
        </div>
      </div>
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
