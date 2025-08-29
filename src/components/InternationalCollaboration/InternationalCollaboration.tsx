import React, { useEffect } from "react";
import { useInternationalMutation } from "../../app/service/axios";
import Lottie from "lottie-react";
import loading from "../../assets/images/Loading/Loading.json";

const InternationalCollaboration: React.FC = () => {
  const [international, { data, error, isLoading }] = useInternationalMutation();
  useEffect(() => {
    const fetchData = async () => {
      await international({ id: "" })
    };
    fetchData();
  }, [international]);
  if(isLoading){
    return(
           <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Dual data is Loading.....</p>
        <Lottie animationData={loading} loop={true} />
      </div>
    )
  }
  if(error){
    return(
           <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Something went wrong</p>
      </div>
    )
  }
  const internationalData = data?.data[0]
  return (
    <>
    <section className="container mt-5 mb-5">
      <h4
        className="text-center mb-4"
        style={{ fontWeight: 600, fontSize: "25px", color: "#a4123f" }}
      >
        {internationalData?.inter_title}
      </h4>
   <div
  dangerouslySetInnerHTML={{ __html: internationalData?.inter_description ?? "" }}
/>

    </section>
    <section className="container py-4">
      <div className="row text-center g-4">
        <div className="col-6 col-md-4 col-lg-2">
          <img
            src="https://static.npfs.co/accounts/282/documents/2024/8/28/aPyYa3BA-University-of-Groningen.png?1725343069"
            alt="University of Groningen"
            className="img-fluid shadow-sm rounded-3 p-3"
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img
            src="https://static.npfs.co/accounts/282/documents/2024/8/28/nTmBKQwe-university-at-buffalo.png?1725343069"
            alt="University at Buffalo"
            className="img-fluid shadow-sm rounded-3 p-3"
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img
            src="https://static.npfs.co/accounts/282/documents/2024/8/28/fO71VpX7-institut-mines-telecom-business.png?1725343069"
            alt="Institut Mines Telecom Business"
            className="img-fluid shadow-sm rounded-3 p-3"
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img
            src="https://static.npfs.co/accounts/282/documents/2024/8/28/EuuHE7DX-Erasmus-mundus-university-logos.jpg?1725343069"
            alt="Erasmus Mundus"
            className="img-fluid shadow-sm rounded-3 p-3"
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img
            src="https://static.npfs.co/accounts/282/documents/2024/8/28/vrjDQTz0-state-university-new-york-logo.png?1725343069"
            alt="State University of New York"
            className="img-fluid shadow-sm rounded-3 p-3"
          />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img
            src="https://static.npfs.co/accounts/282/documents/2024/8/28/a36oCQnv-deakin-university (1).png?1725343069"
            alt="Deakin University"
            className="img-fluid shadow-sm rounded-3 p-3"
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default InternationalCollaboration;
