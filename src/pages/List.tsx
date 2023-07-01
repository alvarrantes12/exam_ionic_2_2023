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
} from '@ionic/react';

import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${environment.apiEndpoint}/countries`);

  if (!data) {
    return <h1>Loading countries...</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Exam 2 C18512 - C16536
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          { data?.map((country: any) => {
            return (
              <IonCard className='ion-card'>
                <IonCardHeader>
                  <IonCardTitle className='ion-card-title'>Country: {country.name}</IonCardTitle>
                  <IonCardSubtitle className='ion-card-subtitle'>Fact: {country.fact}</IonCardSubtitle>
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