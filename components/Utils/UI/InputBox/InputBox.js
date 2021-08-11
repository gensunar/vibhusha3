import styles from "./InputBox.module.css"

const InputBox = (props) => {
    return (
        <>
            <div className={styles.input_box}>
                <label className={styles.label} htmlFor={props.id}>{props.label}</label>
                <input
                    className={styles.input}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    autoComplete="off"
                />
            </div>
        </>
    )
}

export default InputBox;