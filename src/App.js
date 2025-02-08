// App.js
import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import StatsBanner from './components/StatsBanner';
import MenuSection from './components/MenuSection';
import PanierSection from './components/PanierSection';
import BoissonCard from './components/BoissonCard';
import AddBoisson from './components/addBoisson';
import HistoriqueCommande from './components/HistoriqueCommande';

function App() {
  const [boissons, setBoissons] = useState([
    { id: 1, nom: "Jus de Bissap", prix: 5000, stock: 20, image: "/api/placeholder/150/150" },
    { id: 2, nom: "Jus de Gingembre", prix: 6000, stock: 15, image: "/api/placeholder/150/150" },
    { id: 3, nom: "Jus de Baobab", prix: 7000, stock: 10, image: "/api/placeholder/150/150" },
    { id: 4, nom: "Jus d'Ananas", prix: 6000, stock: 12, image: "/api/placeholder/150/150" }
  ]);

  const [panier, setPanier] = useState([]);
  const [totalVentes, setTotalVentes] = useState(0);
  const [commandes, setCommandes] = useState([]);

  const ajouterAuPanier = (boisson) => {
    if (boisson.stock > 0) {
      const boissonExisteDeja = panier.some(b => b.id === boisson.id);
      if (!boissonExisteDeja) {
        setPanier([...panier, {...boisson, quantite : 1}]);
        

      } else {
        setPanier(panier.map(b => 
          b.id === boisson.id? {...b, quantite: b.quantite + 1} : b
        ));
      }
      setBoissons(boissons.map(b => 
        b.id === boisson.id? {...b, stock: b.stock - 1} : b
      ));
      }
  };
  const AnnulerLaSelection = (index) =>{
    const newPanier = [...panier];
    newPanier.splice(index, 1);
    setPanier(newPanier);
    setBoissons(boissons.map(b => 
      b.id === panier[index].id? {...b, stock: b.stock + 1} : b
    ));
    setBoissons(boissons.map(b => 
      b.id === panier[index].id? {...b, stock: b.stock + 1} : b
    ));


  }
  const decrementerQuantite = (index) => {
    if (panier[index].quantite > 1) {
      setPanier(panier.map((b, i) => b.quantite > 1 && i === index ? {...b, quantite: b.quantite - 1} : b));
      setBoissons(boissons.map(b => 
        b.id === panier[index].id? {...b, stock: b.stock + 1} : b
      ));
    }else{
      AnnulerLaSelection(index);
    }
  }

  const validerCommande = () => {
    let total = panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);
    console.log(totalVentes + total);
    if (panier.length > 5) {
      // Appliquer une réduction de 10% sur le total
      total *= 0.9;
    }
    setCommandes([...commandes, {nom: panier.map(b => b.quantite + " x " + b.nom).join(', '), prix: total}])
    setTotalVentes(totalVentes + total);
    setPanier([]);
  };

  return (
    <div className="container">
      <Header />
      <StatsBanner totalVentes={totalVentes} panierLength={panier.map(b => b.quantite).reduce((sum, quantite) => sum + quantite, 0)} />
      <main className="main-content">
        <MenuSection boissons={boissons} ajouterAuPanier={ajouterAuPanier} />
        <PanierSection panier={panier} validerCommande={validerCommande} AnnulerLaSelection={AnnulerLaSelection} decrementerQuantite={decrementerQuantite} />
        
      </main>
      <footer className='footer'>
          <AddBoisson setBoissons={setBoissons} boissons={boissons} />
          <HistoriqueCommande commandes={commandes} setCommandes={setCommandes} />
        </footer>
    </div>
  );
}

export default App;