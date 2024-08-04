import React from "react";

import PropTypes from "prop-types";

const shapes = {

round: "rounded-[5px]", };

const variants = {

fill: { blue_gray_900: "bg-blue_gray-900 text-white-a700", 

indigo_A400: "bg-indigo-a400 text-white-a700",},

};

const sizes = {

xs: "h-[32px] px-3.5 text-[18px]", };

const Button = ({

children,

className = "",

leftIcon,

rightIcon,

shape,

variant ="fill",

size = "xs",

color= "indigo_A400",
 ...restProps }) => {

return (

<button

className={`${className} flex flex-row itens-center Justify-conter text-center cursor-pointer whitespace-nowrap text-white-a788 text-[18px] rounded-[5px] sn: text-[15px]  ${(shape && shapes[shape]) || ""}  ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}

{...restProps}

>

{!!leftIcon && leftIcon}
 {children}

{!!rightIcon && rightIcon}

</button>
)
 }
Button.propTypes ={

className: PropTypes.string,

children: PropTypes.node, 
lefticon:  PropTypes.node,

righticon: PropTypes.node,

shape: PropTypes.oneOf(["round"]), 
size: PropTypes.oneOf([""]),

variant: PropTypes.oneOf(["fill"]),

color: PropTypes.oneOf(["blue_gray_908", "Indigo_A400"]),
};

export {Button}
