import classNames from "classnames";

const className = "font-bold";
const variants = {
  primary: "bg-blue-600 dark:bg-pink-600 text-white disabled:bg-blue-300",
  secondary: "border-2 border-blue-600 text-blue-600",
};
const sizes = {
  sm: "py-1 px-1.5 text-xs",
  md: "py-1.5 px-3 text-md",
  lg: "py-2.5 px-5 text-lg",
};

const Button = (props) => {
  const { variant = "primary", size = "md", ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  );
};

export default Button;