import './ListeDossier.scss';
import Dossier from './Dossier';
import tabDossier from './data/dossier.json';

export default function ListeDossier(props) {
    return(
        <div className="ListeDossier">
                    <h2>Ma collection de Signets</h2>
                    <ul>
                        {
                            tabDossier.map((signet) => 
                                <Dossier id={signet.id} nom={signet.nom} date={signet.date} />
                            )
                        }
                    </ul>
                </div>
   );
    
}