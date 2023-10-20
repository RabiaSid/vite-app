import { Button } from "@mui/material";

type ButtonProps = {
  type?:any;
  label: any;
  onClick: (...args: any[]) => any;
  ref?: any;
};

export default function PrimaryButton(props: ButtonProps) {
  const {ref, type, label, onClick } = props;

  return (
    <Button ref={ref} type={type} className='my-2 rounded-5 btn_primary' sx={{background:'#235923'}} variant="contained" color="primary" fullWidth onClick={onClick}>
      {label}
    </Button>
  );
}
