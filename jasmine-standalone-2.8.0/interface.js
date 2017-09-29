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
  $('#temperature').fadeOut(1).text(thermostat.temperature).fadeIn(1000);
  $('#temperature').attr('class', thermostat.energyUsage());
}

});
