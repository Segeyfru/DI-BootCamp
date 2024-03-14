import requests
import json


#HTTP Protocols

#GET Method

#GET \api\data HTTP/1.1
#Host: example.com

#POST method
#POST /api/data HTTP/1.1
#Host: example.com
#COntent-Type: aplication/json

# {
#     "key": "value"
# }

# 200 = Suceess
# 300 = redirect
# 400 = error/not available
# 404 = not founded

response = requests.get('https://api.chucknorris.io/jokes/random')

print(response.status_code)
# <Response [200]>

print('tEXt', response.text)
print('hEADer', response.headers)
print('hEADer', response)

# jokes = []
# for i in range(10):
#     response = requests.get('https://api.chucknorris.io/jokes/random')
#     data = response.json()
#     print(type(data))
#     jokes.append(data)

# print(jokes)

joke = {'key': 'value'}
response_post = requests.post("https://httpbin.org/post", json=joke)