'use client';
import Card from "../Card";
import { GridItem } from "../page";
import localFont from 'next/font/local';
import * as animationData from '../../public/service_cube.json'

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function PastWorkPage() {
    return <>
        <GridItem><PastWork /></GridItem>
        <GridItem />
        <GridItem />

        <GridItem />
        <GridItem />
        <GridItem />

        <GridItem />
        <GridItem />
        <GridItem />
    </>;
}

function PastWork() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#252525"}
        textColor={"white"}
        title={"Past Work"}
        animationData={animationData}
    />;
}