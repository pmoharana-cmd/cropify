from pymongo import MongoClient, database
import os
from dotenv import load_dotenv
import base64

load_dotenv()

USERNAME = os.getenv("MONGO_USERNAME")
PASSWORD = os.getenv("MONGO_PASSWORD")


client = MongoClient("mongodb+srv://%s:%s@cropdata.mdv0mdr.mongodb.net/?retryWrites=true&w=majority" % (USERNAME, PASSWORD))

def uploadData(humidity: float, temp: float, water_level: float, height: float, imagePath: str):
    if not os.path.exists(imagePath):
        raise ValueError("Path does not exist")

    row = {
        "humidity": humidity,
        "temperature": temp,
        "water_level": water_level,
        "height": height,
        "image": convertImageToArray(imagePath)
    }

    db = client.main

    crop_data = db.get_collection("cropData")

    data_id = crop_data.insert_one(row)

    return data_id


def convertImageToArray(img: str):
    with open(img, "rb") as image:
        coded_string = base64.b64encode(image.read())
        return coded_string
    
print(uploadData(0, 0, 0, 0, "picture.jpg"))