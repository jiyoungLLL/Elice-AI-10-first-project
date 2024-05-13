export function addData(info, getData, list) {
  if (info === 'education') {
    let school = getData.school;
    let major = getData.major;
    let degree = getData.degree;

    list.textContent = `학교: ${school} | 전공: ${major} | 학위: ${degree}`;
  } else if (info === 'award') {
    let content = getData.content;
    let organization = getData.organization;
    let date = getData.date;

    list.textContent = `수상 내용: ${content} | 시상 단체: ${organization} | 수상 일자: ${date.slice(
      0,
      10
    )}`;
  } else if (info === 'certification') {
    let type = getData.type;
    let certificatedate = getData.date;
    let authority = getData.authority;

    list.textContent = `자격 종류: ${type} | 발급 일자: ${certificatedate.slice(
      0,
      10
    )} | 발급 기관: ${authority}`;
  } else if (info === 'project') {
    let title = getData.title;
    let startDate = getData.startDate;
    let endDate = getData.endDate;
    let role = getData.role;

    list.textContent = `프로젝트명: ${title} | 프로젝트 기간: ${startDate.slice(
      0,
      10
    )} ~ ${endDate.slice(0, 10)} | 역할: ${role}`;
  }
}
