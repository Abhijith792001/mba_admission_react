import React from "react";

function Campuses() {
  return (
    <section className="container mt-5">
      <h4
        className="text-center mb-4"
        style={{ fontWeight: 600, fontSize: "25px", color: "#a4123f" }}
      >
        Campuses
      </h4>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 col-12 mb-4">
          <div className="text-center">
            <img
              src="https://static.npfs.co/accounts/282/documents/2024/8/30/kochi-campus.jpg?1738910803"
              alt="Kochi"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3" style={{ fontWeight: 600, color: "#a4123f" }}>
              Kochi
            </h5>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 col-12 mb-4">
          <div className="text-center">
            <img
              src="https://static.npfs.co/accounts/282/documents/2024/8/30/coimbatore-campus.jpg?1738910803"
              alt="Coimbatore"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3" style={{ fontWeight: 600, color: "#a4123f" }}>
              Coimbatore
            </h5>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 col-12 mb-4">
          <div className="text-center">
            <img
              src="https://static.npfs.co/accounts/282/documents/2024/8/30/bengaluru-campus.jpg?1738910803"
              alt="Bengaluru"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3" style={{ fontWeight: 600, color: "#a4123f" }}>
              Bengaluru
            </h5>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 col-12 mb-4">
          <div className="text-center">
            <img
              src="https://static.npfs.co/accounts/282/documents/2024/8/30/amritapuri-campus.jpg?1738910803"
              alt="Amritapuri"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3" style={{ fontWeight: 600, color: "#a4123f" }}>
              Amritapuri
            </h5>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 col-12 mb-4">
          <div className="text-center">
            <img
              src="https://static.npfs.co/accounts/282/documents/2024/8/30/amaravathy-campus.jpg?1738910803"
              alt="Amaravati"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3" style={{ fontWeight: 600, color: "#a4123f" }}>
              Amaravati
            </h5>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 col-12 mb-4">
          <div className="text-center">
            <img
              src="https://static.npfs.co/accounts/282/documents/2025/2/7/453029701_3219355984868343_3818005786177641098_n%20(1).png?1738910803"
              alt="Amritapuri"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3" style={{ fontWeight: 600, color: "#a4123f" }}>
              Amritapuri
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campuses;
