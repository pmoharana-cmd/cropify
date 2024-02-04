import os
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np
from pymongo import MongoClient
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv("../.env")

# MongoDB connection and querying
USERNAME = os.getenv("MONGO_USERNAME")
PASSWORD = os.getenv("MONGO_PASSWORD")

client = MongoClient("mongodb+srv://%s:%s@cropdata.mdv0mdr.mongodb.net/?retryWrites=true&w=majority" % (USERNAME, PASSWORD))
db = client['test']
collection = db['crop_datas']  

print("collection:", collection.find())
# Querying the database for the last 3 minutes of data
start_date = datetime.now() - timedelta(hours=24)
end_date = datetime.now()
query = {"time": {"$gte": start_date, "$lte": end_date}}
documents = collection.find(query)

# Convert the cursor to a list of dictionaries
data = list(documents)

# Convert data to DataFrame for easier manipulation
df = pd.DataFrame(data)

# Ensure 'time' is in datetime format
df['time'] = pd.to_datetime(df['time'])

# Sorting the DataFrame by time just in case it's not sorted
df = df.sort_values(by='time')

# Setting up the figure and axes for plotting
fig, ax1 = plt.subplots(figsize=(10, 6))

color = 'tab:red'
ax1.set_xlabel('Time')
ax1.set_ylabel('Temperature (°C)', color=color)
ax1.plot(df['time'], df['temperature'], color=color, label='Temperature')
ax1.tick_params(axis='y', labelcolor=color)

# Twin the axis for two more variables
ax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis
color = 'tab:blue'
ax2.set_ylabel('Humidity (%)', color=color)
ax2.plot(df['time'], df['humidity'], color=color, label='Humidity')
ax2.tick_params(axis='y', labelcolor=color)

ax3 = ax1.twinx()
color = 'tab:green'
ax3.spines["right"].set_position(("axes", 1.2))
ax3.set_ylabel('Water Level (cm)', color=color)
ax3.plot(df['time'], df['water_level'], color=color, label='Water Level')
ax3.tick_params(axis='y', labelcolor=color)

# Format the x-axis to show date properly
ax1.xaxis.set_major_locator(mdates.DayLocator())
ax1.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
plt.xticks(rotation=45)

# Adding linear regression lines
for column in ['temperature', 'humidity', 'water_level']:
    X = mdates.date2num(df['time']).reshape(-1, 1)  # Convert dates to ordinal numbers
    y = df[column].values.reshape(-1, 1)
    model = LinearRegression().fit(X, y)
    trendline = model.predict(X)
    ax1.plot(df['time'], trendline, linestyle='--', label=f'{column} Trend')


fig.tight_layout()  # adjust subplot parameters to give specified padding
plt.show()
