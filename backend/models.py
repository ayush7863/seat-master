from mongoengine import Document, StringField, BooleanField, DateTimeField

class User(Document):
    username = StringField(required=True, unique=True)
    password = StringField(required=True)
    user_status = BooleanField(default=True)
    gender = StringField(choices=('Male', 'Female', 'Other'))
    membership_type = StringField(choices=('Regular', 'Premium', 'VIP'))
    bio = StringField()
    date_of_birth = DateTimeField()
    # role = StringField(required=True, choices=('user', 'Admin'), default='user')  # Updated role field

    meta = {'collection': 'users'}
