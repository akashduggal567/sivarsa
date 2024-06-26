'use client';
import { GridItem } from "../../../../page";
import Card from "../../../../Card";
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../../../../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function WebWonderSkills() {
    return <>
        <GridItem />
        <GridItem></GridItem>
        <GridItem><Discovery /></GridItem>

        <GridItem><AICommonTitle /></GridItem>
        <GridItem><Design /></GridItem>
        <GridItem></GridItem>

        <GridItem><Deployment /></GridItem>
        <GridItem />
        <GridItem />
    </>;
}


export function AICommonTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#C7DFB8"}
        title={"AI Wizards"}
        backgroundImage={<img id="noisy_bg" src="/ai_noisy_gradient.png" />}
        headlineStyle={{ position: "absolute", top: 20 }}
    />;
}

function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"#763802"}
        textColor={"#F1C5AD"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            91 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>%</sup>
        </div>}
        subtitle="Accuracy improvement"
        headlineStyle={{ fontSize: "2em" }}
    />;
}

function Design() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#E56D16"}
        textColor={"#F1C5AD"}
        title={<div style={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
            5 <sup className={titleFont.className} style={{ fontSize: "0.5em" }}>+</sup>
        </div>}
        subtitle={"Ai Projects Delivered"}
        headlineStyle={{ fontSize: "3em" }}
    />;
}

function Deployment() {
    return <Card
        isHeadline
        backgroundColor={"#C47422"}
        textColor={"#F1C5AA"}
        title={"Trusted by Global Brands"}
        headlineStyle={{ fontSize: "1.5em"}}
    />;
}