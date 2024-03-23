import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VanObject } from "../types";
import { capitalizedWord, getTypeColor } from "../utils";

export const VansPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const vanFilterList = ['all', 'simple', 'luxury', 'rugged'];

  const [vanList, setVanList] = useState<VanObject[]>([]);
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVanList(data.vans))
  }, []);

  const vanCard = (item: VanObject) => {
    return (
      <Link key={item.id} to={`/vans/${item.id}`} className="text-decoration-none text-dark">
        <div className='col position-relative' key={item.id}>
          <h6 className="position-absolute end-0 mt-3 me-4">
            <span className={`badge rounded-pill text-bg-${getTypeColor(item.type)}`}>{item.type}</span>
          </h6>
          <img src={item.imageUrl} className="w-100 rounded-5" />
          <div>
            <div className="d-flex justify-content-between px-3 mt-2">
              <h5 className="fw-bold">{item.name}</h5>
              <h6 className="fw-bold">${item.price}<span className="fw-normal" style={{ fontSize: '14px' }}>/day</span></h6>
            </div>
          </div>
        </div>
      </Link>)
  }

  const vanElementList = () => {
    if (selectedFilter === 'all') {
      return vanList.map(item => {
        return vanCard(item);
      });
    }
    return vanList.filter(item => { 
      return item.type === selectedFilter;
    }).map(item => { 
      return vanCard(item);
    });
  }

  return (
    <div className="bg-light">
      <h3 className="fw-bold text-center">Explore our van options</h3>

      <div className="d-flex gap-3 justify-content-center mt-5">
        {
          vanFilterList.map(item => {
            return (
              <div key={item}>
                <input
                  type="radio"
                  className="btn-check"
                  name="vanFilter"
                  id={item}
                  autoComplete="off"
                  onChange={() => setSelectedFilter(item)}
                  checked={selectedFilter === item}
                />
                <label
                  className={`btn btn-outline-dark border-2 py-1 rounded-0`}
                  htmlFor={item}
                  style={{ width: '5rem' }}
                >
                  {capitalizedWord(item)}
                </label>
              </div>
            );
          })
        }
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 px-4 m-0 pb-5">
        {vanElementList()}
      </div>

    </div>
  );
}