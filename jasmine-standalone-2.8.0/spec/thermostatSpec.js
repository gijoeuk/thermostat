'use strict';

describe('Thermostat does the following', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at default temperature', function() {
  expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with up() method', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with down() method', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power save mode', function() {
    expect(thermostat.isPowerSave()).toEqual(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSave()).toEqual(false);
  });

  it ('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSave()).toEqual(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSave()).toEqual(true);
  });

  it('can be reset to the default temperature', function() {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(22);
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});

describe('when power saving mode is on', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat has a maximum temperature of 25', function() {
      for (var i = 0; i < 6; i++) {
      thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    })
  })

describe('when power saving mode is off', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a maximum of 32', function() {
    thermostat.switchPowerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });
});

describe('Thermostat can also display energy usage levels', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe('when the temperature is below 18 degrees it', function() {
    it('is considered low-usage', function() {
      for(var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });
  describe('when the temperature is between 18 and 25 degrees it', function() {
    it('is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });
  describe('when the temperature is above 25 degrees it', function() {
    it('is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
