#include "DHT.h"
#define DHTPIN 9
#define DHTTYPE DHT11
#define sensorPower 8
#define sensorPin A5

int val = 0;

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
	pinMode(sensorPower, OUTPUT);

	digitalWrite(sensorPower, LOW);
  dht.begin();
}

void loop() {
  delay(500);
  float humidity = dht.readHumidity();
  float temp = dht.readTemperature(true);

  if (isnan(humidity) || isnan(temp)) {
    Serial.println(F("Sensor Reads N/A"));
    return;
  }

  int level = readSensor();

  Serial.print(humidity);
  Serial.print(F(","));

  Serial.print(temp);
  Serial.print(F(","));

	Serial.print(level);
  Serial.print(",");

	delay(1000);
}

int readSensor() {
	digitalWrite(sensorPower, HIGH);	
	delay(10);						
	val = analogRead(sensorPin);		
	digitalWrite(sensorPower, LOW);	
	return val;					
}