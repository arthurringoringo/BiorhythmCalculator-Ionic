
import React from 'react';
import { render } from 'react-dom';
import {ResponsiveContainer,
        LineChart,
        Line,XAxis, YAxis, Tooltip
        } from 'recharts';
import { calculateBiorhythms, calculateBiorhythmSeries } from '../calculateBiorhythm';
import dayjs from 'dayjs';


function BiorhythmCharts({birthDate,targetDate,size})
{
    const startDates = dayjs(targetDate).subtract(15,'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate,startDates,size)
        return(
            <ResponsiveContainer width="99%" height={500}>       
                <LineChart data={data} >
                    <XAxis />
                    <YAxis/>
                    <Tooltip/>
                    <Line type="natural" dataKey ="physical" stroke="red"/>
                    <Line type="natural" dataKey ="Emotional" stroke="yellow"/>
                    <Line type="natural" dataKey ="intellectual" stroke="blue"/>
                </LineChart> 
            </ResponsiveContainer>


       );  
    
}

export default BiorhythmCharts;

 