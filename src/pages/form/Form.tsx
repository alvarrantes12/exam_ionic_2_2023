import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";
import './Form.css';


const {putMethod} = ApiMethods(`${environment.apiEndpoint}/countries`)

const Form: React.FC = () => {
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [fact, setFact] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(country, name, fact);
        setMessage('Editado correctamente');
        setCountry('');
        setName('');
        setFact('');
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                    <IonItem>
                        <IonLabel position='floating'>Country</IonLabel>
                        <IonInput
                            value={country}
                            onIonChange={(e) => setCountry(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='floating'>Name</IonLabel>
                        <IonInput
                            value={name}
                            onIonChange={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Fact</IonLabel>
                        <IonInput
                            value={fact}
                            onIonChange={(e) => setFact(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Editar</IonButton>
                </form>
                <IonButton expand='full'>Ir a la Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Form;
