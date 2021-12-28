const Thermostat = require ('./thermostat')

describe('Thermostat class', () => {
    it('returns the temperature of the class', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });

    it('Increases the temperature by 2', () => {
        const thermostat = new Thermostat();
        thermostat.up() 
        thermostat.up()
        expect(thermostat.getTemperature()).toBeGreaterThan(21);
    });
});