import { useHistory } from 'react-router';
import './List.css';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle

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
            <IonCard className='Ion_Card'>
              <IonCardHeader>
                <IonCardSubtitle className='Ion_Card_id'>Id: {country.id}</IonCardSubtitle>
                <IonCardTitle className='Ion_Card_Title'>Nombre: {country.name}</IonCardTitle>
                <IonCardSubtitle className='Ion_Card_SubTitle'>Dato curioso: {country.fact}</IonCardSubtitle>
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