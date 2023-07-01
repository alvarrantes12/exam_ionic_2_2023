

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
  IonItem,
  IonLabel,
  IonSpinner,
  IonButton
} from "@ionic/react";
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environment.dev';


const List: React.FC = () => {

  const {data, refetch} = ApiMethods(`${environment.apiEndpoint}/countries`)

  if(!data){
    
    return <h1>
      <IonItem>
        <IonLabel>Cargando la ia infromacion...</IonLabel>
        <IonSpinner name="circles"></IonSpinner>
      </IonItem>
    </h1>

  }else{
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Examen 2: Ionic
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((country: any) => {
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Identificador: {country.id}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>País: {country.name}</IonCardSubtitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Fun Fact: {country.fact}</IonCardSubtitle>
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
