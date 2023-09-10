function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("space");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("space")) {
    img.setAttribute("src", "./assets/avatar-space.png");
    img.setAttribute("alt", "profile");
  }
  else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "profile");
  }

  const pdf = document.querySelector("#pdf img");
  if (html.classList.contains("space")) {
    pdf.setAttribute("src", "./assets/pdf-icon-space.svg");
    pdf.setAttribute("alt", "PDF Icon");
  }
  else {
    pdf.setAttribute("src", "./assets/pdf-icon.svg");
    pdf.setAttribute("alt", "PDF Icon");
  }

  const html5css3 = document.querySelector("#html5css3 img");
  if (html.classList.contains("space")) {
    html5css3.setAttribute("src", "./assets/html5&css3-icon-space.svg");
    html5css3.setAttribute("alt", "HTML5 & CSS3 Icon");
  }
  else {
    html5css3.setAttribute("src", "./assets/html5&css3-icon.svg");
    html5css3.setAttribute("alt", "HTML5 & CSS3 Icon");
  }

  const react = document.querySelector("#react img");
  if (html.classList.contains("space")) {
    react.setAttribute("src", "./assets/react-icon-space.svg");
    react.setAttribute("alt", "React Icon");
  }
  else {
    react.setAttribute("src", "./assets/react-icon.svg");
    react.setAttribute("alt", "React Icon");
  }

  const notion = document.querySelector("#notion img");
  if (html.classList.contains("space")) {
    notion.setAttribute("src", "./assets/notion-icon-space.svg");
    notion.setAttribute("alt", "Notion Icon");
  }
  else {
    notion.setAttribute("src", "./assets/notion-icon.svg");
    notion.setAttribute("alt", "Notion Icon");
  }

}