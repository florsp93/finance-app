const FormInput = ({ label, ...otherProps }) => (
  <div className="input-label-div">
    {label && <label>{label}</label>}
    <br />
    <input {...otherProps} />
  </div>
);

export default FormInput;
