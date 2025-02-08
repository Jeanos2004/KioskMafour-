// StatsBanner.js
import React from 'react';

const StatsBanner = ({ totalVentes, panierLength }) => {
  return (
    <div className="stats-banner">
      <div className="stat-item">
        <h3>Total des Ventes</h3>
        <p>{totalVentes} GNF</p>
      </div>
      <div className="stat-item">
        <h3>Commandes en cours</h3>
        <p>{panierLength}</p>
      </div>
    </div>
  );
};

export default StatsBanner;