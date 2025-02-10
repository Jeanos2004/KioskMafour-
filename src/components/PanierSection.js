// PanierSection.js
import React from 'react';
import Card from './Card';

const PanierSection = ({ panier, validerCommande, AnnulerLaSelection, decrementerQuantite }) => {
  return (
    <section className="panier-section">
      <h2>Panier en cours</h2>
      {panier.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <div className="panier-content">
          <ul>
            {panier.map((item, index) => (
              <Card>
                <div className='item' key={index}>
                <li >
                    {item.quantite} {item.nom} - {item.prix} GNF
                </li>
                <button onClick={() => decrementerQuantite(index)} className='decrement_button'>-</button>
                <button onClick={() => AnnulerLaSelection(index)} className='cancel_button'>Cancel</button>
              </div>
              </Card>
            ))}
          </ul>
          <div className="panier-total">
            <p>Total: {panier.reduce((sum, item) => sum + item.prix * item.quantite, 0)} GNF</p>
            <button onClick={validerCommande}>
              Valider la commande
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PanierSection;