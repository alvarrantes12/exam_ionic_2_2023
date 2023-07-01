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

import { enviroment } from '../environments/environment.dev';

const List: React.FC = () => {

  const { data, refetch } = ApiMethods(`${enviroment.apiEndpoint}/countries`);

  if (!data) {
    return <h1>Cargando....</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Lista de Paises
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((country: any) => {
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Nombre del pais: {country.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Dato curioso: {country.fact}</IonCardSubtitle>
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