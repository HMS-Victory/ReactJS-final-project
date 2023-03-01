import styles from './Modal.module.css';
function Modal(props){
    const editData=props.editData;
    const setEditData=props.setEditData;
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
              <form>
                <input
                  type="text"
                  placeholder="title"
                  value={editData.title}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditData({ ...editData, title: e.target.value });
                  }}
                ></input>
                <input
                  type="text"
                  placeholder="ip"
                  value={editData.ip}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditData({ ...editData, ip: e.target.value });
                  }}
                ></input>
                <input
                  type="text"
                  className={styles.hookInput}
                  placeholder="hook"
                  value={editData.hook}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditData({ ...editData, hook: e.target.value });
                  }}
                ></input>
                <input
                  type="text"
                  className={styles.descriptionInput}
                  placeholder="description"
                  value={editData.description}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditData({ ...editData, description: e.target.value });
                  }}
                ></input>
                <button
                  className={styles.edit}
                  type="submit"
                  onClick={props.submitHandler}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
    )

}
export default Modal;