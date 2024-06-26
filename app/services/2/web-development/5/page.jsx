'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function WebWonderLanguages() {
    const router = useRouter();

    return <>
        <GridItem><MainTitle /></GridItem>
        <GridItem />
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45 50" fill="none">
                    <path d="M4.0107 45.017L0 0H44.0933L40.0826 44.9927L22.0102 50" fill="#E44D26" />
                    <path d="M22.0469 46.1722V3.69531H40.0707L36.6312 42.1008" fill="#F16529" />
                    <path d="M8.19141 9.2002H22.0465V14.7179H14.2439L14.7544 20.3694H22.0465V25.875H9.69845L8.19141 9.2002ZM9.94153 28.646H15.4836L15.8725 33.0578L22.0465 34.7106V40.4715L10.7194 37.3115" fill="#EBEBEB" />
                    <path d="M35.8533 9.2002H22.0225V14.7179H35.3428L35.8533 9.2002ZM34.8445 20.3694H22.0225V25.8871H28.8285L28.1843 33.0578L22.0225 34.7107V40.4472L33.3253 37.3115" fill="white" />
                </svg>
                <div>HTML 5</div>
            </div>
        </GridItem>

        <GridItem />
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M50 0H0V50H50V0Z" fill="#F7DF1E" />
                    <path d="M33.5873 39.0625C34.5944 40.7069 35.9047 41.9156 38.2222 41.9156C40.169 41.9156 41.4127 40.9426 41.4127 39.5982C41.4127 37.9871 40.1349 37.4164 37.992 36.4791L36.8174 35.9752C33.4269 34.5307 31.1746 32.7212 31.1746 28.8958C31.1746 25.372 33.8595 22.6895 38.0555 22.6895C41.0428 22.6895 43.1904 23.7291 44.7381 26.4514L41.0793 28.8006C40.2738 27.3561 39.4047 26.7871 38.0555 26.7871C36.6793 26.7871 35.8071 27.6601 35.8071 28.8006C35.8071 30.2101 36.6801 30.7807 38.696 31.6537L39.8706 32.1569C43.8627 33.8688 46.1166 35.6141 46.1166 39.5379C46.1166 43.768 42.7936 46.0855 38.3309 46.0855C33.9674 46.0855 31.1484 44.0061 29.769 41.2807L33.5873 39.0625ZM16.9896 39.4696C17.7277 40.7791 18.3992 41.8863 20.0135 41.8863C21.5571 41.8863 22.5309 41.2823 22.5309 38.9339V22.9577H27.2293V38.9974C27.2293 43.8625 24.3769 46.0768 20.2135 46.0768C16.4515 46.0768 14.273 44.1299 13.165 41.7851L16.9896 39.4696Z" fill="black" />
                </svg>
                <div>Web Wonder</div>
            </div>
        </GridItem>
        <GridItem />


        <GridItem><CommonTitle /></GridItem>
        <GridItem />
        <GridItem>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45 50" fill="none">
                    <path d="M44.0875 0L40.071 44.9948L22.0167 50L4.01223 45.0018L0 0H44.0875Z" fill="#264DE4" />
                    <path d="M36.6326 42.1298L40.065 3.67969H22.0439V46.1743L36.6326 42.1298Z" fill="#2965F1" />
                    <path d="M9.19824 20.3701L9.69292 25.8893H22.044V20.3701H9.19824Z" fill="#EBEBEB" />
                    <path d="M22.0439 9.19873H22.0248H8.2041L8.70583 14.7181H22.0439V9.19873Z" fill="#EBEBEB" />
                    <path d="M22.044 40.4465V34.7042L22.0198 34.7106L15.8729 33.0508L15.48 28.6489H12.4931H9.93945L10.7127 37.315L22.0186 40.4536L22.044 40.4465Z" fill="#EBEBEB" />
                    <path d="M28.8208 25.8891L28.1802 33.0472L22.0244 34.7087V40.4509L33.3393 37.3149L33.4223 36.3825L34.7192 21.852L34.8539 20.3699L35.8503 9.19873H22.0244V14.7181H29.8017L29.2994 20.3699H22.0244V25.8891H28.8208Z" fill="white" />
                </svg>
                <div>JavaScript</div>
            </div>
        </GridItem>
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
        title={"Languages"}
    />;
}
