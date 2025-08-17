type ButtonProps = {
  label: string;
  primary?: boolean;
  onClick?: () => void;
};

const Button = ({ label, primary = true, onClick }: ButtonProps) => {
  return (
    <button
      className={primary ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button; // 👈 must be default export
