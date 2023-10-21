// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { add } from "../../../config/redux/reducers/userSlice";
// import InputField from "../../../components/input/input-field";
import Button from "../../../components/button/primary-button";
// import { fbLogin } from "../../../config/firebase/firebase-methods";
import InputField from "../../../components/input/Input-field";
import AppDrawer from "../../../components/drawer";

export default function SignIn() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [model, setModel] = useState<any>({});

  // const fillModel = (key: string, val: any) => {
  //   model[key] = val;
  //   setModel({ ...model });
  // };

  // let LoginUser = () => {
  //   console.log(model);
  //   fbLogin(model)
  //     .then((res: any) => {
  //       // console.log(res)
  //       // dispatch(add({...res}))
  //       // console.log(add({...res}))
  //       // navigate("/student")
  //       if (res.role === "admin") {
  //         dispatch(add({ ...res }));
  //         console.log(add({ ...res }));
  //         navigate("/admin-dashboard");
  //       } else if (res.role === "institute") {
  //         dispatch(add({ ...res }));
  //         console.log(add({ ...res }));
  //         navigate("/institute-dashboard");
  //       } else if (res.role === "student") {
  //         dispatch(add({ ...res }));
  //         console.log(add({ ...res }));
  //         navigate("/student-dashboard");
  //       } else {
  //         dispatch(add({ ...res }));
  //         console.log(add({ ...res }));
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
          height:"100vh"
        }}
      >
        <div
          className="w-50 p-5 rounded-lg"
          style={{
            background: `rgba(179, 214, 252,.2)`,
          }}
        >
          <div className="py-3">
            <h1 className="fs-2 fw-bold">Login</h1>
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
              // value={model.password || ""}
              // onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="py-3">
            <Button
              // onClick={LoginUser}
              onClick={() => navigate('/dashboard')}
              label="Sign in"
            />
          </div>
          {/* <div className="py-3">
            <p className="text-dark">
              not account?
              <Link to="/"> Sign up </Link>
            </p>
          </div> */}
          <div className="py-3">
            <p className="text-dark">
              no account?
              <AppDrawer />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// import AppDrawer from "../../../components/drawer";

// // const handleDrawer = () => {

// // }

// export default function SignIn() {
//   return (
//     <div className="h-100 border border-danger row m-0 p-0 justify-content-center align-items-center text-dark ">

//       <AppDrawer />
//     </div>
//   )
// }
