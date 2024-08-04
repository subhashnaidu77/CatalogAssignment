import { Button, Img } from "../../components";
import React from "react";
export default function VolumeSection() {
return (
<>
<div className="relativecontent-end">
<div className="h-[260px] flex-1 self-center sm:h-auto"> 
<div className="absolute bottom-e left-e right-e top-e m-auto h-max flex-1 mt-6">
<div className="flex items-start">
    <Img src="images/img_line.svg" alt="Line Image" className="mb-[68px] h-[272px] w-[900px] mt-2  sm:h-auto" />
    <div className="relative ml-[-40px] mt-[55px] flex w-[12%] flex-col gap-14 sm:gap-7">
    
<Button color="blue_gray_900" shape="round" className="self-stretch mt-[-17px] ml-[-35px] mr-6">
<span className="items-center justify-center mt-[4px]">

64,850.35</span>
</Button>
<Button shape="round" className="mr-2.5 self-stretch mt-[12px] ml-[-30px] sm:mr-0 mr-4 ">
<span className="items-center justify-center mt-[5px]">

63,179.71
</span>
</Button>

</div>
</div>

</div>

</div>


<Img src="images/img_volume.svg" alt="Volume Icon" className=" h-[32.2px] ml-[61.9px]   mt-12  " />

<Img src="images/img_line2.svg" alt="Volume Icon 2" className="mb-1 h-[11px] mt-[-5.9px] w-[82%]  max-w-[63%] ml-[65px] sm:ml-0 " />
</div>




</>
);
}
