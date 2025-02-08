import React from "react";


export default function AddBoisson({setBoissons, boissons}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const id =  boissons.length + 1;
        const nom = e.target.nom.value;
        const prix = parseFloat(e.target.prix.value);
        const stock = parseInt(e.target.stock.value);
        const image = e.target.image.value;
        const boisson = {id, nom, prix, stock, image};
        setBoissons((boissons) => [...boissons, boisson]);
        console.log(boisson);
    }
    
    return(
        <form onSubmit={handleSubmit} className="form-add-beverage">
    <div className="form-group">
        <label htmlFor="nom" className="form-label">Nom</label>
        <input type="text" id="nom" name="nom" className="form-input" />
    </div>
    <div className="form-group">
        <label htmlFor="prix" className="form-label">Prix</label>
        <input type="number" id="prix" name="prix" className="form-input" />
    </div>
    <div className="form-group">
        <label htmlFor="stock" className="form-label">Stock</label>
        <input type="number" id="stock" name="stock" className="form-input" />
    </div>
    <div className="form-group">
        <label htmlFor="image" className="form-label">Image</label>
        <input type="file" id="image" name="image" className="form-input form-file" />
    </div>
    <button type="submit" className="form-button">Ajouter la Boisson</button>
</form>

    )
}


