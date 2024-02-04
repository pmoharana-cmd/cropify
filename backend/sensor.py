
import serial

ser = serial.Serial('/dev/tty.usbmodem1101', 9600, timeout=1)
ser.reset_input_buffer()
data = {}

def getSensorData():
    print("Reading sensor data...", ser.name)
    csv = ser.readline().decode('utf-8').rstrip()
    # print(csv)
    if csv != "":
        val = csv.split(",")
        print(val)
        data["h"] = float(val[0])
        data["t"] = float(val[1])
        data["w"] = float(val[2])
    
        # print(data)
    print("Sensor data read.")
    return data


try:
    while True:
        getSensorData()
except OSError as e:
    print("OSError:", e)
except KeyboardInterrupt as e:
    print("KeyboardInterrupt:", e)