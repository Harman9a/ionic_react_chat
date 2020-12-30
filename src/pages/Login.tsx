import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";
import firebase from "../components/firebase/";
import { useDispatch } from "react-redux";
import { LoginWithEmailAction } from "../Redux/Actions/AuthActions";

export default function Login() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showToast1, setShowToast1] = useState(false);
  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log(res.user.displayName);
        dispatch(
          LoginWithEmailAction({
            email: email,
            password: password,
          })
        );
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result: any) => {
            console.log(result.user.displayName);
          })
          .catch((err: any) => console.log(err.message));
      });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="con">
        <IonItem className="input">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem className="input">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton
          color="primary"
          expand="block"
          className="button"
          onClick={() => handleSubmit()}
        >
          Login
        </IonButton>
        <IonButton
          color="light"
          expand="block"
          className="button"
          onClick={() => signInWithGoogle()}
        >
          Login With Google
        </IonButton>
        <IonButton
          color="light"
          expand="block"
          className="button"
          href="/signup"
        >
          Sign up
        </IonButton>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Login"
          duration={200}
        />
      </IonContent>
    </IonPage>
  );
}
