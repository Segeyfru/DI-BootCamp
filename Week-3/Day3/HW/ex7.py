from faker import Faker
import random

fake = Faker()

language_codes = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'zh']


def add_users():
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': random.choice(language_codes)      
    }
    return user


users = [add_users() for _ in range(10)]
users += [add_users()]
print(users)