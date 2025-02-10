// BoissonCard.js
import React from 'react';
import Card from './Card';

const BoissonCard = ({ boisson, ajouterAuPanier }) => {
  return (
    <div className="boisson-card">
      <Card>
      <img src={boisson.image} alt={boisson.nom} />
      <h3>{boisson.nom}</h3>
      <p>{boisson.prix} GNF</p>
      <p>En stock: {boisson.stock}</p>
      </Card>
      <button 
        onClick={() => ajouterAuPanier(boisson)}
        disabled={boisson.stock === 0}
      >
        {boisson.stock === 0 ? 'Rupture' : 'Ajouter au Panier'}
      </button>
    </div>
  );
};

export default BoissonCard;