import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VanObject } from "../types";

export const VansPage = () => {
  // const [selectedFilter, setSelectedFilter] = useState({title: 'All', color:'warning'});
  // const vanFilterList = [
  //   {title: 'All', color:'warning'},
  //   {title: 'Simple', color:'success'},
  //   {title: 'Luxury', color:'danger'},
  //   {title: 'Rugged', color:'info'},
  // ];

  const [vanList, setVanList] = useState<VanObject[]>([]);
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVanList(data.vans))
  }, []);

  const vanElementList = () => {
    return (
      vanList.map(item => {
        let color = '';
        switch (item.type) {
          case 'simple': color = 'success'; break;
          case 'luxury': color = 'danger'; break;
          case 'rugged': color = 'info'; break;
        }

        return (
          <Link key={item.id} to={`/vans/${item.id}`} className="text-decoration-none text-dark">
            <div className='col position-relative' key={item.id}>
              <h6 className="position-absolute end-0 mt-3 me-4">
                <span className={`badge rounded-pill text-bg-${color}`}>{item.type}</span>
              </h6>
              <img src={item.imageUrl} className="w-100 rounded-5" />
              <div>
                <div className="d-flex justify-content-between px-3 mt-2">
                  <h5 className="fw-bold">{item.name}</h5>
                  <h6 className="fw-bold">${item.price}<span className="fw-normal" style={{ fontSize: '14px' }}>/day</span></h6>
                </div>
              </div>
            </div>
          </Link>
        )
      })
    );
  }

  return (
    <div className="bg-light">
      <h3 className="fw-bold text-center">Explore our van options</h3>

      {/* <div className="d-flex gap-3">
        {
          vanFilterList.map(item => {
            return (
              <div key={item.title}>
                <input
                  type="radio"
                  className="btn-check"
                  name="vanFilter"
                  id={item.title}
                  autoComplete="off"
                  onChange={() => setSelectedFilter(item)}
                  checked={selectedFilter.title === item.title}
                />
                <label
                  className={`btn btn-outline-${item.color} border-3 rounded-0`}
                  htmlFor={item.title}
                  style={{ width: '6rem' }}
                >
                  {item.title}
                </label>
              </div>
            );
          })
        }
      </div> */}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 px-4 m-0 pb-5">
        {vanElementList()}
      </div>

    </div>
  );
}