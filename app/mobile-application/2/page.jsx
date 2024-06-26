'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../page";
import Card from "../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><UserSatisfaction /></GridItem>
        <GridItem />
        <GridItem />
        
        <GridItem />
        <GridItem><AppsLaunched /> </GridItem>
        <GridItem />


        <GridItem><Downloads /></GridItem>
        <GridItem />
        <GridItem><CommonTitle /></GridItem>
    </>;
}


function UserSatisfaction({ onClick }) {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#83C7E6"}
        title={"98%"}
        subtitle="user satisfaction"
    />;
}


function AppsLaunched({ onClick }) {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#83C7E6"}
        title={"4+"}
        subtitle="Apps Launched"
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


function Downloads({ onClick }) {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#80C7EE"}
        title={"100k"}
        subtitle="Downloads"
    />;
}
