const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.weatherReport.createMany({
    data: [
      {
        location: "石垣島",
        windDirection: "西北西",
        windStrength: "4",
        weather: "晴れ",
        pressure: 6,
        temperature: 32,
      },
      {
        location: "那覇",
        windDirection: "西北西",
        windStrength: "5",
        weather: "くもり",
        pressure: 2,
        temperature: 32,
      },
      {
        location: "南大東島",
        windDirection: "南西",
        windStrength: "5",
        weather: "雨",
        pressure: 2,
        temperature: 27,
      },
      {
        location: "名瀬",
        windDirection: "北北西",
        windStrength: "7",
        weather: "くもり",
        pressure: 991,
        temperature: 29,
      },
      {
        location: "鹿児島",
        windDirection: "東",
        windStrength: "4",
        weather: "くもり",
        pressure: 2,
        temperature: 33,
      },
      {
        location: "福江",
        windDirection: "東",
        windStrength: "3",
        weather: "晴れ",
        pressure: 4,
        temperature: 33,
      },
      {
        location: "厳原",
        windDirection: "南東",
        windStrength: "2",
        weather: "くもり",
        pressure: 5,
        temperature: 32,
      },
      {
        location: "足摺岬",
        windDirection: "東南東",
        windStrength: "2",
        weather: "晴れ",
        pressure: 7,
        temperature: 31,
      },
      {
        location: "室戸岬",
        windDirection: "東",
        windStrength: "5",
        weather: "晴れ",
        pressure: 8,
        temperature: 32,
      },
      {
        location: "松山",
        windDirection: "南",
        windStrength: "2",
        weather: "くもり",
        pressure: 7,
        temperature: 34,
      },
      {
        location: "浜田",
        windDirection: "北北西",
        windStrength: "2",
        weather: "晴れ",
        pressure: 6,
        temperature: 32,
      },
      {
        location: "西郷",
        windDirection: "南西",
        windStrength: "3",
        weather: "くもり",
        pressure: 7,
        temperature: 32,
      },
      {
        location: "大阪",
        windDirection: "北北西",
        windStrength: "2",
        weather: "くもり",
        pressure: 8,
        temperature: 33,
      },
      {
        location: "潮岬",
        windDirection: "南東",
        windStrength: "3",
        weather: "くもり",
        pressure: 9,
        temperature: 30,
      },
      {
        location: "八丈島",
        windDirection: "北北西",
        windStrength: "2",
        weather: "くもり",
        pressure: 12,
        temperature: 29,
      },
      {
        location: "大島",
        windDirection: "南",
        windStrength: "4",
        weather: "雨",
        pressure: 12,
        temperature: 30,
      },
      {
        location: "御前崎",
        windDirection: "南東",
        windStrength: "3",
        weather: "雨強し",
        pressure: 12,
        temperature: 27,
      },
      {
        location: "銚子",
        windDirection: "南",
        windStrength: "4",
        weather: "晴れ",
        pressure: 13,
        temperature: 30,
      },
      {
        location: "前橋",
        windDirection: "東南東",
        windStrength: "2",
        weather: "くもり",
        pressure: 10,
        temperature: 30,
      },
      {
        location: "小名浜",
        windDirection: "南南東",
        windStrength: "5",
        weather: "晴れ",
        pressure: 12,
        temperature: 29,
      },
      {
        location: "輪島",
        windDirection: "南西",
        windStrength: "4",
        weather: "晴れ",
        pressure: 7,
        temperature: 33,
      },
      {
        location: "相川",
        windDirection: "東南東",
        windStrength: "2",
        weather: "くもり",
        pressure: 7,
        temperature: 33,
      },
      {
        location: "仙台",
        windDirection: "南南東",
        windStrength: "4",
        weather: "くもり",
        pressure: 9,
        temperature: 30,
      },
      {
        location: "宮古",
        windDirection: "南南東",
        windStrength: "3",
        weather: "晴れ",
        pressure: 8,
        temperature: 30,
      },
      {
        location: "秋田",
        windDirection: "南南東",
        windStrength: "3",
        weather: "くもり",
        pressure: 7,
        temperature: 33,
      },
      {
        location: "函館",
        windDirection: "南南東",
        windStrength: "2",
        weather: "雨強し",
        pressure: 8,
        temperature: 24,
      },
      {
        location: "浦河",
        windDirection: "東南東",
        windStrength: "3",
        weather: "くもり",
        pressure: 8,
        temperature: 23,
      },
      {
        location: "根室",
        windDirection: "南",
        windStrength: "4",
        weather: "雨",
        pressure: 9,
        temperature: 22,
      },
      {
        location: "稚内",
        windDirection: "東南東",
        windStrength: "1",
        weather: "雨",
        pressure: 7,
        temperature: 22,
      },
      {
        location: "ポロナイスク",
        windDirection: "南東",
        windStrength: "2",
        weather: "霧",
        pressure: 9,
        temperature: 16,
      },
      {
        location: "セベロクリリスク",
        windDirection: "西",
        windStrength: "2",
        weather: "くもり",
        pressure: 15,
        temperature: 15,
      },
      {
        location: "ハバロフスク",
        windDirection: "北",
        windStrength: "2",
        weather: "くもり",
        pressure: 7,
        temperature: 20,
      },
      {
        location: "ルドナヤプリスタニ",
        windDirection: "南東",
        windStrength: "1",
        weather: "くもり",
        pressure: 7,
        temperature: 21,
      },
      {
        location: "ウラジオストク",
        windDirection: "北西",
        windStrength: "4",
        weather: "晴れ",
        pressure: 8,
        temperature: 24,
      },
      {
        location: "ソウル",
        windDirection: "北北西",
        windStrength: "2",
        weather: "天気不明",
        pressure: 7,
        temperature: 26,
      },
      {
        location: "ウルルン島",
        windDirection: "北東",
        windStrength: "4",
        weather: "くもり",
        pressure: 8,
        temperature: 23,
      },
      {
        location: "プサン",
        windDirection: "東北東",
        windStrength: "2",
        weather: "くもり",
        pressure: 5,
        temperature: 31,
      },
      {
        location: "モッポ",
        windDirection: "北東",
        windStrength: "2",
        weather: "晴れ",
        pressure: 5,
        temperature: 31,
      },
      {
        location: "チェジュ島",
        windDirection: "北東",
        windStrength: "3",
        weather: "晴れ",
        pressure: 4,
        temperature: 31,
      },
      {
        location: "台北",
        windDirection: "西北西",
        windStrength: "1",
        weather: "晴れ",
        pressure: 5,
        temperature: 34,
      },
      {
        location: "恒春",
        windDirection: "西北西",
        windStrength: "2",
        weather: "晴れ",
        pressure: 6,
        temperature: 32,
      },
      {
        location: "長春",
        windDirection: "北西",
        windStrength: "2",
        weather: "天気不明",
        pressure: 12,
        temperature: 25,
      },
      {
        location: "北京",
        windDirection: "北東",
        windStrength: "3",
        weather: "天気不明",
        pressure: 2,
        temperature: 35,
      },
      {
        location: "武漢",
        windDirection: "北北東",
        windStrength: "3",
        weather: "天気不明",
        pressure: 9,
        temperature: 28,
      },
      {
        location: "アモイ",
        windDirection: "西南西",
        windStrength: "2",
        weather: "天気不明",
        pressure: 6,
        temperature: 32,
      },
      {
        location: "香港",
        windDirection: "南西",
        windStrength: "2",
        weather: "晴れ",
        pressure: 7,
        temperature: 32,
      },
      {
        location: "ラワーグ",
        windDirection: "南西",
        windStrength: "2",
        weather: "晴れ",
        pressure: 8,
        temperature: 31,
      },
      {
        location: "マニラ",
        windDirection: "南西",
        windStrength: "2",
        weather: "くもり",
        pressure: 8,
        temperature: 29,
      },
      {
        location: "父島",
        windDirection: "南東",
        windStrength: "3",
        weather: "晴れ",
        pressure: 11,
        temperature: 31,
      },
      {
        location: "南鳥島",
        windDirection: "南東",
        windStrength: "3",
        weather: "天気不明",
        pressure: 13,
        temperature: 27,
      },
      {
        location: "富士山",
        windDirection: "-",
        windStrength: "-",
        weather: "-",
        pressure: 0,
        temperature: 6,
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
