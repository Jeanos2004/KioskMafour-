import React from 'react';

const HistoriqueCommande = ({ commandes, setCommandes }) => {
  return (
    <div className="historique-commande">
      <h2>Historique des commandes</h2>
      <ul>
        {commandes.map((commande, index) => (
          <li key={index}>
            {commande.nom} - {commande.prix} GNF
          </li>
        ))}
      </ul>
      {commandes.length > 0 && <button onClick={() => setCommandes([])} className='btn-clear'>Clear All</button>}
    </div>
  );
};

export default HistoriqueCommande;