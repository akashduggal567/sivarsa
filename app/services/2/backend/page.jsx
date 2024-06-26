'use client';
import { GridItem } from "../../../page";
import Card from "../../../Card";

export default function AppMakers() {
    return <>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>

        <GridItem>
            <BackendCommonTitle />
        </GridItem>
        <GridItem><Card videoSrc="/backend_video.mp4" /></GridItem>
        <GridItem>
            <Description />
        </GridItem>



        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
    </>;
}

export function BackendCommonTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#C7DFB8"}
        title={"Backend Power House"}
        backgroundImage={<img id="noisy_bg" src="/backend_noisy_gradient.png" />}
        headlineStyle={{ position: "absolute", top: 20 }}
    />;
}

function Description() {
    return <Card
        backgroundImage={<img id="noisy_bg" src="/backend_bg.png" />}
        textColor={"#F3C7E8"}
        title={"Building the Engines that Drive Your Applications"}
        headlineStyle={{ position: "absolute", top: 10, left: 10 }}
    />;
}