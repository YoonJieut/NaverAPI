import requests
import json
down_url = 'https://new.land.naver.com/api/complexes/8928'
r = requests.get(down_url, data={"sameAddressGroup": "false"}, headers={
    "Accept-Encoding": "gzip",
    "Host": "new.land.naver.com",
    "Referer": "https://new.land.naver.com/complexes/8928?ms=37.482968,127.0634,16&a=APT&b=A1&e=RETAIL",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
})
r.encoding = "utf-8-sig"
temp = json.loads(r.text)
