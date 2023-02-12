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
import {
  addCategory,
  getCategories,
  removeCategory, // me bad karya call.
  updateCategory,
  postCategories,
  deleteCategory,
} from "src/redux/actions";
import { useEffect } from "react";
import LodingContainer from "src/components/loding";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { add, remove } from "lodash";

function Category(props) {
  // console.log(store.getState());
  const { categories, message, success, error, loading } = useSelector(
    (state) => ({
      categories: state.reducer.categories,
      message: state.reducer.message,
      success: state.reducer.success,
      error: state.reducer.error,
      loading: state.reducer.loading,
    })
  );
  console.log("error message =", success);
  const dispatch = useDispatch(); // hooks
  // console.log(props.value);
  // console.log(state.categoried.length);
  // const state = useSelector((state) => state.reducer);
  // console.log(state);
  const [value, setInputCategoryValue] = useState("");
  // const [filterCategories, setFilterCategories] = useState([]);
  // const [display, setdisplay] = useState(true);
  // const [categoried, setcategoried] = useState([]);   // ahi khali redux natu use karu tyre aa array use karelo..
  const [toggleSubmit, settoggleSubmit] = useState(false);
  const [editItem, seteditItem] = useState("");
  const [SelectIndex, setSelectIndex] = useState("");
  const display = true;
  const loding = true; // only for lodaing mate..

  // biju use effect aa rite use karvanu..
  useEffect(() => {
    dispatch(getCategories());
  }, []); // jyre pan hu post karu etli var call thavu joe.. aa baki che.

  useEffect(
    () => {
      if (success !== "") {
        toast(success + ""); // ahi me toast karu che..
        // setTimeout(() => {
        //   dispatch(getCategories());
        // }, 5000);
      }
      if (error !== "") {
        toast(error + "");
      }
    },
    [success],
    [error]
  );

  // aa rite change kari saay color ke theme
  // toast("Custom style", {
  //   className: "black-background",
  //   bodyClassName: "grow-font-size",
  //   progressClassName: "fancy-progress-bar",
  // });
  // error ma aapde kahli message batavano hoy ane pachhi ene clear karvano hoy etle ema message mate aavse e karavanu che...

  // useEffect(() => {   // mare aarite biju useeffect use karvu padse.. jetlivar hu kaik karu etli var mane aapvu joie.
  //   setFilterNotes(notes);
  // }, [notes]);
  // console.log(SelectIndex);
  // console.log(cate.length);
  const handleSelect = (index) => {
    const catchAllCategories = document.querySelectorAll(".category");
    // console.log(catchAllCategories);
    // catchAllCategories.classList.remove("select");   // ahi hu index index pass karais ane pachi jo  e inde x hase to ene remove kari navi index state ma nakhavani.
    // console.log(index);
    catchAllCategories[SelectIndex]?.classList?.remove("select");
    setSelectIndex("");
    // setdisplay(!display);   // aa bandh karvanu karan e che ke hu jyre bije click karto hato tyre e false thai jatu hatu..
    // console.log(index);
    if (display) {
      catchAllCategories[index]?.classList?.add("select");
      setSelectIndex(index);
    }
    //  else {
    //   catchAllCategories[index]?.classList?.remove("select");
    // }
  };

  const removeItem = (category) => {
    console.log(category.id);
    const data = {
      categoryId: category.id,
    };
    // console.log(category.id);
    // dispatch(removeCategory(category)); // aa khsli reducer ma je temparay hatu ena mate che..
    dispatch(deleteCategory(data)); // aki che tya bana vanu to hu banai aayu.. put vadu j api use karvsnu che.
  };
  // const handlechange = (e) => {
  //   setInputCategoryValue(e.target.value);
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
    // setInputCategoryValue("");
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
    //   setInputCategoryValue("");
    // } else {
    // }

    // special  = koi khali vastu ne add na karvadevi hoy to aa karvanu to nai thay..
    if (!value) {
    } else if (value && toggleSubmit) {
      // setcategoried(
      //   categoried.map((elem) => {
      //     if (elem.id === editItem) {
      //       return { ...elem, value };
      //     }
      //     return elem; // aa return item kya jase setcategoried ma..
      //   })
      // );

      // update karava mate ahi try karu hatu.
      // const selectedCategory = categoried.findIndex(
      //   (item) => item.id === editItem
      // ); // update category valu..
      // console.log(selectedCategory);
      // categoried[selectedCategory] = { id: editItem, value };
      // console.log(categoried);
      // dispatch(updateCategory({ id: editItem, value })); // aa reducer nu che..
      // ahi hu backend mate banais..
      const Input = {
        title: value,
        categoryId: editItem,
        modifiedAt: new Date().toISOString(), // ahi banne mangse mari passe ..
      };
      dispatch(updateCategory(Input)); // call action
      settoggleSubmit(!toggleSubmit);
      setInputCategoryValue(""); //1
      seteditItem(null);
    } else if (value && !toggleSubmit) {
      const allInputData = { id: Math.random(), value };
      // setcategoried((categery) => [...categery, allInputData]);
      const inputValue = {
        title: value,
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
      };
      // dispatch(addCategory(allInputData)); //aa me reducer thi temperary je ba naiti te na mate che..
      dispatch(postCategories(inputValue));
      setInputCategoryValue(""); //2
    } else {
    }
    // if (success) {
    //   toast(success + "");
    // } else {
    //   toast("error");
    // }
    // dispatch(addCategory(categoried));
  };
  // console.log(categoried);
  const changecategory = (category) => {
    // console.log(category);
    // console.log(categoried[index]);
    const editCategory = category.value; //5
    // console.log(editCategory);
    setInputCategoryValue(editCategory); //3
    settoggleSubmit(!toggleSubmit);
    // console.log(index);
    seteditItem(category.id);
    // have aapde ahi exiting vlue ma edit karsu..
    // console.log(editItem);
    // toggle icon..
  };
  return (
    <CContainer className="container-lg">
      {loading && <LodingContainer />}
      <CContainer className="w-50">
        <h3 className="text-center mb-3">Category</h3>
        <ToastContainer />
        <div className="category-input">
          <CInputGroup className="mb-2">
            <CFormInput
              placeholder="Category Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="border-0 categoryInput"
              value={value} // ahi mare value aapvij pade kem ke ene nai kahbar padti ke hu kai value ni vat karu chu..
              onChange={(e) => setInputCategoryValue(e.target.value)} //4
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
        {/* ({state.categoried.length}) */}
        {categories.map((category, index) => {
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
                <CIcon
                  icon={cilTrash}
                  onClick={() => removeItem(category)}
                ></CIcon>
              </div>
            </div>
          );
        })}
      </CContainer>
    </CContainer>
  );
}

export default Category;
