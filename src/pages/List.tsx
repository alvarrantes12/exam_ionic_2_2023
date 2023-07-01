import "./List.css";

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
} from "@ionic/react";

import ApiMethods from "../commons/ApiMethods";

import { environment } from "../environments/environment.dev";

const List: React.FC = () => {
  const { data, getMethod } = ApiMethods(
    `${environment.apiEndpoint}/countries`
  );

  if (!data) {
    return <h2>Cargando Listado...</h2>;
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Examen 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {data?.map((country: any) => {
            return (
              <IonCard className="ion-card">
                <IonCardHeader>
                  <IonCardSubtitle className="ion-card-subtitle">
                    Id: {country.id}
                  </IonCardSubtitle>
                  <IonCardTitle className="ion-card-title">
                    Nombre: {country.name}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonCardTitle className="ion-card-title">
                    Dato Curioso: {country.fact}
                  </IonCardTitle>
                </IonCardContent>
              </IonCard>
            );
          })}
        </IonContent>
      </IonPage>
    );
  }
};

export default List;
