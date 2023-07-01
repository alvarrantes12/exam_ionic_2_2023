import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";
import './FormEdit.css';

const FormEdit: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [fact, setFact] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {putMethod} = ApiMethods(`${environment.apiEndpoint}/countries`)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name, fact);
        setMessage('¡Editado correctamente!');
        setId('');
        setName('');
        setFact('');
    }

    const handleRedirect = () => {
        history.push("/pages/List");
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1
                style={{
                    textAlign: "center",
                    fontSize: "24px",
                    marginTop: "20px",
                    marginBottom: "40px"
                }}
                >
                Editar País
                </h1>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: "50px", marginLeft: "20px", marginRight: "10px"}}>
                    <IonItem>
                        <IonLabel position="floating">ID</IonLabel>
                        <IonInput 
                        value={id} 
                        onIonChange={(e) => setId(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonItem style={{marginButton: "20px"}}>
                        <IonLabel position="floating">Nombre</IonLabel>
                        <IonInput 
                        value={name} 
                        onIonChange={(e) => setName(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonItem style={{marginButton: "20px"}}>
                        <IonLabel position="floating">Hecho del País</IonLabel>
                        <IonInput 
                        value={fact} 
                        onIonChange={(e) => setFact(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand="full">Editar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand="full">Ir a la lista de países</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormEdit;
