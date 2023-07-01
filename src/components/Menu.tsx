import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { trash, cloudDone, apps, create } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lista de Países',
    url: '/pages/List',
    iosIcon: apps,
    mdIcon: apps
  },
  {
    title: 'Crear Países',
    url: '/pages/FormNew',
    iosIcon: cloudDone,
    mdIcon: cloudDone
  },
  {
    title: 'Editar Países',
    url: '/pages/FormEdit',
    iosIcon: create,
    mdIcon: create
  },
  {
    title: 'Eliminar Países',
    url: '/pages/FormDelete',
    iosIcon: trash,
    mdIcon: trash
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Segundo Examen</IonListHeader>
          <IonNote>Ionic Countries</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
