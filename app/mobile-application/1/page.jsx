'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../page";
import Card from "../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><Title /></GridItem>
        <GridItem />
        <GridItem />

        <GridItem />
        <GridItem><Card videoSrc="/mobile_app_video.mp4" /></GridItem>
        <GridItem />


        <GridItem />
        <GridItem />
        <GridItem><CommonTitle /></GridItem>
    </>;
}

function Title({ onClick }) {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#83C7E6"}
        title={"Crafting Apps that captivate"}
    />;
}

function CommonTitle({ onClick }) {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#101D68"}
        textColor={"#83C7E6"}
        title={"App Makers"}
    />;
}


