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
  IonButton
} from '@ionic/react';
import { environment } from '../environments/environment.dev';
import ApiMethods from '../commons/ApiMethods';

const List: React.FC = () => {
  const { data} = ApiMethods(`${environment.apiEndpoint}/countries`);
  if (!data){
    return <h1> Cargando información</h1>
  } else {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Examen II
            C09317 - C01950
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data?.map((country: any) => {
            return(
            <IonCard className= 'Ion__Card'>
              <IonCardHeader>
                  <IonCardTitle className= 'Ion__Card__Title'> Nombre: {country.name} </IonCardTitle>
                  <IonCardSubtitle className= 'Ion__Card__SubTitle'> Dato:  {country.fact}</IonCardSubtitle>
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
