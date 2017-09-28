$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('Power Save Mode is On')
    updateTemperature();
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('Power Save Mode is Off')
    updateTemperature();
  })

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
  } else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('color', 'black')
  } else {
    $('#temperature').css('color', 'red')
  }
}

});
