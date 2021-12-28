class Thermostat{
    constructor() {
        this.temperature = 20;
        this.powerSaving = true;
        this.maxTemp = 25;
        this.minTemp = 10;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.temperature >= this.maxTemp) {
            return this.temperature;
        }
        else {
            return this.temperature += 1;
        }
    }

    down() {
        if (this.temperature <= this.minTemp) {
            return this.temperature;
        }
        else {
        return this.temperature -= 1;
    }
  }

    setPowerSavingMode(boolean) {
        this.powerSaving = boolean;
        this.setMaxTemp();
    }

    setMaxTemp() {
        if(this.powerSaving) {
          this.maxTemp = 25;
        } 
        else {
          this.maxTemp = 32;
        }
    }

    reset() {
        return this.temperature = 20;
    }
}
module.exports = Thermostat;