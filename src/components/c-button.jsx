/* eslint-disable react/prop-types */
function Button(props) {
    return (
        <button className={`${props.isSelected} ${props.styleButton}`} onClick={props.handleClick} type={props.buttonType}>{props.textContent}</button>    )
}

export default Button;