import React from 'react';
import '../styles.css';

const services = [
  { name: 'Car Wash', image: 'car-wash.jpg' },
  { name: 'Garden Maintenance', image: 'garden-maintenance.jpg' },
  { name: 'House Cleaning', image: 'house-cleaning.jpg' },
  { name: 'Laundry', image: 'laundry.jpg' },
];

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.name} />
          <h3>{service.name}</h3>
          <button>Request</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
