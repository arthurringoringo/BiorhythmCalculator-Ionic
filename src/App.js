import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCards from './components/BiorhythmCard';
import BiorhythmCharts from './components/BiorhythmCharts';
import dayjs from 'dayjs';
import {useLocalStorage} from './hooks';


function App() {
  const[name,setname] = useLocalStorage('name','');
  const[lastname,setLastName] = useState('');
  const[age,setAge] = useState('');
  const[country,setCountry] = useState('');
  const[major,setMajor] = useState('');
  const[email,setEmail] = useState('');
  const[bod,setBod] = useLocalStorage('bod','');
  const[tod,setTod] = useLocalStorage('tod','');
  const[cycle,setCycle] =useLocalStorage('cycle','');


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
  <p>{name} {lastname}'s Biorhythm</p>


  {tod &&
        <BiorhythmCards targetDate = {tod} birthdate={bod}/>

      }

        
        <IonItem>
          <IonLabel>Name:</IonLabel>
          <IonInput type="text" value={name} onIonChange={x => setname(x.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel>Last Name:</IonLabel>
          <IonInput type="text" onIonChange={x => setLastName(x.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel>age:</IonLabel>
          <IonInput type="number" onIonChange={x => setAge(x.detail.value)} />
        </IonItem>
        
        <IonItem>
          <IonLabel>Country:</IonLabel>
          <IonInput type="text" onIonChange={x => setCountry(x.detail.value)} />
        </IonItem>


        <IonItem>
          <IonLabel>Major:</IonLabel>
          <IonInput type="text" onIonChange={x => setMajor(x.detail.value)} />
        </IonItem>


        <IonItem>
          <IonLabel>Email:</IonLabel>
          <IonInput type="email" onIonChange={x => setEmail(x.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel>Birth Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={bod} onIonChange={x => setBod(x.detail.value)} />
        </IonItem>


        <IonItem>
          <IonLabel>Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={tod} onIonChange={x => setTod(x.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel>Date Cycle:</IonLabel>
          <IonInput  type="number" value={cycle} onIonChange={x => setCycle(x.detail.value)}/>
        </IonItem>


        <BiorhythmCharts targetDate={tod} birthDate={bod} size={cycle}/>




        
        <p>My name is {name} {lastname}. I'm {age} years old. I come from the beautiful country of {country}. I'm majoring in {major}</p>

      </IonContent>
    </IonApp>
  );
}

export default App;
