import React, { useEffect } from "react";
import { useFeesStructureListMutation } from "../../app/service/axios";
import Lottie from "lottie-react";
import loading from "../../assets/images/Loading/Loading.json";

const FeeStructure: React.FC = () => {
  const [feesDataList, { data, error, isLoading }] = useFeesStructureListMutation();

  // Move useEffect before early returns
  useEffect(() => {
    const fetchData = async () => {
      await feesDataList({ id: "" });
    };
    fetchData();
  }, [feesDataList]);

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

  const feesData = data?.data;
  console.log("this is the fees data ", feesData);

  return (
    <section className="container mt-5 mb-5">
      <h4
        className="text-center mb-4"
        style={{ fontWeight: 600, fontSize: "25px", color: "#a4123f" }}
      >
        Amrita MBA Fee Structure For 2025
      </h4>

      {feesData && feesData.length > 0 ? (
        <>
          {/* Tab Navigation */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {feesData.map((item, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  className={`nav-link ${index === 0 ? 'active' : ''}`}
                  id={`campus-${index}-tab`}
                  data-toggle="tab"
                  data-target={`#campus-${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`campus-${index}`}
                  aria-selected={index === 0}
                >
                  {item.campus_name}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content" id="myTabContent">
            {feesData.map((item, index) => (
              <div
                key={index}
                className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                id={`campus-${index}`}
                role="tabpanel"
                aria-labelledby={`campus-${index}-tab`}
              >
                <table className="table table-bordered mt-3">
                  <tbody>
                    {item.fees && item.fees.length > 0 ? (
                      item.fees.map((feeDetail, feeIndex) => (
                        <tr key={feeIndex}>
                          <td>{feeDetail.fee_title}</td>
                          <td 
                            dangerouslySetInnerHTML={{ 
                              __html: feeDetail.fee_description 
                            }}
                          />
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="text-center">
                          No fee details available for {item.campus_name}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p>No fee structure data available</p>
        </div>
      )}
    </section>
  );
};

export default FeeStructure;