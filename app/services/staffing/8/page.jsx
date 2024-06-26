'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../page";
import { TalentOnTap } from "../page";
import Card from "../../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><Title /></GridItem>

        <GridItem>
        </GridItem>
        <GridItem><ScalableSolutions /></GridItem>


        <GridItem>
        </GridItem>
        <GridItem><CostEffective /></GridItem>
        <GridItem>
        </GridItem>



        <GridItem>
        </GridItem>
        <GridItem></GridItem>
        <GridItem><TopTalent /></GridItem>
    </>;
}

function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        // backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#9D5209"}
        title={"Why Us?"}
        backgroundImage={<img id="noisy_bg" src="/talent_on_tap.png" />}
        headlineStyle={{ position: "absolute", top: 20}}
    />;
}


function CostEffective() {
    return <Card
        isHeadline
        backgroundColor={"#F5BB0B"}
        textColor={"#9D5209"}
        title="Cost Effective"
        subtitle="Reduce overhead costs associated with hiring full-time staff."
        subtitleColor="rgba(157, 82, 9, 0.80)"
    />;
}

function ScalableSolutions() {
    return <Card
        isHeadline
        backgroundColor={"#F5BB0B"}
        textColor={"#9D5209"}
        title="Scalable Solutions"
        subtitle="Quickly scale your team up or down as needed.."
        subtitleColor="rgba(157, 82, 9, 0.80)"
    />;
}

function TopTalent() {
    return <Card
        isHeadline
        backgroundColor={"#C4AA7C"}
        textColor={"#EAEBD3"}
        title="Top Talent"
        subtitle="Get the best professionals without the hassle of recruitment."
        subtitleColor="#EAEBD3"
    />;
}