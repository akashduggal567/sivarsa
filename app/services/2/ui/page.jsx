'use client';
import { GridItem } from "../../../page";
import Card from "../../../Card";

export default function AppMakers() {
    return <>
        <GridItem>
            <Description />
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
        </GridItem>

        <GridItem>
        </GridItem>
        <GridItem><Card videoSrc="/ui_video.mp4" /></GridItem>
        <GridItem>
        </GridItem>



        <GridItem></GridItem>
        <GridItem><UICommonTitle /></GridItem>
        <GridItem>
        </GridItem>
    </>;
}

export function UICommonTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#C7DFB8"}
        title={"Design UI & UX"}
        backgroundImage={<img id="noisy_bg" src="/ui_noisy_bg.png" />}
        headlineStyle={{ position: "absolute", top: 20 }}
    />;
}

function Description() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(0deg, #4417AC 0%, #171717 88.5%)"}
        textColor={"#C7DFB8"}
        title={"Creating Interfaces People Love"}
        headlineStyle={{ position: "absolute", top: 20 }}
    />;
}