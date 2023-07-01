import { useHistory } from 'react-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton

} from '@ionic/react'
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environment.dev';

const List: React.FC = () => {
  const history = useHistory();
  const { data } = ApiMethods(`${environment.apiEndpoint}/countries`);
  if(!data){
    return <h1>Cargando Informacion...</h1>
  } else{
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Paises disponibles
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        { data?.map((country: any) => {
          return(
            <IonCard>
              <IonCardHeader>
                <IonCardTitle >Nombre: {country.name}</IonCardTitle>
                <IonCardSubtitle >Hecho: {country.fact}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
    )
  }
};

export default List;