import { useState, useEffect } from "react";
import { fbGet } from "../../../config/firebase/firebase-methods";
import DropDown from "../../../components/input/dropdown";
import { MenuItem } from "@mui/material";
import CustomTableRow from "../../../components/table/table-row";
import CustomTableContainer from "../../../components/table/table-container";

export default function Acceptance() {
  const [acceptanceList, setAcceptanceList] = useState<any>([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(""); // State to store selected blood group

  const BloodGroups = [
    { value: "A", label: "A" },
    { value: "O", label: "O" },
    { value: "B", label: "B" },
    { value: "AB", label: "AB" },
  ];

  const GetacceptanceList = () => {
    fbGet("donorList")
      .then((res: any) => {
        console.log("Data from Firebase:", res);
        setAcceptanceList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetacceptanceList();
  }, []);

  // Function to filter the acceptance list based on the selected blood group
  const filterAcceptanceList = () => {
    if (selectedBloodGroup === "") {
      // If no blood group is selected, return the full list
      return acceptanceList;
    }
    return acceptanceList.filter((student: any) =>
      student.bloodGroup.includes(selectedBloodGroup)
    );
  };

  // Event handler for blood group selection
  const handleBloodGroupChange = (event: any) => {
    setSelectedBloodGroup(event.target.value);
  };

  return (
    <>
      <div>
        <DropDown
          HeaderValue="Blood Group"
          SelectValue={selectedBloodGroup}
          SelectOnChange={handleBloodGroupChange}
        >
          {BloodGroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </DropDown>
      </div>

      <div>
        <CustomTableContainer
          cols={[
            {
              heading: "Quiz",
              key: "quiz",
            },
            {
              heading: "Point",
              key: "point",
            },
            {
              heading: "Total",
              key: "total",
            },
          ]}
        >
          {filterAcceptanceList().map((student: any, i: any) => (
            <CustomTableRow
              key={student.id}
              column1={i + 1}
              column2={student.firstName}
              column3={student.bloodGroup}
            />
          ))}
        </CustomTableContainer>
      </div>
    </>
  );
}
