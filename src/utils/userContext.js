import { createContext } from "react";

const userContext = createContext({
  name: "Mohan.Dev",
  role: "Front-End Web Developer",
  location: "Tamilnadu, India",
  mail: "mohandhanasekaran71@gmail.com",
  gitHubProfile: "https://github.com/MohanDhanasekaran",
  linkedInProfile: "https://www.linkedin.com/in/mohandhanasekaran/",
});

export default userContext;
