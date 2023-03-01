import Card from "../components/Card";
import styles from "./LoginPage.module.css";
// import { useDispatch } from "react-redux";
// import { login } from "../actions/homePage";

function LoginPage() {
    // const dispatch=useDispatch();

    function submitHandler(e){
        // e.preventDefault();
        // dispatch(login());
    }
  return (
    <Card>
      <form className={styles.form}>
        <div>
          <p>username:</p>
          <input type="text" placeholder="username"></input>
        </div>
        <div>
          <p>password:</p>
          <input type="password" placeholder="password"></input>
        </div>
        <div className={styles.button}><button className={styles.submit} onClick={submitHandler}>Submit</button></div>
      </form>
    </Card>
  );
}
export default LoginPage;
