import "../../css/common/commonbutton.css";

const CommonButton = ({ children, ...otherProps }) => (
  <button className="common-button" {...otherProps}>
    {children}
  </button>
);

export default CommonButton;
