/*
Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
*/

const getEarlierDate = (date1, date2) => {
    let dateArr1 = date1.split("/");
    let dateArr2 = date2.split("/");
    let day = dateArr1[0] < dateArr2[0] ? dateArr1 : dateArr2;
    let month = dateArr1[1] == dateArr2[1] ? day : dateArr1[1] == dateArr2[1] ? date1 : date2;

    return dateArr1[2] === dateArr2[2] ? month : dateArr1[2] < dateArr2[2] ? dateArr1 : dateArr2;

}


console.log(getEarlierDate("10/01/2022", "01/09/2021"));

