// MenuSection.js
import React from 'react';
import BoissonCard from './BoissonCard';

const MenuSection = ({ boissons, ajouterAuPanier }) => {
  return (
    <section className="menu-section">
      <h2>Notre Menu</h2>
      <div className="boissons-grid">
        {boissons.map((boisson) => (
          <BoissonCard key={boisson.id} boisson={boisson} ajouterAuPanier={ajouterAuPanier} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;