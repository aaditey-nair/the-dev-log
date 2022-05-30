function SubmitDark({ handleSubmit, name }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="max-w-max bg-stripe focus:bg-accent hover:bg-accent text-light py-2 px-6 transition-colors"
    >
      {name}
    </button>
  );
}

export default SubmitDark;
