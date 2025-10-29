import React from 'react'
import oil from '../../img/oil/main-removebg-preview.png';

export default function Oil() {
  const oils = [
    "Spearmint oil",
    "Jojoba oil",
    "Lemon balm oil",
    "Marjoram oil",
    "Rose oil",
    "Basil oil",
    "Hibiscus oil",
    "Black cumin seed oil",
    "Argan oil",
    "Coriander oil",
    "Jasmine oil",
    "Calendula oil",
    "Rosemary oil",
    "Sweet almond oil",
    "Orange oil",
    "Senna oil",
    "Fenugreek oil",
    "Coconut oil",
    "Castor oil",
    "Parsley oil",
    "Cumin oil",
    "Olive oil",
    "Garlic oil",
    "Sesame oil",
    "Clove oil",
    "Blackberry oil",
    "Dill oil",
    "Lemon grass oil",
    "Celery oil",
    "Onion oil",
    "Peppermint oil",
    "Anise oil",
    "Geranium oil",
    "Mustard oil",
    "Bitter almond oil",
    "Sage oil",
    "Caraway oil",
    "Fennel oil",
    "Thyme oil",
    "Chamomile oil"
  ];

  return (<>
    <div className="page-header pb-5">
      <div className="container text-center py-5">
        <h1 className="display-4 text-uppercase mb-3 animated slideInDown">Essential Oils</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center text-uppercase mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">Pages</a>
            </li>
            <li className="breadcrumb-item text-primary active" aria-current="page">Essential Oils</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-gradient">Premium Oils Collection</h1>
        <p className="lead text-muted">Discover our wide range of natural and therapeutic oils</p>
      </div>
      
      <div className="row g-4">
        {oils.map((oilName, index) => (
          <div key={index} className="col-md-3 col-sm-6 text-center">
            <div className="oil-item mb-4">
              <img 
                src={oil} 
                alt={oilName}
                className="oil-image img-fluid w-100"
                style={{ objectFit: 'cover' }}
              />
              <h3 className=" mt-3  text-light">{oilName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>);
}