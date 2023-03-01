import styles from "./HomePage.module.css";
import Card from "../components/Card";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editHomePage } from "../actions/homePage";
import Modal from "../components/Modal";

function HomePage() {
  const dispatch = useDispatch();
  const HomeData = useSelector((state) => state.home);
  const [modalStatus, setModalStatus] = useState(false);
  const [editData, setEditData] = useState({
    title: "",
    hook: "",
    description: "",
    ip: "",
    id: "",
  });
  useEffect(() => {
    if (HomeData) {setEditData(HomeData);
    }
  }, [HomeData, modalStatus]);
  function editHandler() {
    setModalStatus(true);
  }
  function submitHandler(e) {
    editData.id=HomeData[0]._id;
    dispatch(editHomePage(editData));
    setModalStatus(false);
  }
  if (HomeData[0]) {
    return (
      <Card>
        <h2 className={styles.h2}>Welcome to Subwoofer's server!</h2>
        {HomeData && <p className={styles.p}>{HomeData[0].hook}</p>}
        <h1 className={styles.IP}>Server IP</h1>
        <h3 className={styles.ip}>{HomeData[0].ip}</h3>

        <div className={styles.moreInfo}>
          <h4>More Information</h4>
          <p className={styles.p}>{HomeData[0].description}</p>
        </div>
        {modalStatus && (
          <Modal submitHandler={submitHandler} editData={editData} setEditData={setEditData}/>
        )}
        <button className={styles.edit} onClick={editHandler}>
          Edit
        </button>
      </Card>
    );
  }
}
export default HomePage;
