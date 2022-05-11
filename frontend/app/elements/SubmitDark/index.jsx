function SubmitDark({ handleSubmit, name }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="max-w-max bg-stripe text-light py-2 px-6 hover:scale-105 transition-transform"
    >
      {name}
    </button>
  );
}

export default SubmitDark;
