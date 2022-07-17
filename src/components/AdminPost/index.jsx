import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function AdminPost({ name, id }) {
  return (
    <div className="bg-stripe p-4">
      <h1 className="text-light font-black font-mono mb-4">{name}</h1>
      <div className="flex justify-between">
        <FontAwesomeIcon className="text-primary" icon={faPenToSquare} />
        <FontAwesomeIcon className="text-secondary" icon={faTrashCan} />
      </div>
    </div>
  );
}

export default AdminPost;