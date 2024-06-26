'use client';
import Card from "../Card";
import { GridItem } from "../page";

export default function ContactUsPage() {
    return <>
        <GridItem><DropMessage /></GridItem>
        <GridItem><IconCard iconPath={"/insta.png"} /></GridItem>
        <GridItem><IconCard iconPath={"/maps.png"} /></GridItem>

        <GridItem><IconCard iconPath={"/gmail.png"} /></GridItem>
        <GridItem>
            <IconCard
                iconPath={"/whatsapp.png"}
                onClick={() => window.open("https://wa.me/+917017510443")}
            />
        </GridItem>
        <GridItem>
            <IconCard 
                iconPath={"/linkedin.png"}
                onClick={() => window.open("https://linkedin.com")}
            />
        </GridItem>

        <GridItem><Contact /></GridItem>
        <GridItem></GridItem>
        <GridItem><TermsAndConditions /></GridItem>
    </>;
}


function DropMessage() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#212121"}
        title={"Drop a Message"}
    />;
}

function IconCard({ iconPath , onClick }) {
    return <Card
        clickable
        isHeadline
        backgroundColor={"#212121"}
        onClick={onClick}
        title={<img className="social_icon" src={iconPath}></img>}
    />;
}

function Contact() {
    return <Card
        textColor={"grey"}
        subtitle={<div
            style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                position: "absolute",
                bottom: 30,
            }}
        >
            <div>
                <div>Contact</div>
                <div>+91-7017510443</div>
            </div>
            <div>
                <div>Address</div>
                <div>
                    C1-1201, 12th Floor, JKG Palm Court,
                    Sector 16C, Noida, UP, 201301, India
                </div>
            </div>
        </div>}
    />;
}

function TermsAndConditions() {
    return <Card
        textColor={"grey"}
        subtitle={<div
            style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                position: "absolute",
                bottom: 30
            }}>
            <div style={{ textDecoration: "underline" }}>
                Terms and Conditions
            </div>
            <div style={{ textDecoration: "underline" }}>
                Privacy Policy
            </div>
            <div>
                <div>Made with passion</div>
                <div>by Sivarsa Technologies LLP. All rights reserved.</div>
                <div>© 2024 </div>
            </div>
        </div>}
    />;
}

