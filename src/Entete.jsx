import "./Entete.scss";

export default function Entete(props) {
return(

    <header className="Entete">
      <div>Logo</div>
      <ul className="navPrincipale">
        <li>Produits</li>
        <li>A propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtil">
        <li>
          <Badge onClick={basculerSommairePanier} badgeContent={nbArticles} color="primary">
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier cacher={etatCacherSP} etatPanier ={props.etatPanier}/>

        </li>
        <li>Mon compte</li>
      </ul>
    </header>
);
    
}
