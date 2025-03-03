import youtube from "../images/projects/Youtube Clone.png";
import { FaOpencart } from "react-icons/fa";
import WeatherApplication from "../images/projects/WeatherApplication.png"
import QrCode from "../images/projects/QR Code.png"

export const stacks = [ "React", "JavaScript", "HTML", "CSS"];

export const projects = [
  {
    title: "Youtube_clone",
    id: 1,
    image: youtube,
    techStack: ["Youtube API",...stacks],
    brand: FaOpencart,
    overView:
      "Developed a responsive video streaming platform using React, ensuring seamless functionality across devices. Implemented high-quality video playback with interactive user features for enhanced engagement. Integrated the YouTube Data API to fetch real-time video content and personalized recommendations. Optimized performance for a smooth and immersive user experience.",
    webUrl: "https://mohandhanasekaran-youtube-clone.vercel.app/",
    gitHubCode: "https://github.com/MohanDhanasekaran/YouTube_Clone",
  },
  {
    title: "Weather Application",
    id: 2,
    image: WeatherApplication,
    techStack: ["Open API",...stacks,],
    brand: FaOpencart,
    overView:
      "Developed a real-time weather application that retrieves and displays weather data for user-defined locations. Integrated external APIs like OpenWeatherMap to ensure accurate and up-to-date forecasts. Implemented dynamic search functionality with error handling for a seamless user experience. Optimized performance to handle invalid inputs and API failures efficiently.",
    webUrl: "https://weather-application-mohan-dhanasekaran.vercel.app/",
    gitHubCode: "https://github.com/MohanDhanasekaran/Weather-Application",
  },
  {
    title: "QR Code Generated",
    id: 2,
    image: QrCode,
    techStack: ["Open API",...stacks,],
    brand: FaOpencart,
    overView:
      "Developed a QR code generator application that allows users to create and download custom QR codes instantly. Built a responsive and user-friendly interface using React for seamless functionality across devices. Integrated dynamic input handling to generate QR codes based on user-provided data. Optimized performance for fast generation and smooth downloads.",
    webUrl: "https://qr-code-scanner-mohan-dhanasekaran.vercel.app//",
    gitHubCode: "https://github.com/MohanDhanasekaran/QR-Code-Scanner",
  },
];
