/* eslint-disable react/prop-types */
function Input(props) {
    return (
        <div className="input-style">
            <label className={props.labelClass}>{props.labelContent}</label>
            <input onChange={props.handleChange} className={props.inputClass}type={props.inputType}></input>
        </div>
    )
}

export default Input;