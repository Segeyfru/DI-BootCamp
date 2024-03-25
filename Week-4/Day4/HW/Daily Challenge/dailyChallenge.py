import requests
import random

# response = requests.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag;subregion;population')
response = requests.get('https://restcountries.com/v3.1/all')
list = []
# for countrie in range(1,10):
#     random_countrie = random.choice(response.json()['name'])
#     list.append(random_countrie)

# print(type(response))
# print(response.content)
# print(list)
# print(response.json()['name'])