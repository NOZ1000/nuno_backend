import requests
import random

BASE_URL = 'http://localhost:3000/'

def register(username, password):
    url = BASE_URL + 'auth/register'

    data = {
        'username': username,
        'password': password
    }
    res = requests.post(url, json=data)

    if res.json()['username'] == username:
        print('User registered successfully')

def login(username, password):
    url = BASE_URL + 'auth/login'

    data = {
        'username': username,
        'password': password
    }
    res = requests.post(url, json=data)

    if res.json()['access_token']:
        print('Successfully loged in as', username)
        return res.json()['access_token']
    else:
        print('Login is failed')
        return None


def main():
    username = 'testuser' + str(random.randint(0, 100000))
    password = username
    register(username, password)
    auth_token = login(username, password)
    print(auth_token)

if __name__ == "__main__":
    main()
