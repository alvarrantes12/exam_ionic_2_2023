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
} 
from '@ionic/react'
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environment.dev';

const List: React.FC = () => {
  const { data } = ApiMethods(`${environment.apiEndpoint}/countries`);

  if(!data){
    return <h1>Cargando Informacion...</h1>
  } else{
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Examen 2 Ionic - Lista de Paises
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        { data?.map((country: any) => {
          return(
            <IonCard className='Ion-Card'>
              <IonCardHeader>
                <IonCardSubtitle className='Ion-Card-SubTitle-ID'>ID: {country.id}</IonCardSubtitle>
                <IonCardTitle className='Ion-Card-Title'>Nombre: {country.name}</IonCardTitle>
                <IonCardSubtitle className='Ion-Card-SubTitle'>Factor: {country.fact}</IonCardSubtitle>
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