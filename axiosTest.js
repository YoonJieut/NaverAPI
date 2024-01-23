const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://hogangnono.com"; // 대상 사이트 URL

async function fetchHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching page:", error);
  }
}

async function extractData(html) {
  const $ = cheerio.load(html);
  const data = [];

  $(".class-name").each((i, elem) => {
    data.push($(elem).text().trim());
  });

  return data;
}

async function crawlWebsite() {
  const html = await fetchHTML(url);
  const data = await extractData(html);
  console.log(data);
}

crawlWebsite();
