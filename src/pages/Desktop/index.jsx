import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
 import SummarySection from "./SummarySection";
import VolumeSection from "./VolumeSection";
import React from "react";
import { TabPanel, Tabs } from "react-tabs";

export default function DesktopPage() {

    return (
       <>
    <Helmet>
    <title>
        Catalog Assignment 
    </title>
    <meta
    name="description"
    content="Explore the latest miket summary, including USD rates, trends, and comprehensive analysis. Stay up" />
    </Helmet>

    <Tabs 
    className="md:py-5 flex w-full flex-col gap-14 bg-white-a700 py=[60px] sm:gap-7"
    selectedTabClassName=""
    selectedTabPanelClassName="ml-[60px] mr-[100px] sm:mx-0 !relative tab-panel--selected"
   >
    {/* summary section */}
    <SummarySection />
    {[...Array(5)].map((_, index) => (

<TabPanel key={`tab-panel${index}`} className="absolute ml-[60px] mr-[100px] justify-center sm:mx-6">

<div className="w-full">

<div className="flex flex-col gap-[30px] sm:gap-[30px]">

< div className="flex items-center">

<div className="flex  w-[38%] items-center justify-center">

<Img src="images/img_icon.svg" alt="Icon Image" className="h-[24px] w-[24px] " />

<Text as="p" className="ml-2.5 ">

Fullscreen

</Text>

<div className="flex flex-1 items-center gap-2.5 px-[30px] sm:px-5">

<Img src="images/img_icon_gray_600.svg" alt="Gray Icon" className="h-[24px] w-[24px]" />

<Text as="p">Compare</Text>
</div>
</div>
<div className="md:px-5 mr-2 flex flex-1 items-center  px-14">

<Text as="p">1d</Text>

<Text as="p" className="ml-[34px]">

3d

</Text>

<Button shape="round" className="ml-5 min-w-[45px]">
<span className="mt-[4.5px] mr-[1px]">
1w
</span>
</Button>

<Text as="p" className="ml-5">

1m

</Text>

<Text as="p" className="ml-[34px]">

6m

</Text>

<Text as="p" className="ml-[34px]">

1y

</Text>

<Text as="p" className="ml-[34px]">

max

</Text>

</div>


</div>

<VolumeSection />
</div>
</div>
</TabPanel>
    ))}


    </Tabs>
    </>

);}