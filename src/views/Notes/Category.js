import { cibAddthis, cilCursor, cilPencil, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CContainer, CFormInput, CInputGroup } from "@coreui/react";
import React from "react";
import { useState } from "react";
import "../../views/category.css";

// const categoried = [];

function Category(props) {
  const [value, setvalue] = useState("");
  const [display, setdisplay] = useState(true);
  const [categoried, setcategoried] = useState([]);

  const handleSelect = (index) => {
    // console.log(index);
    setdisplay(!display);
    console.log(index);
    const cate = document.querySelectorAll(".category");
    if (display == true) {
      cate[index].classList.add("select");
    } else {
      cate[index].classList.remove("select");
    }
  };
  // const handlechange = (e) => {
  //   setvalue(e.target.value);
  // };
  const handleclick = () => {
    console.log(value);
    const inputValue = { value };
    console.log(inputValue);
    if (value) {
      setcategoried((categery) => [...categery, inputValue]);
      // setcategoried((categery) => [...categery, { value }]); // aa 1 hoy to use karay ..
      setvalue("");
    }
    // console.log(categoried);
  };
  const changecategory = (index) => {
    // console.log(categoried[index]);
    const editCategory = categoried[index];
    setvalue(editCategory.value);
    // console.log(value);
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
          <CButton
            className="bg-white border-0 text-dark category-add-btn"
            onClick={handleclick}
          >
            <CIcon icon={cibAddthis}></CIcon>
          </CButton>
        </CInputGroup>
      </div>
      {categoried.map((category, index) => {
        return (
          <div
            key={category.value}
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
                onClick={() => changecategory(index)}
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
