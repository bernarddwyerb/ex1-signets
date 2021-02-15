import './Dossier.scss';

export default function Dossier(props) {
    return(

        <li className="Dossier">
        <div className="image">
            <img src={'images-dossier/' + props.id + '.webp'} alt={props.nom}/>
        </div>
        <div className="info">
            <h3>{props.nom}</h3>
            <p className="date">{props.date}</p>
        </div>
        <button>petit bouton</button>
    </li>

    );
}