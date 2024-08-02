/* eslint-disable react/prop-types */
function Button(props) {
    return (
        <button className={`${props.isSelected} language-button`} onClick={props.handleLanguage} type="button">{props.textContent}</button>
    )
}

export default Button;