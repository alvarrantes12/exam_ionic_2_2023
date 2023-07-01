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
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/react';
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environment.dev';

const List: React.FC = () => {
  const {data} = ApiMethods(`${environment.apiEndpoint}/countries`);

  if (!data) {
    return <h1>Cargando</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Países
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((country: any) => {
            return (
              <IonCard className='IonCard'>
                <IonCardHeader>
                  <IonTitle className='IonCardTitle'>Nombre: {country.name}</IonTitle>
                  <IonCardSubtitle className='IonCardSubtitle'>Dato: {country.fact}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            )
          })}
        </IonContent>
      </IonPage>
    )
  }
}

export default List;