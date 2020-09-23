import{calculateBiorhythm, calculateBiorhythms} from './calculateBiorhythm';

it('calculates the physical biorhythm',() => {
    const{physical} = calculateBiorhythms('1995-01-01','2020-02-18');
    expect(physical).toBeCloseTo(0.5196);

});

it('calculates the emotional biorhythm',() => {
    const{Emotional} = calculateBiorhythms('1995-01-01','2020-02-18');
    expect(Emotional).toBeCloseTo(-0.9010);

});

it('calculates the intelectual biorhythm',() => {
    const{intellectual} = calculateBiorhythms('1995-01-01','2020-02-18');
    expect(intellectual).toBeCloseTo(0.8146);

});