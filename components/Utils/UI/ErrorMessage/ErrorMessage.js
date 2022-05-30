import styles from './ErrorMessage.module.css'

const ErrorMessage = (props) => {
  return (
    <>
      <span className={styles.error_message}>{props}</span>
    </>
  );
};

export default ErrorMessage;
