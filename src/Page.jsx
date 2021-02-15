import './Page.scss';
import Entete from './Entete';
import ListeDossier from './ListeDossier';
import BtnAjoutDossier from './BtnAjoutDossier';

export default function Page() {
return (
    <div className="Page">
       <Entete />
       <section className="contenuPrincipal">
        <ListeDossier />
      </section>
      <BtnAjoutDossier />
    </div>
  );
}
