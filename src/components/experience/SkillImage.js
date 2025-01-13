import java from "../../assets/svgs/java.svg";
import python from "../../assets/svgs/python.svg";
import c from "../../assets/svgs/c-programming.svg";
import html from "../../assets/svgs/html.svg";
import css from "../../assets/svgs/css.svg";
import javascript from "../../assets/svgs/javascript.svg";
import react from "../../assets/svgs/react.svg";
import sql from "../../assets/svgs/sql.svg"; // Assuming you have a corresponding image for SQL
import git from "../../assets/svgs/git.svg";
import github from "../../assets/svgs/github.svg"; // Assuming you have a GitHub image
import linux from "../../assets/svgs/linux.svg";
import kali_linux from "../../assets/svgs/kali-linux.svg"; // Assuming you have a Linux image
import azure from "../../assets/svgs/azure.svg";
import app_dev from "../../assets/svgs/android.svg";
import web_dev from "../../assets/svgs/web-development.svg";
import cybersecurity from "../../assets/svgs/cybersecurity.svg"; // Assuming you have a Microsoft Azure image

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "java":
      return java;
    case "python":
      return python;
    case "c":
      return c;
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "sql":
      return sql;
    case "git":
      return git;
    case "github":
      return github;
    case "linux":
      return linux;
    case "kali linux":
      return kali_linux;
    case "microsoft azure":
      return azure;
    case "android app development":
      return app_dev;
    case "web development":
      return web_dev;
    case "cybersecurity":
      return cybersecurity;
    default:
      break;
  }
};
