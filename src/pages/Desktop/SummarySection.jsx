import { Text } from "../../components";
import React from "react";

import { TabList, Tab} from "react-tabs";

export default function SummarySection() {

return (


<>
{/* summary section */}

<div className="flex flex-col items-center gap-10 sm:gap-10">

<div className="mx-auto flex w-full max-w-[1230px] flex-col items-start gap-2.5 self-stretch sm:w-full sm:gap-2.5 sm:px-5">

<div className="flex flex-wrap items-start gap-[9px] self-stretch">

<Text size="texts" as="p" className="mt-6 !text-gray-900 font-bold text-5xl">

63,179.71

</Text>

<Text size="textmd " as ="p" className=" block self-center !text-blue_gray-400 font-bold ">

USD

</Text>


</div>

<Text as="p" className="text-green-400">

+2,161.42 (3.54%)

</Text>

</div>

<div className="flex flex-col items-center self-stretch">

<TabList className="mx-[60px] flex flex-wrap gap-[30px] self-stretch sm:mx-0">

<Tab className="text-[18px] font-normal text-gray-600 sm:text-[15px]">Summary</Tab>

<Tab className="text-[18px] font-normal text-gray-600 sm:text-[15px]">Chart</Tab>

<Tab className="text-[18px] font-normal text-gray-600 sm:text-[15px]">Statistics</Tab>

<Tab className="text-[18px] font-normal text-gray-600 sm:text-[15px]">Analysis</Tab>

<Tab className="text-[18px] font-normal text-gray-600 sm:text-[15px]">Settings</Tab>

</TabList>

<div className="mt-5 h-[1px] w-full self-stretch bg-blue_gray-50" />

<div className="ml-[144px] mr-[10px] h-[2px] w-[6%] self-start bg-indigo-a400 sm:ml-0" />

</div>

</div>

</>

);


}
