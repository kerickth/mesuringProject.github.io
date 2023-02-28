import http.server
import socketserver
import paho.mqtt.client as mqtt

# Define the MQTT callback function
def on_message(client, userdata, msg):
    with open("data.txt", "w") as file:
        file.write(msg.payload.decode("utf-8"))

# Create an MQTT client instance
client = mqtt.Client()

# Connect to a broker and subscribe to a topic
client.connect("172.20.10.7", 1883)
client.subscribe("MQTT/DISTANT")

# Set the callback function for when a message is received
client.on_message = on_message

# Start the MQTT client loop in a background thread
client.loop_start()

# Start the HTTP server
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", 8001), handler) as httpd:
    print("Serving at port 8001")
    httpd.serve_forever()
