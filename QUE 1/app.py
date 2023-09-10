from flask import Flask, request, jsonify
import requests
import json
import concurrent.futures

app = Flask(__name__)

def fetch_numbers(url):
    try:
        response = requests.get(url, timeout=0.5)
        response.raise_for_status()
        data = response.json()
        return data.get('numbers', [])
    except (requests.exceptions.RequestException, json.JSONDecodeError):
        return []

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    merged_numbers = []

    with concurrent.futures.ThreadPoolExecutor() as executor:
        
        futures = [executor.submit(fetch_numbers, url) for url in urls]

        for future in concurrent.futures.as_completed(futures):
            numbers = future.result()
            merged_numbers.extend(numbers)

    merged_numbers = sorted(set(merged_numbers))

    return jsonify({'numbers': merged_numbers})

if _name_ == '__main__':
    app.run(port=8008)
