import styles from "./InputField.module.css"

const InputField = (props) => {
    return (
        <>
            <div className={styles.input_box}>
                <label className={styles.label} htmlFor={props.id}>{props.label}</label>
                <input
                    className={styles.input}
                    placeholder={props.placeholder}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    autoComplete="off"
                    required={props.required}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    pattern={props.pattern}
                />
            </div>
        </>
    )
}

export default InputField;