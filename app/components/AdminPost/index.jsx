import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function AdminPost({ name, id }) {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </div>
  );
}

export default AdminPost;
