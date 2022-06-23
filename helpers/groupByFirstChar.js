import _ from "lodash"

export default function (data) {
  const groupedArray = _.groupBy(data, item => item.firstName.charAt(0).toUpperCase());

  let sectionedList = [];
  for (const [key, value] of Object.entries(groupedArray)) {
    sectionedList.push({
      'title': key,
      'data': value
    })
  }
  sectionedList = sectionedList.sort((a, b) => {
    const nameA = a.title; // ignore upper and lowercase
    const nameB = b.title; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  })

  return {
    list: data,
    sectionedList,
  }
}