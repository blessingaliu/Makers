const Thermostat = require ('./thermostat')

describe('Thermostat class', () => {
    it('returns the temperature of the class', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });
});