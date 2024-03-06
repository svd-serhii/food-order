import React from "react";

const Button = ({ children, textOnly, className, ...props }) => {
	const cssClass = textOnly ? "text-button" : "button";
	cssClass += " " + className;

	return (
		<button {...props} className={cssClass}>
			{children}
		</button>
	);
};

export default Button;
