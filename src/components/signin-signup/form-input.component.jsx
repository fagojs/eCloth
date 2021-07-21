import "../../css/signin-signup/form-input.css";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div>
    {label ? <label className="input-field-label">{label}</label> : null}
    <input className="input-field" {...otherProps} onChange={handleChange} />
  </div>
);
export default FormInput;
