import requests
# 200 = suceess
# 300 = redirected
# 400 = error/ not available
# 404 = not founded


response = requests.get('https://api.chucknorris.io/jokes/random')

print(response.text)
# <Response [200]>


jokes = []
for i in range(10):
    response = requests.get('https://api.chucknorris.io/jokes/random')
    data = response.json()['value']
    # joke_value = data
    
    jokes.append(data)

print(jokes)