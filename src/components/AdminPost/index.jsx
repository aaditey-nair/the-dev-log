import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Link from "next/link";

function AdminPost({ name }) {
  return (
    <div className="bg-stripe p-4">
      <h1 className="text-light font-black font-mono mb-4">{name}</h1>
      <div className="flex justify-between">
        <Link href={"/admin/edit/" + name}>
          <a>
            <FontAwesomeIcon className="text-primary" icon={faPenToSquare} />
          </a>
        </Link>
        <FontAwesomeIcon
          onClick={() => {
            axios.delete("/api/posts/" + name);
          }}
          className="text-secondary cursor-pointer"
          icon={faTrashCan}
        />
      </div>
    </div>
  );
}

export default AdminPost;
