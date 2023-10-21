import { useState } from "react";
import { Drawer } from "antd";
import InputField from "../input/Input-field";
import PrimaryButton from "../button/primary-button";
// import { Link, useNavigate } from "react-router-dom";
// import { fbSignUp } from "../../../config/firebase/firebase-methods";
// import InputField from "../../../components/input/input-field";
// import Button from "../../../components/button/primary-button";
import DropDown from "../input/dropdown";
import MenuItem from "@mui/material/MenuItem";
import DisableInput from "../input/disable-input";
import CheckboxLabels from "../check-box";

export default function AppDrawer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // signup

  // const [model, setModel] = useState<any>({
  //   gender: '',
  // });

  // const [maleChecked, setMaleChecked] = useState(false);
  // const [femaleChecked, setFemaleChecked] = useState(false);

  // const fillModel = (key: string, val: any) => {
  //   model[key] = val;
  //   setModel({ ...model });
  // };

  // const handleGenderChange = (event: any) => {
  //   const selectedGender = event.target.value; // Get the value (male or female) from the radio button
  //   setModel((prevModel: any) => ({
  //     ...prevModel,
  //     gender: selectedGender, // Update the gender field in the state
  //   }));
  // };

  // const navigate = useNavigate();

  const Roles = [
    { value: "admin", label: "Admin" },
    { value: "institute", label: "Institute" },
    { value: "teacher", label: "Teacher" },
    { value: "student", label: "Student" },
  ];

  // let signUpUser = () => {
  //   console.log("Model role:", model.role);
  //   fbSignUp(model)
  //     .then((res: any) => {
  //       if (model.role === "admin") {
  //         navigate("/admin-dashboard");
  //       } else if (model.role === "institute") {
  //         navigate("/institute-dashboard");
  //       }else if (model.role === "teacher") {
  //         navigate("/institute-dashboard");
  //       } else if (model.role === "student") {
  //         navigate("/student-dashboard");
  //       } else {
  //         navigate("/*");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <span onClick={showDrawer} className="px-2 fs-5 fw-bold">
        SignUp
      </span>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="">
          <h1 className="text-3xl font-medium">Sign Up</h1>
        </div>
        <div className="">
          <InputField
            // value={model.userName || ""}
            // onChange={(e: any) => fillModel("userName", e.target.value)}
            label="User Name"
          />
        </div>
        <div className="">
          <InputField
            // value={model.email || ""}
            // onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
          />
        </div>
        <div className="">
          <InputField
            // value={model.cnic || ""}
            // onChange={(e: any) => fillModel("cnic", e.target.value)}
            label="Cnic"
          />
        </div>
        <div className="">
          <InputField
            // value={model.password || ""}
            // onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
          />
        </div>
        <div className="">
          <DisableInput />
        </div>
        <div className="">
          <DropDown
            HeaderValue="Role"
            // SelectValue={model.role}
            // SelectOnChange={(e: any) => fillModel("role", e.target.value)}
          >
            {Roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>
        </div>
        <div className="">
          <CheckboxLabels
            id="male"
            name="gender"
            value="male"
            label="male"
            //   checked={model.gender === 'male' || maleChecked}
            // onChange={handleGenderChange}
          />
          <CheckboxLabels
            id="female"
            name="gender"
            value="female"
            label="female"
            // onChange={handleGenderChange}
            // checked={model.gender === 'female' || femaleChecked }
          />
        </div>
        <div className="">
          <PrimaryButton
            // onClick={signUpUser}
            label="Sign Up"
          />
        </div>
        <div className="">
          <p className="text-white">
            If you have allready login?
            {/* <Link to="/sign-in"> Log in </Link> */}
          </p>
        </div>
      </Drawer>
    </>
  );
}
