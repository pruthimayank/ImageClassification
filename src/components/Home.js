import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap-reverse",
          padding: "0.7rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "20px 10px",
            textAlign: "justify",
          }}
        >
          <h3>Introduction to Image Classification</h3>
          <p>
            Image classification is a computer vision task that involves
            categorizing images into predefined classes or categories based on
            their visual content. It's one of the fundamental tasks in the field
            of computer vision and has widespread applications across various
            industries, including healthcare, automotive, retail, and security.
            The goal of image classification is to develop algorithms or models
            that can automatically assign labels or tags to images based on
            their visual features. These algorithms learn patterns and
            relationships from labeled training data and use them to predict the
            class of unseen images. In the context of web ML development, image
            classification enables developers to build applications that can
            automatically analyze and interpret visual data directly in the
            browser. With the advancements in machine learning frameworks like
            TensorFlow.js, developers can now leverage pre-trained models to
            perform image classification tasks without the need for server-side
            infrastructure.
          </p>
        </div>
        <img
          style={{ maxWidth: "400px", height: "auto", margin: "0.5rem 1rem" }}
          src=".//img/hero.png"
          alt="Hero"
        />
      </div>

      <div
        style={{
          margin: "0 1.2rem",
          borderRadius: "20px",
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          backgroundColor: "#004d77",
        }}
      >
        <img
          style={{ maxWidth: "200px", maxHeight: "180px" }}
          src="..//img/tf.png"
          alt="tf"
        />
        <div>
          <p
            style={{
              textAlign: "justify",
              maxWidth: "1000px",
              margin: "1rem 0",
            }}
          >
            TensorFlow.js is a JavaScript library developed by Google that
            allows developers to train and deploy machine learning models
            directly in the browser. One of the key models available in
            TensorFlow.js is MobileNet, a lightweight convolutional neural
            network (CNN) designed for image prediction tasks. MobileNet is
            specifically optimized for mobile and web applications, making it an
            ideal choice for web ML development. Its architecture incorporates
            depthwise separable convolutions, which enable high computational
            efficiency while maintaining good accuracy.
          </p>
          <Link
            to="/model"
            style={{
              textDecoration: "none",
              backgroundColor: "white",
              padding: "8px",
              color: "#004d77",
              borderRadius: "10px",
            }}
          >
            About the model
          </Link>
        </div>
      </div>

      <div style={{ padding: "1rem 2rem", textAlign: "justify" }}>
        <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Demo</h2>
        <p>
          In this interactive web application using TensorFlow.js and MobileNet
          for image classification. Users could upload or capture images, and
          MobileNet provided real-time predictions. Designed with a
          user-friendly interface, visualized results with thumbnails and
          labels, and optimized performance for a seamless experience. The
          project showcase the practical application of web ML, enabling
          developers to build powerful image classification experiences directly
          in the browser.
        </p>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            to="/demo"
            style={{
              textDecoration: "none",
              backgroundColor: "#004d77",
              padding: "0.7rem 7rem",
              color: "white",
              borderRadius: "10px",
              margin: "0.7rem",
            }}
          >
            Live Demo
          </Link>
          <a
            href="https://github.com/pruthimayank/ImageClassification/tree/main"
            style={{
              textDecoration: "none",
              backgroundColor: "#004d77",
              padding: "0.7rem 7rem",
              color: "white",
              borderRadius: "10px",
              margin: "0.7rem",
            }}
            target="_blank"
          >
            View Code
          </a>
        </div>
      </div>

      <br />

      <div
        style={{
          backgroundColor: "#004d77",
          padding: "2rem",
          margin: "0.2rem 1rem",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Tech Stack
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="..//img/reactjs.png"
            height="200px"
            style={{ maxWidth: "300px", margin: "0.5rem" }}
          />
          <img
            src="..//img/css.jpg"
            height="200px"
            style={{ maxWidth: "300px", margin: "0.5rem" }}
          />
          <img
            src="..//img/tfjs.png"
            height="200px"
            style={{ width: "300px", margin: "0.5rem" }}
          />
        </div>
      </div>

      <br />
      <p style={{ margin: "1rem 2rem", textAlign: "justify" }}>
        <b>Note:</b> Deploying TensorFlow.js models for inference in web
        applications is straightforward and requires minimal setup. Developers
        can load pre-trained models directly from the browser and perform
        inference on user-provided data in real-time. TensorFlow.js provides
        utilities for loading models asynchronously and executing inference
        operations efficiently using WebGL for hardware acceleration. This
        enables developers to build interactive web ML applications that run
        smoothly on a wide range of devices.
      </p>
      <br />
    </>
  );
}
