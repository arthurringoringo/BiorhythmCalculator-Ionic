import {
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonDatetime

  } from '@ionic/react';
  import React, { useState } from 'react';
  import dayjs from 'dayjs';
import { calculateBiorhythms } from '../calculateBiorhythm';
import { LineChart, Line } from 'recharts';

function formatDate(isostring){

    return dayjs(isostring).format('DD MMM YYYY');

}




function BiorhythmCard({targetDate,birthdate})
{


    const {physical} = calculateBiorhythms(birthdate,targetDate)
    const {Emotional} = calculateBiorhythms(birthdate,targetDate)
    const {intellectual} = calculateBiorhythms(birthdate,targetDate)
return(

    <IonCard className = "ion-text-center">
        <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>

            <p>Physical :{Math.round(physical * 100)}%</p>
            <p>Emotional :{Math.round(Emotional * 100)}%</p>
            <p>intellectual :{Math.round(intellectual * 100)}%</p>

        </IonCardContent>
    
    </IonCard>


);

}

export default BiorhythmCard;

