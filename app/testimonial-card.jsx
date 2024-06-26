import { useEffect } from 'react';
import localFont from 'next/font/local';
// Font files can be colocated inside of `app`
const titleFont = localFont({
    src: './fonts/PPMondwest-Regular.otf',
    display: 'swap',
});
const subtitleFont = localFont({
    src: './fonts/PPGoshaSans-Regular.otf',
    display: 'swap',
});

const titleClass = titleFont.className;
const subtitleClass = subtitleFont.className;

export default function TestimonialCard(props) {
    const {
        backgroundColor,
        textColor,
        isHeadline,
        isHeadlineNumberOnly,
        review,
        author,
        avatar,
        bgVideo
    } = props;

    return <div style={{ height: "100%" }} className='fade-in'>
        <div
            style={{
                background: backgroundColor,
                height: "100%",
                position: "relative",
                color: textColor
            }}>
            <div style={{ padding: 20, display: "flex", gap: 10, flexDirection: "column" }}>
                <div
                    className={
                        `review_text
                            ${subtitleClass} 
                            ${isHeadline && 'larger'} 
                            ${isHeadlineNumberOnly && 'xl'}`
                    }
                    style={{ zIndex: 1 }}
                >
                    {review}
                </div>
                <div className={`author_text ${subtitleClass}`}
                    style={{
                        fontStyle: "italic"
                    }}>
                    {author}
                </div>
            </div>
            {
                avatar
                && <div className='avatar'>
                    <img src={avatar} />
                </div>
            }
            {
                bgVideo
                && <video
                    type="type/mp4"
                    src={bgVideo}
                    autoPlay
                    muted
                    loop
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "400px",
                        objectFit: "fill",
                        opacity: 0.3
                    }}
                />
            }
        </div>
    </div>;
}
