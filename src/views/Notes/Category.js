import { cibAddthis, cilTrash } from "@coreui/icons";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import "../../views/category.css";

function Category(props) {
  const [visible, setVisible] = useState(false);
  const [inputcategory, setinputcategory] = useState("");
  const [addcategory, setaddcategory] = useState("");

  const categorys = [];
  console.log(categorys);
  const handleinputvalue = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setinputcategory(e.target.value);
  };

  const handleclick = () => {
    setaddcategory(inputcategory);
    // categorys.push(addcategory);
  };
  return (
    <div>
      <CContainer className="d-flex">
        <div className="categorylist bg-dark p-2 text-light">
          <div className="category-list-header d-flex justify-content-between">
            <h3 className="text-center mb-3">Categorylist</h3>
            <span onClick={() => setVisible(!visible)}>
              <CIcon icon={cibAddthis}></CIcon>
            </span>
            <CModal visible={visible} onClose={() => setVisible(false)}>
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                {/* <CForm className="category-form"> */}
                <div className="mb-3 category-inputfeild">
                  <CFormLabel
                    htmlFor="exampleInputtext"
                    className="category-form-label"
                  >
                    Add Category :
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleInputtext"
                    aria-describedby="emailHelp"
                    className="category-form-input"
                    onChange={handleinputvalue}
                  />
                </div>
                <CButton type="submit" color="primary" onClick={handleclick}>
                  Submit
                </CButton>
                {/* </CForm> */}
              </CModalBody>
            </CModal>
          </div>
          {categorys.map(
            (Category) => console.log(Category)
            // {
            // return (
            //   <div className="category-item d-flex justify-content-between border-bottom p-2 mt-2 align-items-center">
            //     <p className="m-0">{Category}</p>
            //     <span>
            //       <CIcon icon={cilTrash}></CIcon>
            //     </span>
            //   </div>
            // );
            // }
          )}
          <div className="category-item d-flex border-bottom justify-content-between p-2 mt-2 align-items-center">
            <p className="m-0">name of category</p>
            <span>
              <CIcon icon={cilTrash}></CIcon>
            </span>
          </div>
        </div>
        {/* <CForm className="category-form">
          <div className="mb-3 category-inputfeild">
            <CFormLabel
              htmlFor="exampleInputtext"
              className="category-form-label"
            >
              Add Category :
            </CFormLabel>
            <CFormInput
              type="text"
              id="exampleInputtext"
              aria-describedby="emailHelp"
              className="category-form-input"
            />
          </div>
          <CButton type="submit" color="primary">
            Submit
          </CButton>
        </CForm> */}
      </CContainer>
    </div>
  );
}

export default Category;
