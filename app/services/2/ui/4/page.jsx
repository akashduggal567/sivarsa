'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";
import { UICommonTitle } from "../page";

export default function WebWonderLanguages() {
    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="none">
                    <path d="M0 8.2873L23.2595 0L47.1455 8.13995L43.2779 38.9134L23.2595 50L3.55434 39.0608L0 8.2873Z" fill="#E23237" />
                    <path d="M47.1457 8.13995L23.2598 0V50L43.2781 38.9319L47.1457 8.13995Z" fill="#B52E31" />
                    <path d="M23.2961 5.83789L8.80273 38.0846L14.217 37.9926L17.1268 30.7181H30.1286L33.3146 38.0846L38.4894 38.1767L23.2961 5.83789ZM23.3331 16.1694L28.2317 26.4087H19.0235L23.3331 16.1694Z" fill="white" />
                </svg>
                <div>Sketch</div>
            </div>
        </GridItem>
        <GridItem />

        <GridItem></GridItem>
        <GridItem>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="none">
                    <path d="M0 8.2873L23.2595 0L47.1455 8.13995L43.2779 38.9134L23.2595 50L3.55434 39.0608L0 8.2873Z" fill="#E23237" />
                    <path d="M47.1457 8.13995L23.2598 0V50L43.2781 38.9319L47.1457 8.13995Z" fill="#B52E31" />
                    <path d="M23.2961 5.83789L8.80273 38.0846L14.217 37.9926L17.1268 30.7181H30.1286L33.3146 38.0846L38.4894 38.1767L23.2961 5.83789ZM23.3331 16.1694L28.2317 26.4087H19.0235L23.3331 16.1694Z" fill="white" />
                </svg>
                <div>Creative Cloud</div>
            </div>
        </GridItem>
        <GridItem />

        <GridItem />
        <GridItem><UICommonTitle /></GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="none">
                    <path d="M0 8.2873L23.2595 0L47.1455 8.13995L43.2779 38.9134L23.2595 50L3.55434 39.0608L0 8.2873Z" fill="#E23237" />
                    <path d="M47.1457 8.13995L23.2598 0V50L43.2781 38.9319L47.1457 8.13995Z" fill="#B52E31" />
                    <path d="M23.2961 5.83789L8.80273 38.0846L14.217 37.9926L17.1268 30.7181H30.1286L33.3146 38.0846L38.4894 38.1767L23.2961 5.83789ZM23.3331 16.1694L28.2317 26.4087H19.0235L23.3331 16.1694Z" fill="white" />
                </svg>
                <div>Figma</div>
            </div>
        </GridItem>
    </>;
}

function MainTitle() {
    return <Card
        isHeadline
        textColor={"#CFB8E5"}
        title={"Design Tools"}
    />;
}
