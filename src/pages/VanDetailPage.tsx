import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VanObject } from "../types";
import { getTypeColor } from "../utils";

export const VanDetialPage = () => {
  const params = useParams();

  const [vanDetail, setVanDetail] = useState<VanObject>();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVanDetail(data.vans))
  }, [params.id]);

  return (
    <div>
      <Link to={`/vans`}>
        <button className="btn btn-outline-danger rounded-0 py-0 ms-4 mt-2">
          Back
        </button>
      </Link>

      {
        vanDetail ?
          <div className="row mt-4 px-2 mx-0">
            <div className="col-md-5">
              <img src={vanDetail.imageUrl} className="w-100 mx-auto rounded-5" />
            </div>
            <div className="col-md-7">
              <div className="hstack mx-auto gap-2 mt-3">
                <h1 className="fw-bold">{vanDetail.name}</h1>
                <h6>
                  <span className={`badge rounded-pill text-bg-${getTypeColor(vanDetail.type)}`}>{vanDetail.type}</span>
                </h6>
              </div>
              <h5 className="fw-bold">${vanDetail.price}<span className="fw-normal">/day</span></h5>
              <p style={{ fontSize: '20px' }}>
                {vanDetail.description}
              </p>
            </div>
          </div>
          :
          <div className="d-flex justify-content-center mt-5">
            <h2>Loading...</h2>
          </div>
      }
    </div>
  )
}