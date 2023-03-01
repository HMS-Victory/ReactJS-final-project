import Card from "../components/Card";
import { Link } from "react-router-dom";
import styles from "./Servers.module.css";
import { useSelector } from "react-redux";
import { newServer } from "../actions/homePage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import NewServerModal from "../components/New ServerModal";
import { deleteServer, updateServer } from "../actions/homePage";

function Servers() {
  const dispatch = useDispatch();
  const servers = useSelector((state) => state.servers);
  const [ModalStatus, setModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [serverData, updateServerData] = useState({
    title: "",
    rules: [],
    screenshots: [],
    version: "",
    description: "",
  });
  function NewServerHandler(e) {
    e.preventDefault();
    dispatch(newServer(serverData));
    toggleModalStatus();
  }
  function toggleModalStatus() {
    if (ModalStatus) {
      setModalStatus(false);
    } else {
      setModalStatus(true);
    }
  }
  function toggleEditModalStatus() {
    if (!editModalStatus) {
      setEditModalStatus(true);
    } else {
      setEditModalStatus(false);
    }
  }
  if (servers) {
    return (
      <Card>
        {servers.map((server) => (
          <div key={server._id}>
            <Link to={`/rules/${server._id}`} className={styles.link}>
              <h2>{server.title}</h2>
            </Link>
            <p>{server.description}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={toggleEditModalStatus}>
                Edit
              </button>

              <button
                className={styles.delete}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteServer(server._id));
                }}
              >
                delete
              </button>
            </div>
            {editModalStatus && (
              <NewServerModal
                newServer={serverData}
                updateNewServer={updateServerData}
                toggleEditModalStatus={toggleEditModalStatus}
                id={server._id}
              />
            )}
          </div>
        ))}
        {ModalStatus && (
          <NewServerModal
            newServer={serverData}
            updateNewServer={updateServerData}
            NewServerHandler={NewServerHandler}
          />
        )}
        <button className={styles.edit} onClick={toggleModalStatus}>
          New
        </button>
      </Card>
    );
  }
}

export default Servers;
