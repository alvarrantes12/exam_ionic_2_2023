import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import ApiMethods from '../../commons/ApiMethods';
import { environment } from '../../environments/environment.dev';
import { useHistory } from 'react-router';

const Form: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [fact, setFact] = useState('');
    const [message, setMessage] = useState('');
    const {putMethod} = ApiMethods(`${environment.apiEndpoint}/countries`);
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name, fact);
        setMessage('Editado correctamente');
        setId('');
        setName('');
        setFact('');
    };

    const handleRedirect = () => {
        setMessage('');
        history.push('/pages/List');
        window.location.reload();
    };

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                    <IonItem>
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput
                            type="number" 
                            value={id} 
                            onIonInput={(e) => setId(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{marginTop: '20px'}}>
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput
                            value={name}
                            onIonChange={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{marginTop: '20px'}}>
                        <IonLabel position='floating'>Datos curioso</IonLabel>
                        <IonInput
                            value={fact}
                            onIonChange={(e) => setFact(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton style={{marginTop: '20px'}} type='submit' expand='full'>Editar</IonButton>
                </form>
                <IonButton style={{marginTop: '15px', marginLeft:'20px', marginRight:'10px'}} expand='full' onClick={handleRedirect}>Ir a la Lista</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Form;