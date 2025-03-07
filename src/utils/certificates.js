// import react from "../images/certificates/react-certificate.png";
import frontEnd from "../images/certificates/Frontend Certificate.png";
// import javascript from "../images/certificates/Namaste-javascript.webp";
// import reactBasics from "../images/certificates/react-basics.png";

function certificateObj(id, title, url, description, image) {
  return {
    id,
    title,
    url,
    description,
    image,
  };
}

const CERTIFICATES = [
  certificateObj(
    1,
    "Frontend Developer (React)",
    "https://drive.google.com/file/d/1vEyb8IAxOfUk70hXHn_ptHJ82GKH7Kxf/view?usp=drivesdk",
    "Successfully completed the Front-End Developer course at Login 360, Velachery, Chennai, and passed the Front-End Developer test. Gained hands-on experience in building responsive websites, UI/UX design principles, and modern web technologies.",
    frontEnd
  ),
];
export default CERTIFICATES;
// {
//     id:1,
//     title:"NAMASTE REACT",
//     url:"https://courses.namastedev.com/learn/certificate/8482819-142240",
//     description:'Namaste Dev is an online platform to learn FrontEnd Development related course. So I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course with valid cerification authorized by AkshaySaini(founder of Namaste Dev).',
//     image:certificate

// }
// {
//     id:2,
//     title:"Frontend Developer (React)",
//     url:"https://www.hackerrank.com/certificates/9f42c0c57901",
//     description:'HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!.I Passed the HackerRank Role Certification Exam for Front-End Developer Role',
//     certificate
// }
