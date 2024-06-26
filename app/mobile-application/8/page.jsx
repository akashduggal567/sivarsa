'use client';
import { GridItem } from "../../page";
import Card from "../../Card";

export default function AppMakers() {
    return <>
        <GridItem><Title /></GridItem>
        <GridItem></GridItem>
        <GridItem><SpeedToMarket /></GridItem>

        <GridItem></GridItem>
        <GridItem><SpeedToMarket /></GridItem>
        <GridItem>
        </GridItem>



        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><ScalabelSolutions /></GridItem>
    </>;
}


function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor="#0E4FB2"
        textColor={"#C7DFB8"}
        title={"Why Us?"}
        headlineStyle={{ position: "absolute", top: 20 }}
    />;
}


function UCD() {
    return <Card
        isHeadline
        backgroundColor={"#0E4FB2"}
        textColor={"rgba(131, 199, 230, 0.80)"}
        title="User-Centric Design"
        subtitle="Building robust and scalable websites."
    />;
}

function SpeedToMarket() {
    return <Card
        isHeadline
        backgroundColor={"#0E4FB2"}
        textColor={"rgba(131, 199, 230, 0.80)"}
        title="Speed to Market"
        subtitle="Building robust and scalable websites.."
    />;
}

export function ScalabelSolutions() {
    return <Card
        isHeadline
        backgroundColor={"#5585A7"}
        textColor={"rgba(131, 199, 230, 0.80)"}
        title="Scalable Solutions"
        subtitle="Optimized for search engines to drive traffic."
    />;
}

