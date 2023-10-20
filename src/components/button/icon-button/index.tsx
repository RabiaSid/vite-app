import Button from "@mui/material/Button";

type ButtonProps = {
  startIcon?: any;
  className?: any;
  label?: string;
  onClick?: (...args: any[]) => any;
  children?: React.ReactNode;
};

export default function IconButton(props: ButtonProps) {
  const { startIcon, className, label, onClick, children } = props;

  return (
    <Button
      className={className}
      startIcon={startIcon}
      onClick={onClick}
      variant="contained"
      fullWidth={true}
    >
      <text className="d-none d-md-block">{label}</text>
      {children !== undefined && (
      <>{children}</>
      )}
    </Button>
  );
}
