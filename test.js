async function aptPrice(aptCode, index) {
  const downUrl = `https://new.land.naver.com/api/complexes/${aptCode}/prices?complexNo=${aptCode}&tradeType=A1&year=5&priceChartChange=true&areaNo=${index}&areaChange=true&type=table`;

  try {
      const response = await fetch(downUrl, {
          headers: {
            "Accept-Encoding": "gzip, deflate, br",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2NTk5MzcxNTIsImV4cCI6MTY1OTk0Nzk1Mn0.PD7SqZO7z8f97uGQpfSKYMPbrLy6YtRl9XYHWaHiVVE",
            "Host": "new.land.naver.com",
            "Referer": `https://new.land.naver.com/complexes/${aptCode}?ms=37.4830877,127.0579863,15&a=APT&b=A1&e=RETAIL`,
            "sec-ch-ua": "\".Not\/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "macOS",
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

aptPrice(100772, 1).then((res) => console.log("100772번호 1평수 가격정보 ---------------------",res.marketPrices));