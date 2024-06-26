'use client';
import Card from "../Card";
import { GridItem } from "../page";
import localFont from 'next/font/local';
import TestimonialCard from "../testimonial-card";
import * as animationData from '../../public/fox.json'

// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: '../fonts/PPMondwest-Regular.otf',
    display: 'swap',
});

export default function PastWorkPage() {
    return <>
        <GridItem><Testimonials /></GridItem>
        <GridItem />
        <GridItem>
            <Review
                review="Their AI and design solutions transformed our business. Highly recommended!"
                author="Emily R."
            />
        </GridItem>

        <GridItem />
        <GridItem>
            <Review
                review="Unmatch Tech and design expertise. Our go-to firm!"
                author="Mark S."
            />
        </GridItem>
        <GridItem />

        <GridItem>
            <Review
                review="Exceptional AI solutions and innovative designs. Exceeded expectations!"
                author="Samantha J."
            />
        </GridItem>
        <GridItem />
        <GridItem>
            <Review
                review="Professional, responsive and creative. Perfect blend of tech and design!"
                author="James K"
            />
        </GridItem>
    </>;
}

function Testimonials() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#F5F5F5"}
        textColor={"#171717"}
        title={"Client Works"}
        animationData={animationData}
    />;
}

function Review({ review, author }) {
    return <TestimonialCard
        backgroundColor={"#212121"}
        textColor={"#F5F5F5"}
        review={review}
        author={author}
        bgVideo="/testimonial_bg.mov"
    />;
}
