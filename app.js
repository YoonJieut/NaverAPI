import fs from 'fs';
import fetch from 'node-fetch';

// 비동기 HTTP 요청을 위한 함수: 시도 정보 가져오기
// ! 대전시는 3000000000
async function getSidoInfo() {
  const downUrl = 'https://new.land.naver.com/api/regions/list?cortarNo=0000000000';
  const response = await fetch(downUrl, {
      method: 'GET',
      headers: {
          "Accept-Encoding": "gzip",
          "Host": "new.land.naver.com",
          "Referer": "https://new.land.naver.com/complexes/102378?ms=37.5018495,127.0438028,16&a=APT&b=A1&e=RETAIL",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
      }
  });
  const data = await response.json();
  return data.regionList.map(region =>
    region.cortarNo);
}
  
  // 비동기 HTTP 요청을 위한 함수: 군구 정보 가져오기
async function getGunguInfo(sidoCode) {
const downUrl = `https://new.land.naver.com/api/regions/list?cortarNo=${sidoCode}`;
const response = await fetch(downUrl, {
  method: 'GET',
  headers: {
  "Accept-Encoding": "gzip",
  "Host": "new.land.naver.com",
  "Referer": "https://new.land.naver.com/complexes/102378?ms=37.5018495,127.0438028,16&a=APT&b=A1&e=RETAIL",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
  }
});
const data = await response.json();
return data.regionList.map(region => region.cortarNo);
}
  
  // 비동기 HTTP 요청을 위한 함수: 동 정보 가져오기
async function getDongInfo(gunguCode) {
const downUrl = `https://new.land.naver.com/api/regions/list?cortarNo=${gunguCode}`;
// 이하 코드는 getGunguInfo와 동일
const response = await fetch(downUrl, {
  method: 'GET',
  headers: {
  "Accept-Encoding": "gzip",
  "Host": "new.land.naver.com",
  "Referer": "https://new.land.naver.com/complexes/102378?ms=37.5018495,127.0438028,16&a=APT&b=A1&e=RETAIL",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
  }
});
const data = await response.json();
return data.regionList.map(region => region.cortarNo);
}
  
  // 비동기 HTTP 요청을 위한 함수: 아파트 리스트 가져오기
async function getAptList(dongCode) {
const downUrl = `https://new.land.naver.com/api/regions/complexes?cortarNo=${dongCode}&realEstateType=APT&order=`;
const response = await fetch(downUrl, {
  method: 'GET',
  headers: {
  "Accept-Encoding": "gzip",
  "Host": "new.land.naver.com",
  "Referer": "https://new.land.naver.com/complexes/102378?ms=37.5018495,127.0438028,16&a=APT&b=A1&e=RETAIL",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
  }
});
const data = await response.json();
  try {
  return data.complexList.map(complex => complex.complexNo);
  } catch (error) {
  console.error('Error fetching apartment list:', error);
  return [];
  }
}

async function getSchoolInfo(aptCode) {
  const downUrl = `https://new.land.naver.com/api/complexes/${aptCode}/schools`;
  try {
      const response = await fetch(downUrl, {
          headers: {
              "Accept-Encoding": "gzip",
              "Host": "new.land.naver.com",
              "Referer": `https://new.land.naver.com/complexes/${aptCode}?ms=37.482968,127.0634,16&a=APT&b=A1&e=RETAIL`,
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
          }
      });
      const tempSchool = await response.json();
      return tempSchool;
  } catch (error) {
      console.error('Error fetching school info:', error);
      return null;
  }
}

async function aptPrice(aptCode, index, pyeongNo) {
  const downUrl = `https://new.land.naver.com/api/complexes/${aptCode}/prices?complexNo=${aptCode}&tradeType=A1&year=5&priceChartChange=true&areaNo=${pyeongNo}&areaChange=true&type=table`;
  try {
      const response = await fetch(downUrl, {
          headers: {
              "Accept-Encoding": "gzip",
              "Host": "new.land.naver.com",
              "Referer": `https://new.land.naver.com/complexes/${aptCode}?ms=37.4830877,127.0579863,15&a=APT&b=A1&e=RETAIL`,
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
          }
      });
      const tempPrice = await response.json();
      return tempPrice;
  } catch (error) {
      console.error('Error fetching apartment price:', error);
      return null;
  }
}

// ! 추가할 헤더 요청
// {
//   "Accept-Encoding": "gzip, deflate, br",
//   "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2NTk5MzcxNTIsImV4cCI6MTY1OTk0Nzk1Mn0.PD7SqZO7z8f97uGQpfSKYMPbrLy6YtRl9XYHWaHiVVE",
//   "Host": "new.land.naver.com",
//   "Referer": "https://new.land.naver.com/...",
//   "sec-ch-ua": "\".Not\/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
//   "sec-ch-ua-mobile": "?0",
//   "sec-ch-ua-platform": "macOS",
//   "Sec-Fetch-Dest": "empty",
//   "Sec-Fetch-Mode": "cors",
//   "Sec-Fetch-Site": "same-origin",
//   "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
//   }

async function getAptInfo(aptCode) {
  const downUrl = `https://new.land.naver.com/api/complexes/${aptCode}?sameAddressGroup=false`;
  try {
      const response = await fetch(downUrl, {
          headers: {
              "Accept-Encoding": "gzip",
              "Host": "new.land.naver.com",
              "Referer": `https://new.land.naver.com/complexes/${aptCode}?ms=37.482968,127.0634,16&a=APT&b=A1&e=RETAIL`,
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
              }
              });
              const temp = await response.json();
              return temp;
              } catch (error) {
              console.error('Error fetching apartment info:', error);
              return null;
              }
}
// --- 실제 실행함수 ---

async function processData() {

}

  // 사용 예시
  // 대전시 sidoInfo[4];
async function main() {
  try {
    const sidoInfo = await getSidoInfo();
    console.log('Sido Info:', sidoInfo);
    const gunguInfo = await getGunguInfo(sidoInfo[4]);
    console.log('대전, Gungu Info:', gunguInfo);
    /**
     * Gungu Info: [
  '3023000000',
  '3011000000',
  '3017000000',
  '3020000000',
  '3014000000'
]
     */
    const dongInfo = await getDongInfo(gunguInfo[2]);
    console.log('서구 입력, Dong Info:');
    console.table(dongInfo);
    // 둔산동 3017011200
    const aptList = await getAptList(dongInfo[2]);
    console.log('둔산동 입력, Apartment List:', aptList);
    console.table(aptList);
    /**
     * Apartment List: [
  '121596', '5812',   '10143',  '19190',
  '25200',  '112370', '128676', '124291',
  '5814',   '24240',  '129362', '25963',
  '22796',  '24015',  '104431', '25949',
  '108304', '114478', '119312', '127906',
  '5815',   '23699',  '104341', '9531',
  '25951',  '25139',  '14729',  '22272',
  '104703', '109482', '5817',   '11762',
  '100772', '141782'
]
     */
  } catch (error) {
    console.error('Error in main function:', error);
  }
}
main();

// https://new.land.naver.com/api/regions/complexes?cortarNo=3017011200&realEstateType=APT&order=
// 둔산동