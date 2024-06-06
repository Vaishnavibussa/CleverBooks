import React, { useState } from 'react'

export default function ProblemTarget() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

  return (
    <div className='prob-target'>
      <h2>Features of CleverBooks </h2>
      <div className="tabs">
        <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
          <img src="https://th.bing.com/th/id/OIP.D7M_XNt69WdgnO5x-nn5bgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 1" />
          <p>Feature 1</p>
        </div>
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
          <img src="https://th.bing.com/th/id/OIP.NJQRMPyMMS2K7H_MjtAEEQHaFX?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 2" />
          <p>Feature 2</p>
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
          <img src="data:image/jpeg;base64,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" alt="Feature 3" />
          <p>Feature 3</p>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p>Description of Feature 1</p>}  
        {activeTab === 1 && <p>Description of Feature 2</p>}
        {activeTab === 2 && <p>Description of Feature 3</p>}
      </div>
    </div>
  )
}