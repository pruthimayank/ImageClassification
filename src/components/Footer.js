export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#004d77",
        height: "200px",
        borderRadius: "20px 20px 0 0",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: "serif",
            margin: "0",
          }}
        >
          Get In Touch
        </h1>
        <a
          style={{ margin: "0", textDecoration: "none", color: "grey" }}
          href="https://mayankpruthi.netlify.app/"
          target="_blank"
        >
          mayankpruthi.netlify.app
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/pruthimayank/" target="_blank">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/linkedin.png"
            alt="linkedin"
          />
        </a>

        <a
          href="https://github.com/pruthimayank"
          target="_blank"
          style={{ margin: "0 3rem" }}
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/github.png"
            alt="github"
          />
        </a>

        <a href="https://mayankpruthi.netlify.app/" target="_blank">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/internet--v1.png"
            alt="internet--v1"
          />
        </a>
      </div>
    </div>
  );
}
