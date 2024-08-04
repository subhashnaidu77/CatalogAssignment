import React from "react";

const sizes = {

textxs: "text-[18px] font-normal sm:text-[15px]",

texts: "text-[24px] font-normal sm:text-[20px]", 
textmd: "text-[70px] font-normal sm:text-[48px]",
};
const Text =({ children, className = "", as, size ="textxs", ...restProps }) => { const Component= as || "p";
return (
<Component className={`text-gray-600 font-circularstd ${className} ${sizes[size]}`} {...restProps}> {children}
</Component>

);

};


export { Text };
