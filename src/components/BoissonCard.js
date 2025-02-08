// BoissonCard.js
import React from 'react';

const BoissonCard = ({ boisson, ajouterAuPanier }) => {
  return (
    <div className="boisson-card">
      <img src={boisson.image} alt={boisson.nom} />
      <h3>{boisson.nom}</h3>
      <p>{boisson.prix} GNF</p>
      <p>En stock: {boisson.stock}</p>
      <button 
        onClick={() => ajouterAuPanier(boisson)}
        disabled={boisson.stock === 0}
      >
        {boisson.stock === 0 ? 'Rupture' : 'Ajouter'}
      </button>
    </div>
  );
};

export default BoissonCard;