
import { useParams } from 'react-router';;
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
} from "@ionic/react";


import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${environment.apiEndpoint}/countries`);

  if (!data) {
    return <h2>Cargando Listado...</h2>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Examen 2
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {data?.map(([country]: any)=>{
            return (
              <IonCard className= 'ion-card'>
                <IonCardHeader>
                  <IonCardTitle className='ion-card-title' >Id: {country.id}</IonCardTitle>
                  <IonCardTitle className ='ion-card-title'> Pais: {country.name}</IonCardTitle>
                  <IonCardSubtitle className ='ion-card-subtitle'>  Dato curioso: {country.dato}</IonCardSubtitle>
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
