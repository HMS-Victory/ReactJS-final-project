import styles from "./RulesPage.module.css";
import RulesModal from './RulesModal'
import { useState } from "react";

function RulePageItem(props) {
  const [ModalStatus, setModalStatus]=useState(false);
  function toggleModalStatus(){
    if(ModalStatus){
      setModalStatus(false)
    }else{
      setModalStatus(true);
    }
  }
  return (
    <>
      <div className={styles.heading}>
        <h2 className={styles.h2}>{props.title}</h2>
        <p className={styles.subtext}>{props.version}</p>
      </div>

      <div className={styles.container}>
        <p className={styles.description}>{props.description}</p>
        <ul className={styles.rules}>
          {props.rules && props.rules.map((rule) => {
            return (
                <li key={Math.random()*100}>{rule}</li>
            );
          })}
        </ul>
      </div>
      {ModalStatus && <RulesModal toggleModalStatus={toggleModalStatus} id={props.id}/>}
        <button className={styles.edit} onClick={toggleModalStatus}>
          Add Rules
        </button>
    </>
  );
}

export default RulePageItem;