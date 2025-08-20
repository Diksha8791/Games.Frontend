interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

export const Button = ({
  onClick,
  children,
  color = "primary",
}: ButtonProps) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
