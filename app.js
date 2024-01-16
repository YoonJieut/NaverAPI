import fs from 'fs';
import fetch from 'node-fetch';

// 비동기 HTTP 요청을 위한 함수: 시도 정보 가져오기
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
async function main() {
  try {
    const sidoInfo = await getSidoInfo();
    console.log('Sido Info:', sidoInfo);
    const gunguInfo = await getGunguInfo(sidoInfo[0]);
    console.log('Gungu Info:', gunguInfo);
    const dongInfo = await getDongInfo(gunguInfo[0]);
    console.log('Dong Info:', dongInfo);
    const aptList = await getAptList(dongInfo[0]);
    console.log('Apartment List:', aptList);
  } catch (error) {
    console.error('Error in main function:', error);
  }
}
// main();