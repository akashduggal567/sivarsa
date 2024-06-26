'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../page";
import Card from "../../Card";

export default function Staffing() {
    const router = useRouter();

    return <>
        <GridItem><ScalingTeam /></GridItem>
        <GridItem />
        <GridItem />

        <GridItem />
        <GridItem><Card videoSrc="/staffing_1.mp4" /></GridItem>
        <GridItem />

        <GridItem />
        <GridItem />
        <GridItem onClick={() => router.push("/services/staffing")}>
            <TalentOnTap />
        </GridItem>
    </>;
}

function ScalingTeam() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #B88D01 0%, #171717 88.5%)"}
        textColor={"#F5DCAE"}
        title={"Scaling your Team, Seamlessly"}
        // subtitle="Ensuring flawless performance across all devices."
    />;
}

export function TalentOnTap() {
    return <Card
        isStats
        textColor={"#9D5209"}
        title={"Talent on Tap"}
        backgroundImage={<img id="noisy_bg" src="/talent_on_tap.png" />}
        headlineStyle={{ 
            position: "absolute", 
            top: 10, 
            left: 10
        }}
    />;
}