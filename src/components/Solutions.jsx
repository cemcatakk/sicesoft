import React from 'react';
import { FaLaptopCode, FaMobile, FaCloud, FaNetworkWired, FaRobot } from 'react-icons/fa';

const solutions = [
  {
    title: 'Bireysel Çözümler',
    icon: FaLaptopCode,
    description: 'İşletmenize özel yazılım çözümleri'
  },
  {
    title: 'Mobil Uygulamalar',
    icon: FaMobile,
    description: 'iOS ve Android için native uygulamalar'
  },
  {
    title: 'Entegrasyon',
    icon: FaNetworkWired,
    description: 'Sistemlerinizi entegre eden çözümler'
  },
  {
    title: 'Bulut Çözümleri',
    icon: FaCloud,
    description: 'Güvenli ve ölçeklenebilir bulut altyapısı'
  },
  {
    title: 'Yapay Zeka',
    icon: FaRobot,
    description: 'AI destekli akıllı çözümler'
  }
];

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="container">
        <h2>Çözümlerimiz</h2>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">
                <solution.icon />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;