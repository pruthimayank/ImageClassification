export default function Model() {
  return (
    <>
      <div style={{ padding: "1.4rem", textAlign: "justify" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          About MobileNet
        </h2>
        <p>
          MobileNet is a family of lightweight convolutional neural networks
          (CNNs) designed for efficient on-device image classification, object
          detection, and other vision tasks. It was developed by Google as part
          of the TensorFlow framework and is optimized for deployment on mobile
          and embedded devices with limited computational resources. MobileNet
          architectures leverage depthwise separable convolutions, which
          factorize standard convolutions into depthwise and pointwise
          convolutions. This reduces the computational complexity and model size
          while maintaining good accuracy, making MobileNet well-suited for edge
          devices and web applications.
        </p>
      </div>

      <div
        style={{
          margin: "1rem",
          padding: "1.5rem",
          backgroundColor: "#004d77",
          borderRadius: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <img src=".//img/modelArc.png" width="350px" />
        <div>
          <h3 style={{ textAlign: "center", margin: "20px 0" }}>
            MobileNet Architecture
          </h3>
          <p
            style={{
              maxWidth: "800px",
              textAlign: "justify",
              margin: "1rem 0",
            }}
          >
            The architecture of MobileNet is designed to strike a balance
            between model size and performance. It consists of a series of
            convolutional layers followed by global average pooling and a
            softmax output layer. The key innovation in MobileNet is the use of
            depthwise separable convolutions, which decompose standard
            convolutions into depthwise and pointwise convolutions. This reduces
            the number of parameters and computations, resulting in a compact
            and efficient model.
          </p>
          <img src=".//img/modelArch.png" width="300px" />
        </div>
      </div>

      <div
        style={{
          padding: "1.5rem",
          textAlign: "justify",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Performance and Accuracy
          </h2>
          <p>
            MobileNet has been extensively evaluated on standard benchmark
            datasets and has demonstrated competitive performance compared to
            larger and more computationally intensive models. It achieves high
            accuracy on image prediction tasks while maintaining low memory and
            computational overhead. In web ML applications, performance and
            accuracy are critical considerations, especially when deploying
            models on resource-constrained devices such as smartphones and
            tablets. MobileNet's lightweight architecture and efficient
            implementation make it well-suited for such applications. In this
            section, we'll explore the performance and accuracy characteristics
            of MobileNet, including metrics used for evaluation and comparisons
            with other image prediction models.
          </p>
        </div>
        <img src=".//img/modelCurve.png" width="400px" />
      </div>
    </>
  );
}
