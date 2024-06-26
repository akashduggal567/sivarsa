'use client';
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function SkillsPage() {
    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem><ResponsiveDesign /></GridItem>
        <GridItem><ECommerceSolutions /></GridItem>

        <GridItem><CustomWebDev /></GridItem>
        <GridItem></GridItem>
        <GridItem />

        <GridItem><Title /></GridItem>
        <GridItem></GridItem>
        <GridItem><CMS /></GridItem>

    </>;
}

function Title() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Web Wonder"}
    />;
}


function ResponsiveDesign() {
    return <Card
        isHeadline
        textColor={"#39F417"}
        title={"Responsive Web Design"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M1.9 11.425H38.1V36.1875H40V3.8125H38.1V9.525H1.9V3.8125H0V36.1875H1.9V11.425Z" fill="#39F417" />
                <path d="M38.1004 36.1875H1.90039V38.1H38.1004V36.1875Z" fill="#39F417" />
                <path d="M5.71289 15.2373V32.3873H34.2879V15.2373H5.71289ZM17.1379 24.7623H15.2379V26.6623H13.3379V28.5748H11.4254V26.6623H13.3379V24.7623H15.2379V22.8623H13.3379V20.9498H11.4254V19.0498H13.3379V20.9498H15.2379V22.8623H17.1379V24.7623ZM28.5754 24.7623H20.9504V22.8623H28.5754V24.7623Z" fill="#39F417" />
                <path d="M13.3373 5.7124H11.4248V7.6249H13.3373V5.7124Z" fill="#39F417" />
                <path d="M9.525 5.7124H7.625V7.6249H9.525V5.7124Z" fill="#39F417" />
                <path d="M5.7125 5.7124H3.8125V7.6249H5.7125V5.7124Z" fill="#39F417" />
                <path d="M38.1004 1.8999H1.90039V3.8124H38.1004V1.8999Z" fill="#39F417" />
            </svg>
        }
    />;
}

function ECommerceSolutions() {
    return <Card
        isHeadline
        textColor={"#39F417"}
        title={"E-Com Solutions"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clip-path="url(#clip0_113_5665)">
                    <path d="M2.74961 35.2376H4.66211V33.3376H10.3746V37.1501H6.56211V39.0501H35.1371V37.1501H31.3246V33.3376H37.0371V35.2376H38.9496V20.0001H40.8496V18.1001H35.1371V14.2876H33.2371V18.1001H8.47461V14.2876H6.56211V18.1001H0.849609V20.0001H2.74961V35.2376ZM31.3246 20.0001H37.0371V23.8126H31.3246V20.0001ZM31.3246 25.7126H37.0371V31.4376H31.3246V25.7126ZM21.7996 20.0001H29.4246V23.8126H21.7996V20.0001ZM21.7996 25.7126H29.4246V31.4376H21.7996V25.7126ZM21.7996 33.3376H29.4246V37.1501H21.7996V33.3376ZM12.2746 20.0001H19.8996V23.8126H12.2746V20.0001ZM12.2746 25.7126H19.8996V31.4376H12.2746V25.7126ZM12.2746 33.3376H19.8996V37.1501H12.2746V33.3376ZM4.66211 20.0001H10.3746V23.8126H4.66211V20.0001ZM4.66211 25.7126H10.3746V31.4376H4.66211V25.7126Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M37.0367 35.2378H35.1367V37.1503H37.0367V35.2378Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M33.2367 10.4751H31.3242V14.2876H33.2367V10.4751Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M31.3248 6.67529H29.4248V10.4753H31.3248V6.67529Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M17.9994 6.6752V8.5752H19.8994V10.4752H21.7994V8.5752H23.7119V6.6752H29.4244V4.7627H23.7119V2.8627H21.7994V0.950195H19.8994V2.8627H17.9994V4.7627H12.2744V6.6752H17.9994Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M12.275 6.67529H10.375V10.4753H12.275V6.67529Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M10.3746 10.4751H8.47461V14.2876H10.3746V10.4751Z" fill="#39F417" fill-opacity="0.8" />
                    <path d="M6.56211 35.2378H4.66211V37.1503H6.56211V35.2378Z" fill="#39F417" fill-opacity="0.8" />
                </g>
                <defs>
                    <clipPath id="clip0_113_5665">
                        <rect width="40" height="40" fill="white" transform="translate(0.849609)" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function CustomWebDev() {
    return <Card
        isHeadline
        textColor={"#39F417"}
        title={"Custom Web Development"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <path d="M35.3377 34.2875H37.2502V32.3875H39.1502V7.625H37.2502V9.525H35.3377V11.425H29.6252V13.3375H10.5752V15.2375H27.7252V24.7625H29.6252V22.8625H35.3377V20.95H37.2502V22.8625H35.3377V24.7625H29.6252V26.6625H27.7252V36.1875H10.5752V38.1H29.6252V36.1875H35.3377V34.2875Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M37.25 5.7124H33.4375V7.6249H37.25V5.7124Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M33.4371 3.8125H27.7246V5.7125H33.4371V3.8125Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M27.7252 24.7625H10.5752V26.6625H27.7252V24.7625Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M18.1998 30.4749H12.4873V32.3874H18.1998V30.4749Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M18.1998 19.0498H12.4873V20.9498H18.1998V19.0498Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M27.7248 1.8999H12.4873V3.8124H27.7248V1.8999Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M10.5748 34.2874H4.8623V36.1874H10.5748V34.2874Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M10.5748 22.8623H4.8623V24.7623H10.5748V22.8623Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M10.5748 11.4248H4.8623V13.3373H10.5748V11.4248Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M12.4877 3.8125H6.7627V5.7125H12.4877V3.8125Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M8.6748 26.6624H4.8623V30.4749H8.6748V26.6624Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M8.6748 15.2373H4.8623V19.0498H8.6748V15.2373Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M6.76191 5.7124H2.96191V7.6249H6.76191V5.7124Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M4.86191 32.3875H2.96191V34.2875H4.86191V32.3875Z" fill="#39F417" fill-opacity="0.6" />
                <path d="M2.9623 22.8625H4.8623V20.95H2.9623V11.425H4.8623V9.525H2.9623V7.625H1.0498V32.3875H2.9623V22.8625Z" fill="#39F417" fill-opacity="0.6" />
            </svg>
        }
    />;
}

function CMS() {
    return <Card
        isHeadline
        textColor={"#39F417"}
        title={"CMS"}
        titleIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <g clip-path="url(#clip0_113_5679)">
                    <path d="M40.8529 11.4312H38.9404V36.1937H40.8529V11.4312Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M38.94 36.1938H37.04V38.0938H38.94V36.1938Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M37.0396 15.2437H35.1396V34.2812H37.0396V15.2437Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M35.14 36.1938H33.2275V38.0938H4.66504V39.9938H37.04V38.0938H35.14V36.1938Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M31.3271 36.1937H33.2271V11.4312H38.9396V9.51865H33.2271V3.80615H31.3271V36.1937Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M29.4273 34.2812H8.46484V36.1938H29.4273V34.2812Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M29.4271 19.0437H23.7021V24.7562H29.4271V19.0437Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M21.8023 19.0437H16.0898V20.9562H21.8023V19.0437Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M21.8023 22.8562H16.0898V24.7562H21.8023V22.8562Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M29.4275 30.4812H4.66504V32.3812H29.4275V30.4812Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M29.4275 26.6687H4.66504V28.5687H29.4275V26.6687Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M14.19 22.8562H4.66504V24.7562H14.19V22.8562Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M14.19 19.0437H4.66504V20.9562H14.19V19.0437Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M29.4275 17.1438V7.625H4.66504V17.15L29.4275 17.1438ZM6.56504 9.51875H14.19V11.4313H12.2775V13.3313H10.3775V15.25H6.56504V9.51875Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M31.3279 1.90625H2.75293V3.80625H31.3279V1.90625Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M4.66543 36.1938H2.75293V38.0938H4.66543V36.1938Z" fill="#39F417" fill-opacity="0.4" />
                    <path d="M2.75254 3.80615H0.852539V36.1937H2.75254V3.80615Z" fill="#39F417" fill-opacity="0.4" />
                </g>
                <defs>
                    <clipPath id="clip0_113_5679">
                        <rect width="40" height="40" fill="white" transform="translate(0.849609)" />
                    </clipPath>
                </defs>
            </svg>
        }
    />;
}

function MainTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        textColor={"#C7DFB8"}
        title={"Skills"}
    />;
}


