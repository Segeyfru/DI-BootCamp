import random
import string

def random_string(length):
    return ''.join(random.choice(string.ascii_letters) for _ in range(length))

randomString1 = random_string(10)
randomString2 = random_string(10)
randomString3 = random_string(10)

print(randomString1)
print(randomString2)
print(randomString3)