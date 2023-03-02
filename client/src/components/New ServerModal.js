import styles from "./Modal.module.css";
import { updateServer,newServer } from "../actions/homePage";
import { useDispatch } from "react-redux";
function NewServerModal(props) {
  const dispatch = useDispatch();
  const serverData = props.newServer;
  const setServerData = props.updateNewServer;
  const id = props.id;

  function updateServerHandler(e) {
    e.preventDefault();
    if (props.toggleEditModalStatus) {
      dispatch(updateServer(id, serverData));
      props.toggleEditModalStatus();
    }else{
      dispatch(newServer(serverData))
      props.toggleModalStatus();
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form>
          <input
            type="text"
            placeholder="title"
            value={serverData.title}
            onChange={(e) => {
              e.preventDefault();
              setServerData({ ...serverData, title: e.target.value });
            }}
          ></input>
          <input
            type="text"
            placeholder="version"
            value={serverData.version}
            onChange={(e) => {
              e.preventDefault();
              setServerData({ ...serverData, version: e.target.value });
            }}
          ></input>
          <input
            type="text"
            className={styles.descriptionInput}
            placeholder="description"
            value={serverData.description}
            onChange={(e) => {
              e.preventDefault();
              setServerData({ ...serverData, description: e.target.value });
            }}
          ></input>
          {/* <input
            type="file"
            onChange={(e) =>
              setServerData({ ...serverData, screenshots: e.target.files })
            }
          ></input> */}
          <button
            className={styles.edit}
            type="submit"
            onClick={updateServerHandler}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default NewServerModal;
