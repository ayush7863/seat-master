import mongoengine

# Establish a connection to MongoDB
mongoengine.connect('seatMaster', host='mongodb+srv://ayush:ayushkaushik@cluster0.isqxa1d.mongodb.net')

# Access the desired database
db = mongoengine.connection.get_db()
