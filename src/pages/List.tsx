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
} from "@ionic/react";

import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${environment.apiEndpoint}/countries`);

  if (!data) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle  className='Ion__Title'>
              Lista de Paises
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((country: any) => {
            return (
              <IonCard className='Ion__Card' key={country.id}>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Nombre: {country.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Hecho del país: {country.fact}</IonCardSubtitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>ID: {country.id}</IonCardSubtitle>
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
