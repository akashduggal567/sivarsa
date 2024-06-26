'use client';
import localFont from 'next/font/local';
import Lottie from 'react-lottie';

// Font files can be colocated inside of `app`
const titleFont = localFont({
  src: './fonts/PPNeueBit-Bold.otf',
  display: 'swap',
});

const subtitleFont = localFont({
  src: './fonts/PPGoshaSans-Regular.otf',
  display: 'swap',
});

const titleClass = titleFont.className;
const subtitleClass = subtitleFont.className;

export default function Card(props) {
  const {
    isStats,
    backgroundImage,
    clickable,
    backgroundUrl,
    backgroundColor,
    videoSrc,
    textColor,
    subtitleColor,
    isHeadline,
    isHeadlineNumberOnly,
    title,
    subtitle,
    caption,
    animationData,
    isNavigateable,
    onClick,
    headlineStyle,
    subtitleStyle,
    titleIcon
  } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return <div
    style={{
      height: "100%",
      cursor: `${clickable && "pointer"}`,
    }}
    onClick={onClick}
  >
    <div
      style={{
        background: backgroundColor,
        height: "100%",
        position: "relative",
      }}>
      <div className='card_root'>
        {backgroundImage}
        <div
          className={`
              ${titleClass}
              title
              ${isHeadline && 'larger'} 
              ${isHeadlineNumberOnly && 'xl'}
              ${isStats && "stats-title"}
              `
          }
          style={{
            color: textColor,
            ...headlineStyle,
          }}>
          {title}
        </div>
        <div
          className={`subtitle ${subtitleClass}`}
          style={{ color: subtitleColor ? subtitleColor : textColor, ...subtitleStyle }}
        >
          {subtitle}
        </div>
        <div className="caption" style={{ color: textColor }}>
          {caption}
        </div>
        {
          isNavigateable
          && <div>
            <svg className="nav_arrow" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
              <circle cx="42" cy="42" r="42" fill="#171717" />
              <path d="M58 28C58 27.4477 57.5523 27 57 27L48 27C47.4477 27 47 27.4477 47 28C47 28.5523 47.4477 29 48 29L56 29L56 37C56 37.5523 56.4477 38 57 38C57.5523 38 58 37.5523 58 37L58 28ZM26.7071 59.7071L57.7071 28.7071L56.2929 27.2929L25.2929 58.2929L26.7071 59.7071Z" fill="white" />
            </svg>
          </div>
        }
        {
          animationData
          && <div className="lottie_container">
            <Lottie options={defaultOptions} />
          </div>
        }
        {
          videoSrc
          && <video
            src={videoSrc}
            type="type/mp4"
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "100%",
              objectFit: "fill"
            }}
          />
        }
        {
          titleIcon
          && <div className="title_icon">
            {titleIcon}
          </div>
        }
      </div>
    </div>
  </div>;
}
