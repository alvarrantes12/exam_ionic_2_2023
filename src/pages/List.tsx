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
import { environment } from "../environments/environment.dev";
import "./List.css";


const List: React.FC = () => {

  const {data} = ApiMethods(`${environment.apiEndpoint}/countries`)

  if(!data){
    return (
      <div className="container">
        <h1 className="Ion__Loading">Cargando...</h1>
      </div>
    )
    

  }else{
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
          {data?.map((countrie: any) => {
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>ID: {countrie.id}</IonCardTitle>
                  <IonCardTitle className='Ion__Card__Title'>Nombre del país: {countrie.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Dato curioso: {countrie.fact}</IonCardSubtitle>
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
