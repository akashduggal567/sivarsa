'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../page";
import Card from "../../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem></GridItem>
        <GridItem>
           <Description /></GridItem>
        <GridItem>
        </GridItem>

        <GridItem><CommonTitle /></GridItem>
        <GridItem>
        </GridItem>
        <GridItem>
        </GridItem>
        


        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><Card videoSrc="/ai_video.mp4" /></GridItem>
    </>;
}

function CommonTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        // backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"AI Wizards"}
        backgroundImage={<img id="noisy_bg" src="/ai_noisy_gradient.png" />}
        headlineStyle={{ position: "absolute", top: 20}}
    />;
}

function Description() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%)"}
        textColor={"rgba(241, 197, 170, 0.80)"}
        subtitle={"Turning Data into Magic Moments"}
        headlineStyle={{ position: "absolute", top: 20}}
    />;
}