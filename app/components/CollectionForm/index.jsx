import { useState } from "react";

function CollectionForm() {
  const [collectionName, setCollectionName] = useState("");
  return (
    <div className="my-2">
      <input
        onChange={(e) => setCollectionName(e.target.value)}
        className="py-2 px-1 mr-2 text-dark"
        name="collectionName"
        value={collectionName}
      />
      <button className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
        New Collection
      </button>
    </div>
  );
}

export default CollectionForm;
