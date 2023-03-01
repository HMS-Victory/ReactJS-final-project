import styles from "./Modal.module.css";
import { updateRules } from "../actions/homePage";
import { useDispatch } from "react-redux";
import { useState } from "react";

function RulesModal(props) {
  const dispatch = useDispatch();
  const [RuleData, setRuleData]=useState([]);
  const [inputValue, setInputValue]=useState("")
  const toggleModalStatus = props.toggleModalStatus;

  function submitHandler(e) {
    e.preventDefault();
    RuleData.push(inputValue)
    dispatch(updateRules(props.id, RuleData));
    toggleModalStatus();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form>
          <input
            type="text"
            placeholder="new rule"
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value)
            }}
          ></input>
          <div className={styles.buttonContainer}>
            <button
              className={styles.edit}
              type="submit"
              onClick={submitHandler}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RulesModal;
