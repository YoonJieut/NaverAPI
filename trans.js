function translateComplexDetail(complexDetail) {
  const translation = {
    complexNo: "단지 번호",
        complexName: "단지 이름",
        cortarNo: "지역 번호",
        realEstateTypeCode: "부동산 유형 코드",
        realEstateTypeName: "부동산 유형 이름",
        detailAddress: "상세 주소",
        roadAddress: "도로명 주소",
        latitude: "위도",
        longitude: "경도",
        totalHouseholdCount: "총 세대 수",
        totalLeaseHouseholdCount: "총 임대 세대 수",
        permanentLeaseHouseholdCount: "영구 임대 세대 수",
        nationLeaseHouseholdCount: "국가 임대 세대 수",
        civilLeaseHouseholdCount: "민간 임대 세대 수",
        publicLeaseHouseholdCount: "공공 임대 세대 수",
        longTermLeaseHouseholdCount: "장기 임대 세대 수",
        etcLeaseHouseholdCount: "기타 임대 세대 수",
        highFloor: "최고 층수",
        lowFloor: "최저 층수",
        useApproveYmd: "사용 승인 날짜",
        totalDongCount: "총 동 수",
        maxSupplyArea: "최대 공급 면적",
        minSupplyArea: "최소 공급 면적",
        dealCount: "거래 수",
        rentCount: "임대 수",
        leaseCount: "임차 수",
        shortTermRentCount: "단기 임대 수",
        isBookmarked: "즐겨찾기 여부",
        batlRatio: "건폐율",
        btlRatio: "용적률",
        parkingPossibleCount: "가능한 주차 공간 수",
        parkingCountByHousehold: "세대당 주차 공간 수",
        constructionCompanyName: "건설 회사명",
        heatMethodTypeCode: "난방 방식 코드",
        heatFuelTypeCode: "난방 연료 코드",
        pyoengNames: "평형 구성",
        managementOfficeTelNo: "관리사무소 연락처",
        address: "주소",
        roadAddressPrefix: "도로명 주소 접두어",
        roadZipCode: "우편번호"
  };

  let translated = {};
  for (let key in complexDetail) {
      if (complexDetail.hasOwnProperty(key)) {
          translated[translation[key] || key] = complexDetail[key];
      }
  }
  return translated;
}

// 예시 사용
const complexDetail = {
  // ... 여기에 API로부터 받은 데이터를 입력...
    complexNo: '100772',
    complexName: '한국도로공사조합(동산)',
    cortarNo: '3017011100',
    realEstateTypeCode: 'APT',
    realEstateTypeName: '아파트',
    detailAddress: '351-2',
    roadAddress: '갈마중로16번길 7',
    latitude: 36.347233,
    longitude: 127.371707,
    totalHouseholdCount: 142,
    totalLeaseHouseholdCount: 0,
    permanentLeaseHouseholdCount: 0,
    nationLeaseHouseholdCount: 0,
    civilLeaseHouseholdCount: 0,
    publicLeaseHouseholdCount: 0,
    longTermLeaseHouseholdCount: 0,
    etcLeaseHouseholdCount: 0,
    highFloor: 15,
    lowFloor: 12,
    useApproveYmd: '19900618',
    totalDongCount: 1,
    maxSupplyArea: 101.9,
    minSupplyArea: 88.64,
    dealCount: 1,
    rentCount: 0,
    leaseCount: 0,
    shortTermRentCount: 0,
    isBookmarked: false,
    batlRatio: '0',
    btlRatio: '0',
    parkingPossibleCount: 0,
    parkingCountByHousehold: 0,
    constructionCompanyName: '두산건설',
    heatMethodTypeCode: 'HT001',
    heatFuelTypeCode: 'HF001',
    pyoengNames: '88㎡, 101A㎡, 101B',
    managementOfficeTelNo: '042-523-8752',
    address: '대전시 서구 갈마동',
    roadAddressPrefix: '대전시 서구',
    roadZipCode: '35272'
  
};

const translatedDetail = translateComplexDetail(complexDetail);
console.log(translatedDetail);