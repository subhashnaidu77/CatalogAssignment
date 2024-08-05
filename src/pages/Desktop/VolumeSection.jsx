import { Button, Img } from "../../components";
import React from "react";
export default function VolumeSection() {
return (
<>
<div className="relativecontent-end  border box-border border-#e9e9e9 border-t-0  w-[66.9%] ">
<div className="h-[260px] flex-1 self-center sm:h-auto"> 
<div className="absolute bottom-e left-e right-e top-e m-auto h-max flex-1 ">
<div className="flex items-start">
    <Img src="images/img_line.svg" alt="Line Image" className="mb-[68px] h-[290px] w-[900px] mt-2 ml-[-46px]   sm:h-auto" />
    <div className="relative  mt-[55px] flex w-[10%] flex-col gap-14 sm:gap-7">
    
<Button color="blue_gray_900" shape="round" className="self-stretch mt-[-12px] ml-[-70px] ">
<span className="items-center justify-center mt-[4px]">

64,850.35</span>
</Button>
<Button shape="round" className="mr-8 self-stretch mt-[12px] ml-[-55px] ">
<span className="items-center justify-center mt-[5px]">

63,179.71
</span>
</Button>

</div>
</div>

</div>

</div>


<Img src="images/img_volume.svg" alt="Volume Icon" className=" h-[34px] ml-[2px]   mt-12  " />


</div>




</>
);
}
