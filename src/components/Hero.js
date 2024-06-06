import React from 'react';

export default function Hero() {
  return (
    <div className="hero-sec">
      
      <div className="hero-image">
        <img src="https://thecleverbooks.com/wp-content/uploads/2023/04/logo-2.png" alt="CleverBooks Logo" />
      </div>
      <div className="hero-content">
        <h1 style={{ color: '#000', textAlign: 'center' }}>Unlock the Future of Supply Chain Management</h1>
        <p style={{ color: '#000', textAlign: 'center', fontSize:'30px' }}>Where Innovation Meets Efficiency</p>
        <p style={{ color: '#000', textAlign: 'center', padding:'40px', fontSize:'20px' }}>CleverBooks is the game-changing platform that revolutionizes the way you manage your supply chain. With our cutting-edge technology and expert insights, you'll be able to optimize your operations, reduce costs, and boost growth.</p>
        <button style={{ backgroundColor: '#66D9EF', color: '#000', padding: '20px',alignItems:'center', marginLeft:'50px' ,fontSize: '18px', borderRadius: '10px', textAlign: 'center' }}>Discover the Power of CleverBooks</button>
      </div>
    </div>
  );
}