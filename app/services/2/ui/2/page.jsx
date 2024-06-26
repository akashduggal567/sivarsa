'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";
import { UICommonTitle } from "../page";

export default function WebWonderFrameworks() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /> </GridItem>
        <GridItem><UserResearch /></GridItem>
        <GridItem><WireFrames /></GridItem>

        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem><VisualDesign /></GridItem>


        <GridItem><UsabilityTesting /></GridItem>
        <GridItem><UICommonTitle /></GridItem>
        <GridItem></GridItem>
    </>;
}

function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#CFB8E5"}
        title={"Skills"}
    />;
}

function UserResearch() {
    return <Card
        isHeadline
        textColor={"#7030FF"}
        title={"User Research"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M39.0436 10.4742H37.1436V12.3742H39.0436V10.4742Z" fill="#7030FF" />
                <path d="M37.1436 12.3742H33.3311V14.2867H37.1436V12.3742Z" fill="#7030FF" />
                <path d="M37.1436 8.57422H33.3311V10.4742H37.1436V8.57422Z" fill="#7030FF" />
                <path d="M29.5186 29.5242V31.4242H25.7186V33.3367H21.9061V35.2367H18.0936V33.3367H14.2811V31.4242H10.4811V29.5242H6.66855V27.6117H0.956055V29.5242H2.85605V31.4242H6.66855V33.3367H10.4811V35.2367H14.2811V37.1367H18.0936V39.0492H21.9061V37.1367H25.7186V35.2367H29.5186V33.3367H33.3311V31.4242H37.1436V29.5242H39.0436V27.6117H33.3311V29.5242H29.5186Z" fill="#7030FF" />
                <path d="M29.5186 23.8117V25.7117H25.7186V27.6117H21.9061V29.5242H18.0936V27.6117H14.2811V25.7117H10.4811V23.8117H6.66855V21.8992H0.956055V23.8117H2.85605V25.7117H6.66855V27.6117H10.4811V29.5242H14.2811V31.4242H18.0936V33.3367H21.9061V31.4242H25.7186V29.5242H29.5186V27.6117H33.3311V25.7117H37.1436V23.8117H39.0436V21.8992H33.3311V23.8117H29.5186Z" fill="#7030FF" />
                <path d="M29.5186 18.0992V19.9992H25.7186V21.8992H21.9061V23.8117H18.0936V21.8992H14.2811V19.9992H10.4811V18.0992H6.66855V16.1867H0.956055V18.0992H2.85605V19.9992H6.66855V21.8992H10.4811V23.8117H14.2811V25.7117H18.0936V27.6117H21.9061V25.7117H25.7186V23.8117H29.5186V21.8992H33.3311V19.9992H37.1436V18.0992H39.0436V16.1867H33.3311V18.0992H29.5186Z" fill="#7030FF" />
                <path d="M33.3311 14.2867H29.5186V16.1867H33.3311V14.2867Z" fill="#7030FF" />
                <path d="M33.3311 6.66174H29.5186V8.57424H33.3311V6.66174Z" fill="#7030FF" />
                <path d="M29.5187 16.1867H25.7188V18.0992H29.5187V16.1867Z" fill="#7030FF" />
                <path d="M29.5187 4.76172H25.7188V6.66172H29.5187V4.76172Z" fill="#7030FF" />
                <path d="M25.7188 18.0992H21.9062V19.9992H25.7188V18.0992Z" fill="#7030FF" />
                <path d="M25.7188 2.86169H21.9062V4.76169H25.7188V2.86169Z" fill="#7030FF" />
                <path d="M21.9062 19.9992H18.0938V21.8992H21.9062V19.9992Z" fill="#7030FF" />
                <path d="M21.9062 0.949219H18.0938V2.86172H21.9062V0.949219Z" fill="#7030FF" />
                <path d="M18.0938 18.0992H14.2812V19.9992H18.0938V18.0992Z" fill="#7030FF" />
                <path d="M18.0938 2.86169H14.2812V4.76169H18.0938V2.86169Z" fill="#7030FF" />
                <path d="M14.2814 16.1867H10.4814V18.0992H14.2814V16.1867Z" fill="#7030FF" />
                <path d="M14.2814 4.76172H10.4814V6.66172H14.2814V4.76172Z" fill="#7030FF" />
                <path d="M10.4814 14.2867H6.66895V16.1867H10.4814V14.2867Z" fill="#7030FF" />
                <path d="M10.4814 6.66174H6.66895V8.57424H10.4814V6.66174Z" fill="#7030FF" />
                <path d="M6.66895 12.3742H2.85645V14.2867H6.66895V12.3742Z" fill="#7030FF" />
                <path d="M6.66895 8.57422H2.85645V10.4742H6.66895V8.57422Z" fill="#7030FF" />
                <path d="M2.85605 10.4742H0.956055V12.3742H2.85605V10.4742Z" fill="#7030FF" />
            </svg>
        }
    />;
}


function WireFrames() {
    return <Card
        isHeadline
        textColor={"#7030FF"}
        title={"WireFrames"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                <path d="M35.1936 15.2375H33.2936V13.325H31.3811V15.2375H29.4811V17.1375H27.5811V19.05H29.4811V20.95H31.3811V22.85H33.2936V20.95H35.1936V19.05H37.0936V17.1375H35.1936V15.2375Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M29.4811 13.325H27.5811V15.2375H29.4811V13.325Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M27.5814 24.7625H25.6689V32.375H27.5814V24.7625Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M27.5814 11.425H25.6689V13.325H27.5814V11.425Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M25.6686 32.375H23.7686V34.2875H25.6686V32.375Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M25.6686 22.85H23.7686V24.7625H25.6686V22.85Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M25.6686 9.52502H23.7686V11.425H25.6686V9.52502Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M23.7689 19.05H21.8564V22.85H23.7689V19.05Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M23.7689 7.61249H21.8564V9.52499H23.7689V7.61249Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M23.7691 5.7125V3.8125H21.8566V1.9H19.9566V0H18.0566V1.9H16.1441V3.8125H14.2441V5.7125H16.1441V7.6125H18.0566V9.525H19.9566V7.6125H21.8566V5.7125H23.7691Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M14.2437 34.2875V38.0875H12.3438V40H25.6687V38.0875H23.7688V34.2875H14.2437Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M21.8561 15.2375H19.9561V19.05H21.8561V15.2375Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M18.0566 24.7625H16.1441V26.6625H14.2441V28.5625H16.1441V30.475H18.0566V32.375H19.9566V30.475H21.8566V28.5625H23.7691V26.6625H21.8566V24.7625H19.9566V19.05H18.0566V24.7625Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M19.9566 13.325H18.0566V15.2375H19.9566V13.325Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M18.0561 15.2375H16.1436V19.05H18.0561V15.2375Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M16.1441 19.05H14.2441V22.85H16.1441V19.05Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M16.1441 7.61249H14.2441V9.52499H16.1441V7.61249Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M14.2437 32.375H12.3438V34.2875H14.2437V32.375Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M14.2437 22.85H12.3438V24.7625H14.2437V22.85Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M14.2437 9.52502H12.3438V11.425H14.2437V9.52502Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M12.3441 24.7625H10.4316V32.375H12.3441V24.7625Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M12.3441 11.425H10.4316V13.325H12.3441V11.425Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M10.4313 13.325H8.53125V15.2375H10.4313V13.325Z" fill="#7030FF" fill-opacity="0.8" />
                <path d="M6.61875 13.325H4.71875V15.2375H2.81875V17.1375H0.90625V19.05H2.81875V20.95H4.71875V22.85H6.61875V20.95H8.53125V19.05H10.4313V17.1375H8.53125V15.2375H6.61875V13.325Z" fill="#7030FF" fill-opacity="0.8" />
            </svg>
        }
    />;
}

function VisualDesign() {
    return <Card
        isHeadline
        textColor={"#7030FF"}
        title={"Visual Design"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                <path d="M25.6689 9.525V11.425H27.5814V13.325H29.4814V15.2375H33.2939V13.325H35.1939V9.525H33.2939V7.6125H35.1939V5.7125H37.0939V1.9H35.1939V0H31.3814V1.9H29.4814V3.8125H27.5814V1.9H23.7689V3.8125H21.8564V7.6125H23.7689V9.525H25.6689Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M27.5814 13.325H25.6689V15.2375H27.5814V13.325Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M25.6686 15.2375H23.7686V17.1375H25.6686V15.2375Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M23.7689 9.52499H21.8564V11.425H23.7689V9.52499Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M18.0566 17.1375V15.2375H16.1441V17.1375H14.2441V19.05H12.3441V20.95H10.4316V26.6625H16.1441V24.7625H18.0566V22.85H19.9566V20.95H21.8566V19.05H23.7691V17.1375H18.0566Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M21.8561 11.425H19.9561V13.325H21.8561V11.425Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M19.9566 13.325H18.0566V15.2375H19.9566V13.325Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M8.53125 36.1875H4.71875V38.0875H0.90625V40H18.0562V38.0875H14.2437V36.1875H10.4313V34.2875H8.53125V36.1875Z" fill="#7030FF" fill-opacity="0.6" />
                <path d="M10.4313 28.5625H8.53125V32.375H10.4313V28.5625Z" fill="#7030FF" fill-opacity="0.6" />
            </svg>
        }
    />;
}


function UsabilityTesting() {
    return <Card
        isHeadline
        textColor={"#7030FF"}
        title={"Usability Testing"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                <path d="M37.0934 32.375H35.1934V38.0875H33.2934V34.2875H31.3809V40H37.0934V32.375Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M35.1939 24.7625H33.2939V32.375H35.1939V24.7625Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M31.3814 28.5625H29.4814V34.2875H31.3814V28.5625Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M29.4813 20.95H31.3813V24.7625H33.2938V19.05H31.3813V9.525H33.2938V1.9H19.9562V0H18.0562V1.9H4.71875V9.525H6.625V3.8125H27.5875V9.525H25.675V19.05H23.775V26.6625H2.81875V19.05H0.90625V28.5625H4.71875V34.2875H6.625V28.5625H8.5375V34.2875H6.625V38.0875H4.71875V34.2875H2.81875V40H8.53125V36.1875H19.9562V40H25.6687V34.2875H23.7688V38.0875H21.8563V34.2875H10.4313V32.375H21.8563V34.2875H23.7688V28.5625H25.6687V34.2875H27.5812V28.5625H29.4813V20.95ZM21.8563 30.475H10.4313V28.5625H21.8563V30.475Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M23.7689 13.325H21.8564V17.1375H23.7689V13.325Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M21.8561 17.1375H19.9561V20.95H21.8561V17.1375Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M21.8561 11.425H19.9561V13.325H21.8561V11.425Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M21.8561 5.71249H19.9561V7.61249H21.8561V5.71249Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M19.9566 20.95H10.4316V22.85H19.9566V20.95Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M18.0561 13.325H16.1436V15.2375H18.0561V13.325Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M16.1441 17.1375H14.2441V19.05H16.1441V17.1375Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M12.3441 13.325H10.4316V15.2375H12.3441V13.325Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M19.9562 11.425V7.61249H18.0562V9.52499H16.1438V5.71249H14.2437V9.52499H12.3438V7.61249H10.4313V9.52499H8.53125V11.425H19.9562Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M10.4313 17.1375H8.53125V20.95H10.4313V17.1375Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M10.4313 5.71249H8.53125V7.61249H10.4313V5.71249Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M8.53164 11.425H6.61914V17.1375H8.53164V11.425Z" fill="#7030FF" fill-opacity="0.4" />
                <path d="M4.71836 9.52499H2.81836V19.05H4.71836V9.52499Z" fill="#7030FF" fill-opacity="0.4" />
            </svg>
        }
    />;
}




