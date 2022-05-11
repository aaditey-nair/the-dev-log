function SubmitPrimary({ handleSubmit, name }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {name}
    </button>
  );
}

export default SubmitPrimary;
