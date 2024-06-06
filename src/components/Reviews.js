import React from 'react'

export default function Reviews() {
  return (
    <div className="reviews-sec">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        <div className="review">
          <h3>John Doe</h3>
          <p>"I've been using CleverBooks for a few months now and it's been a game-changer for my business. The inventory management features are top-notch and the customer support is excellent."</p>
        </div>
        <div className="review">
          <h3>Jane Smith</h3>
          <p>"I was hesitant to switch to a new inventory management system, but CleverBooks has exceeded my expectations. The user interface is intuitive and the reporting features are very helpful."</p>
        </div>
        <div className="review">
          <h3>Bob Johnson</h3>
          <p>"I've been using CleverBooks for over a year now and I can't imagine going back to my old system. The demand forecasting feature is incredibly accurate and has helped me optimize my inventory levels."</p>
        </div>
      </div>
    </div>
  )
}