function CollectionForm() {
  return (
    <form className="my-2" action="/api/collection" method="POST">
      <input className="py-2 px-1 mr-2 text-dark" name="collectionName" />
      <button className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
        New Collection
      </button>
    </form>
  );
}

export default CollectionForm;
