import React from 'react';
import "./Services.css";
const Services = () => {
  return (
    <div className='container my-5'>
        <div className="row my-5">
            <div className='col-md-12 f-offer p-5'>
                <h3>Website Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A excepturi eum molestias maiores tenetur velit voluptatem amet, similique pariatur, temporibus esse tempora explicabo architecto natus nisi impedit reprehenderit fugiat incidunt.</p>
                <p>Pricing : $1,000 - $3,000</p>
            </div>
        </div>
        <div className="row my-5">
            <div className='col-md-12 s-offer p-5'>
                <h3>Website Maintenance</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A excepturi eum molestias maiores tenetur velit voluptatem amet, similique pariatur, temporibus esse tempora explicabo architecto natus nisi impedit reprehenderit fugiat incidunt.</p>
                <p>Pricing : $250 per month</p>
            </div>
        </div>
        <div className="row my-5">
            <div className='col-md-12 t-offer p-5'>
                <h3>Website Hosting</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A excepturi eum molestias maiores tenetur velit voluptatem amet, similique pariatur, temporibus esse tempora explicabo architecto natus nisi impedit reprehenderit fugiat incidunt.</p>
                <p>Pricing : $25 per month</p>
            </div>
        </div>
    </div>
  )
}

export default Services