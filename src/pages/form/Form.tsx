import React, { useState } from 'react';
import ApiMethods from '../../commons/ApiMethods';
import { useHistory } from 'react-router-dom';
import { environment } from '../../environments/environment.dev';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';

const Form: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [fact, setFact] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const { putMethod } = ApiMethods(`${environment.apiEndpoint}/countries`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name, fact);
        setMessage('Editado correctamente');
        setId('');
        setName('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                    <IonItem>
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput
                            value={id}
                            onIonChange={(e) => setId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='floating'>Nombre del país</IonLabel>
                        <IonInput
                            value={name}
                            onIonChange={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Dato curioso del país </IonLabel>
                        <IonInput
                            value={fact}
                            onIonChange={(e) => setFact(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Editar país</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full' style={{
                        marginLeft: '22px',
                        marginRight: '12px'
                    }} >Ir a la Lista de países</IonButton>
            </IonContent>
        </IonPage>
    )

}

export default Form;