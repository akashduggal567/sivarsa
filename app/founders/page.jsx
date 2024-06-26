'use client';
import Card from "../Card";
import { GridItem } from "../page";
import TestimonialCard from "../testimonial-card";


export default function FoundersPage() {
    return <>
        <GridItem />
        <GridItem><Founders /></GridItem>
        <GridItem />

        <GridItem>
            <Founder
                review="Transforming ideas into seamless software with excellence and innovation"
                author="Rishabh"
                avatar={"/founder_2_avatar.png"}
            />
        </GridItem>
        <GridItem />
        <GridItem />

        <GridItem />
        <GridItem />
        <GridItem>
            <Founder2
                review="Unmatched tech and design expertise. Our go-to firm!"
                author="Sattender"
                avatar={"/founder_1_avatar.png"}
            />
        </GridItem>
    </>;
}


function Founders() {
    return <Card
        // backgroundImage={
        //     <img id="founders_bg" src="/founders_bg.png" />
        // }
        isHeadline
        // backgroundColor={"#F5F5F5"}
        // textColor={"#171717"}
        title={"Founders"}
    />;
}

function Founder({ review, author, avatar }) {
    return <TestimonialCard
        backgroundColor={"#2D68FF"}
        textColor={"#F5F5F5"}
        review={review}
        author={author}
        avatar={avatar}
    />;
}

function Founder2({ review, author, avatar }) {
    return <TestimonialCard
        backgroundColor={"#763DF8"}
        textColor={"#F5F5F5"}
        review={review}
        author={author}
        avatar={avatar}
    />;
}
