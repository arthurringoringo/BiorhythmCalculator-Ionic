import dayjs from 'dayjs';


function calculateBiorhythm(birthDates,targetDates,cycle){
    const birthDate = dayjs(birthDates).startOf('day');
    const targetDate = dayjs(targetDates).startOf('day');
    const diff = targetDate.diff(birthDates,'days')

    return Math.sin(2*Math.PI*diff/cycle)
}

export function calculateBiorhythms(birthDates,targetDates){

    return{

        physical : calculateBiorhythm(birthDates,targetDates,23),
        Emotional : calculateBiorhythm(birthDates,targetDates,28),
        intellectual : calculateBiorhythm(birthDates,targetDates,33),
    
    }
}

export function calculateBiorhythmSeries(birthDates,startDate,size){

    const series = [];
    const startDay = dayjs(startDate).startOf('day');

    for(let i = 0; i < size; i++){
        const targetDate = startDay.add(i,'days').toISOString();

       series.push(calculateBiorhythms(birthDates,targetDate));

    }
    return series;
}