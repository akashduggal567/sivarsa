'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function WebWonderFrameworks() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                    <path d="M25.6532 29.4085C28.0878 29.4085 30.0613 27.4349 30.0613 25.0004C30.0613 22.5659 28.0878 20.5923 25.6532 20.5923C23.2187 20.5923 21.2451 22.5659 21.2451 25.0004C21.2451 27.4349 23.2187 29.4085 25.6532 29.4085Z" fill="#61DAFB" />
                    <path d="M25.6533 34.0313C38.7167 34.0313 49.3066 29.9878 49.3066 25C49.3066 20.0122 38.7167 15.9688 25.6533 15.9688C12.5899 15.9688 2 20.0122 2 25C2 29.9878 12.5899 34.0313 25.6533 34.0313Z" stroke="#61DAFB" stroke-width="2.5" />
                    <path d="M17.8315 29.5156C24.3632 40.8288 33.1599 47.9783 37.4795 45.4844C41.7991 42.9904 40.0058 31.7976 33.4741 20.4844C26.9424 9.17116 18.1457 2.02172 13.8262 4.51563C9.50657 7.00955 11.2998 18.2024 17.8315 29.5156Z" stroke="#61DAFB" stroke-width="2.5" />
                    <path d="M17.8325 20.4844C11.3008 31.7976 9.50756 42.9904 13.8271 45.4844C18.1467 47.9783 26.9434 40.8288 33.4751 29.5156C40.0068 18.2024 41.8 7.00953 37.4805 4.51562C33.1609 2.0217 24.3642 9.17115 17.8325 20.4844Z" stroke="#61DAFB" stroke-width="2.5" />
                </svg>
                <div>React</div>
            </div>
        </GridItem>
        <GridItem>
        </GridItem>

        <GridItem />
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="none">
                    <path d="M0 8.2873L23.2595 0L47.1455 8.13995L43.2779 38.9134L23.2595 50L3.55434 39.0608L0 8.2873Z" fill="#E23237" />
                    <path d="M47.1457 8.13995L23.2598 0V50L43.2781 38.9319L47.1457 8.13995Z" fill="#B52E31" />
                    <path d="M23.2961 5.83789L8.80273 38.0846L14.217 37.9926L17.1268 30.7181H30.1286L33.3146 38.0846L38.4894 38.1767L23.2961 5.83789ZM23.3331 16.1694L28.2317 26.4087H19.0235L23.3331 16.1694Z" fill="white" />
                </svg>
                <div>Angular</div>
            </div>
        </GridItem>
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="50" viewBox="0 0 58 50" fill="none">
                    <path d="M46.3768 0H57.971L28.9855 50L0 0H22.1739L28.9855 11.5942L35.6522 0H46.3768Z" fill="#41B883" />
                    <path d="M0 0L28.9855 50L57.971 0H46.3768L28.9855 30L11.4493 0H0Z" fill="#41B883" />
                    <path d="M11.4492 0L28.9855 30.1449L46.3768 0H35.6521L28.9855 11.5942L22.1739 0H11.4492Z" fill="#35495E" />
                </svg>
                <div>Vue.js</div>
            </div>
        </GridItem>


        <GridItem><CommonTitle /></GridItem>
        <GridItem />
        <GridItem />
    </>;
}

function CommonTitle() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={" Web Wonder"}
    />;
}



function MainTitle() {
    return <Card
        isHeadline
        textColor={"#C7DFB8"}
        title={"Frameworks"}
    />;
}


