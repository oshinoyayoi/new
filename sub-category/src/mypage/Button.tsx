import React from "react";
// import "./Button.css";

function Button(props: {
  [x: string]: any;
  variant?: "primary" | undefined;
  children: any;
}) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
