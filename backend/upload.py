import subprocess
from pymongo import MongoClient, database
import os
from dotenv import load_dotenv
import base64
from time import sleep
from picture import getHeight
from datetime import datetime

load_dotenv("../.env")

USERNAME = os.getenv("MONGO_USERNAME")
PASSWORD = os.getenv("MONGO_PASSWORD")
camType = {"phone": "SwagG Camera", "webcam": "USB Camera"}

client = MongoClient("mongodb+srv://%s:%s@cropdata.mdv0mdr.mongodb.net/?retryWrites=true&w=majority" % (USERNAME, PASSWORD))

def uploadData(humidity: float, temp: float, water_level: float, height: float, imagePath: str):
    if not os.path.exists(imagePath):
        raise ValueError("Path does not exist")

    row = {
        "time": datetime.now(),
        "humidity": humidity,
        "temperature": temp,
        "water_level": water_level,
        "height": height,
        "image": convertImageToArray(imagePath)
    }

    db = client.test

    crop_data = db.get_collection("crop_datas")

    data_id = crop_data.insert_one(row)

    return data_id


def convertImageToArray(img: str):
    with open(img, "rb") as image:
        coded_string = base64.b64encode(image.read())
        return coded_string
    
def capture_image(device="USB Camera", output_file="picture.jpg"):
    command = ["imagesnap"]
    if device:
        command += ["-d", device]
    command += [output_file]
    try:
        subprocess.run(command, check=True)
        print(f"Image captured and saved as {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while capturing the image: {e}")
    except FileNotFoundError as e:
        print(f"imagesnap not found, please install it with 'brew install imagesnap': {e}")


#default is webcam
capture_image()
#capture_image(camType["phone"])
print(uploadData(0, 0, 0, getHeight("picture.jpg")[0], "picture.jpg"))

