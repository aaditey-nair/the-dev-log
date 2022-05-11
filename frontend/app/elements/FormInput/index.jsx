function FormInput({ name, type, inputId, state }) {
  let placeholder;
  if (type === "email") {
    placeholder = "johndoe@email.com";
  } else if (type === "text") {
    if (name === "name") {
      placeholder = "John Doe";
    } else if (name == "fname") {
      placeholder = "John";
    } else {
      placeholder = "Doe";
    }
  }
  return (
    <>
      <input
        className="min-w-full text-dark bg-light px-4 py-2 focus-within:border-0"
        placeholder={placeholder}
        type={type}
        name={name}
        id={inputId}
        ref={state}
      />
    </>
  );
}

export default FormInput;
