import React from 'react'

export default function KeyMetrics() {
  return (
    <div className='Key-metric'>
        <h2>Why Choose CleverBooks?</h2>
      <div className="metrics">
        <div className="metric">
          <i className="icon chart-icon">Chart</i>
          <p>Accurate Forecasting</p>
          <p>Get accurate demand forecasts to ensure you have the right products in stock.</p>
        </div>
        <div className="metric">
          <i className="icon clock-icon">Clock</i>
          <p>Real-time Inventory Tracking</p>
          <p>Stay on top of your inventory levels with real-time tracking and updates.</p>
        </div>
        <div className="metric">
          <i className="icon robot-icon">Robot</i>
          <p>Smart Order Management</p>
          <p>Automate your order management process to reduce errors and increase efficiency.</p>
        </div>
      </div>
      
    </div>
  )
}