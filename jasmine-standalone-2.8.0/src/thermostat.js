function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this.powerSave = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinumumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.temperature = this.MAX_LIMIT_PSM_ON;
  this.powerSave = true;
};

//this will become private
Thermostat.prototype.isMaximumTemperature = function() {
  if(this.isPowerSave() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.isMinumumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSave = function() {
  return this.powerSave === true;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  }
  if (this.temperature > 17 && this.temperature < 25) {
    return 'medium-usage';
  }
  return 'high-usage';
}
