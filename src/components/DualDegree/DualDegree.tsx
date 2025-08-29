import React, { useEffect, useState } from "react";
import dualDegreeImg from "../../assets/images/dual_degree.jpg";
import { useDualDegreeMutation } from "../../app/service/axios";
import Lottie from "lottie-react";
import loading from "../../assets/images/Loading/Loading.json";

const DualDegree: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [dualDegree, { data, error, isLoading }] = useDualDegreeMutation();

  useEffect(() => {
    const fetchData = async () => {
      await dualDegree({ id: "" }); // replace with actual ID if needed
    };
    fetchData();
  }, [dualDegree]);

  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Dual data is Loading.....</p>
        <Lottie animationData={loading} loop={true} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Something went wrong</p>
      </div>
    );
  }

  const degreeData = data?.data[0];


  return (
    <section className="container py-5 position-relative">
      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 position-relative">
          <img
            src={dualDegreeImg}
            alt={degreeData?.degree_title || "Dual Degree"}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right: Content */}
        <div className="col-lg-6 col-md-12 position-relative">
          <div
            className="p-4 text-white shadow content-box"
            style={{
              borderRadius: "16px",
              background: "linear-gradient(135deg, #a4123f, #d91b4d)",
              boxShadow: hover
                ? "0 12px 25px rgba(0,0,0,0.35)"
                : "0 8px 20px rgba(0,0,0,0.25)",
              transform: hover ? "translateY(-5px)" : "translateY(0)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <h1
              className="h3 fw-bold mb-3"
              style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}
            >
              {degreeData?.degree_title || "Dual Dfffegree"}
            </h1>
            <div
              className="mb-0"
              style={{
                lineHeight: 1.6,
                color: "#f1f1f1",
                fontFamily: "'Segoe UI', sans-serif",
                fontSize: "0.95rem",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  degreeData?.degree_description ||
                  "<p>No description available.</p>",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualDegree;
