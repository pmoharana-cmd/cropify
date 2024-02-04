from pymongo import MongoClient
import os
from dotenv import load_dotenv
import base64
from datetime import datetime

load_dotenv("../.env")

USERNAME = os.getenv("MONGO_USERNAME")
PASSWORD = os.getenv("MONGO_PASSWORD")


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
    
for i in range(20):
    uploadData(0, 0, 0, 0, "ruler.jpg")