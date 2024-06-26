'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><Title /></GridItem>

        <GridItem>
        </GridItem>
        <GridItem></GridItem>


        <GridItem>
        </GridItem>
        <GridItem><IncreasedEngagement /></GridItem>
        <GridItem><EfficientDev />
        </GridItem>



        <GridItem>
        </GridItem>
        <GridItem><UCA /></GridItem>
        <GridItem></GridItem>
    </>;
}

function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        // backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Why Us?"}
        backgroundImage={<img id="noisy_bg" src="/ui_noisy_bg.png" />}
        headlineStyle={{ position: "absolute", top: 20}}
    />;
}


function EfficientDev() {
    return <Card
        isHeadline
        backgroundColor={"#A964E5"}
        textColor={"#CFB8E5"}
        title="Efficient Development"
        subtitle="Clear designs that streamline the development process."
    />;
}

function IncreasedEngagement() {
    return <Card
        isHeadline
        backgroundColor={"#724EA3"}
        textColor={"#CFB8E5"}
        title="Increased Engagement"
        subtitle="Interfaces that keep users coming back."
        subtitleColor="rgba(207, 184, 229, 0.80)"
    />;
}

function UCA() {
    return <Card
        isHeadline
        backgroundColor={"#AC00E2"}
        textColor={"#CFB8E5"}
        title="User Centric Approach"
        subtitle="Optimized for search engines to drive traffic."
        subtitleColor="rgba(207, 184, 229, 0.80)"
    />;
}