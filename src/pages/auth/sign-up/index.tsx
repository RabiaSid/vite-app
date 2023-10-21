// import { useState } from "react";
import InputField from "../../../components/input/Input-field";
import DisableInput from "../../../components/input/disable-input";
import CheckboxLabels from "../../../components/check-box";
import PrimaryButton from "../../../components/button/primary-button";
import DropDown from "../../../components/input/dropdown";
import MenuItem from "@mui/material/MenuItem";

export default function SignUp() {
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
      <div
        className="row m-0 p-0 d-flex justify-content-center align-items-center"
        style={{
          background: `#ffffff`,
          height: "100vh",
        }}
      >
        <div
          className="w-50 p-5 rounded-lg"
          style={{
            background: `rgba(179, 214, 252,.2)`,
          }}
        >
          <div className="py-3">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-3">
            <InputField
              // value={model.userName || ""}
              // onChange={(e: any) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-3">
            <InputField
              // value={model.email || ""}
              // onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              // value={model.cnic || ""}
              // onChange={(e: any) => fillModel("cnic", e.target.value)}
              label="Cnic"
            />
          </div>
          <div className="py-3">
            <InputField
              // value={model.password || ""}
              // onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-3">
            <DisableInput />
          </div>
          <div className="py-3">
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
          <div className="py-3">
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
          <div className="py-3">
            <PrimaryButton
              // onClick={signUpUser}
              label="Sign Up"
            />
          </div>
          <div className="py-3">
            <p className="text-white">
              If you have allready login?
              {/* <Link to="/sign-in"> Log in </Link> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
