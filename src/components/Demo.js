import React, { useState, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function Demo() {
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await mobilenet.load();
      console.log("Model loaded:", loadedModel);
      setModel(loadedModel);
      setLoading(false); // Set loading to false once model is loaded
    }
    loadModel();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    processImage(file);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processImage(file);
  };

  const processImage = async (file) => {
    const imageUrl = URL.createObjectURL(file);
    console.log("Image uploaded:", imageUrl);
    const img = document.createElement("img");
    img.src = imageUrl;
    img.onload = async () => {
      setImage(img);
      if (model) {
        console.log("Generating predictions...");
        const predictions = await model.classify(img);
        console.log("Predictions:", predictions);
        setPredictions(predictions);
      }
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          padding: "10px 20px",
        }}
      >
        <i>
          <small>
            Note: Try searching for a cat or dog or bird or anything else! (even
            a dinosaur image will work)
          </small>
        </i>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {loading ? (
          <div>Loading model...</div>
        ) : (
          <div className="row" style={{ margin: "0" }}>
            <div className="col">
              <br />
              <br />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor: "#004d77",
                  color: "white",
                  width: "300px",
                }}
              >
                Upload Image
              </label>
              <br />
              OR
              <br />
              <div
                className="dropzone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                  border: "1px dashed black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  padding: "20px",
                  maxWidth: "300px",
                  height: "200px",
                  margin: "auto",
                  backgroundColor: "#004d77",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "18px" }}>
                  Drag & Drop Image Here
                </span>
              </div>
            </div>
            {image && (
              <div className="col" style={{ marginTop: "50px" }}>
                <img
                  src={image.src}
                  alt="Uploaded"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "250px",
                  }}
                />
              </div>
            )}
          </div>
        )}
        {predictions.length > 0 && (
          <div className="row" style={{ margin: "0" }}>
            <div className="col" style={{ marginTop: "20px" }}>
              <br />
              <h2>Predictions</h2>
              <br />
              <table
                style={{
                  border: "1px solid white",
                  borderRadius: "20px",
                  borderCollapse: "collapse",
                  width: "90%",
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <tbody>
                  {predictions.map((prediction, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                          borderRight: "1px solid #ddd",
                        }}
                      >
                        {prediction.className}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {(prediction.probability * 100).toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
