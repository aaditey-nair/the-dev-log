function SubmitSecondary({ handleSubmit, name }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="max-w-max bg-secondary text-dark py-2 px-6 hover:bg-primary transition-colors"
    >
      {name}
    </button>
  );
}

export default SubmitSecondary;
