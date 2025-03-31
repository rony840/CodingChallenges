export const isLeapYear = year => {
    if (year <= 0){
      return false;
    }
    if (year % 400 == 0){
      return true;
    }
    if (year % 100 == 0) {
        return false;
    }
    if (year % 4 == 0) {
        return true;
    }
    else{
      return false;
    }
    // Write your code here
  };

  let year = 2025
  console.log(isLeapYear(year))