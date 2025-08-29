import { useEffect } from "react";
import { useAsbInfoMutation } from "../../app/service/axios";
import Lottie from "lottie-react";
import loading from "../../assets/images/Loading/Loading.json";
import AsbData from "../../components/ASB/ASB_API";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ASB: React.FC = () => {
  const [asbInfo, { data, error, isLoading }] = useAsbInfoMutation();

  useEffect(() => {
    const fetchData = async () => {
      asbInfo({ id: "" });
    };

    fetchData();
  }, [asbInfo]);
  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Asb data is Loading.....</p>
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

  return (
    <section className="asb-section container-lg-fluid container-md my-5">
      <div className="row g-4">
        {/* Left Content */}
        <div className="col-lg-8">
          <h3 className="section-title">{data?.data[0]?.title}</h3>
          {/* <p>{data?.data[0]?.description}</p> */}
          <div
  dangerouslySetInnerHTML={{ __html: data?.data[0]?.description || "" }}
/>


          <div className="contact-box">
            <h5>Contact Us</h5>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:mba@amrita.edu">mba@amrita.edu</a>
            </p>
            <p>
              <strong>Toll-Free Number:</strong> 044-48133344
            </p>
          </div>

          <div className="info-box">
            <h6>Stay Updated on AmritaCAT!</h6>
            <p>Join our WhatsApp Group for Exclusive Insights.</p>
            <a
              href="https://chat.whatsapp.com/JtkI6i2eRsLEXNNo245gg3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
              style={{ borderRadius: "12px" }}
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-lg-4">
          <div className="card date-card mt-4">
            <div className="card-header">Important Dates</div>
            <div className="card-body">
              <p>
                <strong>August 15th, 2025</strong> is the last date for{" "}
                <span className="highlight">Mysuru campus</span> to fill application.
              </p>
              <hr />
              <p className="closed-text">
                Admissions are now <strong>closed</strong> for the{" "}
                {AsbData["campuses"].join(" , ")} campuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASB;
