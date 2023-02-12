import "./index.css";

const LodingContainer = () => {
  return (
    <div className="popup-container" id="popup-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LodingContainer;
