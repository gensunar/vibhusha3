export default function Button(props){
    return(
        <>
            <button onClick={props.onClick} type={props.type}>{props.label}</button>
        </>
    )
}