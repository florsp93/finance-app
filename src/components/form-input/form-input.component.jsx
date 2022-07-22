const FormInput = ({ label, ...otherProps }) => (
  <div>
    {label && <label>{label}</label>}
    <br />
    <input {...otherProps} />
  </div>
);

export default FormInput;
