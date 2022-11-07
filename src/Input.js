const Input = (props) => {
  const {id, type, name, placeholder, pattern, onChange, value} = props;
  return(
    <div >
        <label className='m-3' htmlFor={id}>{placeholder}</label>
        <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        pattern={pattern}
        className="border relative bg-gray-100 p-2 m-2"
        onChange={onChange}
        value={value}
        />
    </div>
  );
};

export default Input;