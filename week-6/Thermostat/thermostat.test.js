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

    it('Decreases the temperature by 2', () => {
        const thermostat = new Thermostat();
        thermostat.down() 
        thermostat.down()
        expect(thermostat.getTemperature()).toBeLessThan(19);
    });

    it('power saving mode on', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true);
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25);
    });

    it('Can go above previous max temp with power saving off', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0 ; i < 6 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(26);
    });

    it('Cannot go below 10 degrees', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0 ; i < 11 ; i++) {
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toBe(10);
    });
    
});