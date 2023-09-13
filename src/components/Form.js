import React, { useState } from "react";

import "../App.css";
import Button from "../atoms/button/Button";
import Dropdown from "../atoms/dropdown/Dropdown";
import Checkbox from "../atoms/checkbox/Checkbox";

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function Form() {
  const [key, setKey] = useState(-1);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dropdownData1 = {
    optionName: "Male",
    optionIcon: <></>,
  };
  const dropdownData2 = {
    optionName: "Female",
    optionIcon: <></>,
  };
  const dropdownData3 = {
    optionName: "Other",
    optionIcon: <></>,
  };
  const handleDrop = (e) => {
    setGender(e.target.outerText);
  };
  const handleCheck = () =>
    isChecked ? setIsChecked(false) : setIsChecked(true);
  const handleClear = () => window.location.reload();
  const handleSubmit = () => {
    if (!name || !age || !email || !location || !gender)
      alert("One or more fields are empty");
    else if (!isValidEmail(email)) alert("Invalid email");
    else if (!isChecked) alert("You need to agree to the T&C");
    else alert("Form successfully submitted");
  };
  return (
    <div className="form">
      <form className="form-body" onSubmit={handleSubmit}>
        <input
          value={name}
          className="form-field"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          className="form-field"
          type="number"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <input
          value={email}
          className="form-field"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          value={location}
          className="form-field"
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <div className="form-drop">
          <Dropdown
            placeholder="Gender"
            overlay
            selectedValue={key}
            setSelected={setKey}
            items={[dropdownData1, dropdownData2, dropdownData3]}
            onClick={handleDrop}
          />
        </div>
        <div className="form-check">
          <Checkbox
            active={isChecked}
            title="I accept the terms and conditions"
            showBg={false}
            size="xs"
            onClick={handleCheck}
          />
        </div>
        <div className="form-buttons">
          <Button
            appearance="ghost"
            type="button"
            size="md"
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            appearance="primary"
            type="button"
            size="md"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
