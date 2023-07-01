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
  IonCardContent
} from "@ionic/react"

import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const {data} = ApiMethods(`${environment.apiEndpoint}/countries`);

  if (!data) {
    return <h1>Cargando lista, espere un momento!!!</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
                Lista de paises disponibles
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((country: any) => {
            return (
              <IonCard className='Card'>
                <IonCardHeader>
                  <IonCardTitle className='Title'>Nombre: {country.name}</IonCardTitle>
                  <IonCardSubtitle className='SubTitle'>Dato curioso: {country.fact}</IonCardSubtitle>
                </IonCardHeader>

                < IonCardContent className='Content'>ID: {country.id}</IonCardContent>
              </IonCard>
            )
          })}

        </IonContent>
      </IonPage>
    )
  }

};

export default List;

