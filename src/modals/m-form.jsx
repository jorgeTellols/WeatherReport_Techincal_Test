/* eslint-disable react/prop-types */

import Button from "../components/c-button";
import Input from "../components/c-input";
import { useState, useEffect } from "react";

function Form(props) {

    const [buttonStatus, setButtonStatus] = useState(true);
    const [nameField, setNameField] = useState("");
    const [birthdateField, setBirthdateField] = useState("");
    const [cityField, setCityField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [phoneNumberField, setPhoneNumberField] = useState("");

    //Validates the fields and enables/disables the button
    useEffect(() => 
    {
        if(!(nameField == "") && !(birthdateField == "") && !(cityField == "") && !(emailField == "") && !(phoneNumberField == ""))
        {
            setButtonStatus(true);
        }
        else
        {
            setButtonStatus(false);
        }
    }, [nameField, birthdateField, cityField, emailField, phoneNumberField])

    return (
        <div onClick={props.hideModal} className="modal-background">
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <h1>{(props.languageSelected).formTitle}</h1>
                <form>
                    <div className="first-row">
                        <Input handleChange={(e) => setNameField((e.target.value).trim())} labelContent={(props.languageSelected).formName} inputType="text"></Input>
                        <Input handleChange={(e) => setBirthdateField((e.target.value).trim())} labelContent={(props.languageSelected).formBirthdate} inputType="text"></Input>
                        <Input handleChange={(e) => setCityField((e.target.value).trim())} labelContent={(props.languageSelected).formCity} inputType="text"></Input>
                    </div>
                    <div className="second-row">
                        <Input handleChange={(e) => setEmailField((e.target.value).trim())} labelContent={(props.languageSelected).formEmail} inputType="text"></Input>
                        <Input handleChange={(e) => setPhoneNumberField((e.target.value).trim())} labelContent={(props.languageSelected).formPhoneNumber} inputType="text"></Input>
                        <Button buttonType="submit" handleClick={(e)=> e.preventDefault()} isSelected={buttonStatus ? "enabled-button" : "disabled-button"} styleButton="form-button" textContent={(props.languageSelected).formSubmitButton}></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
