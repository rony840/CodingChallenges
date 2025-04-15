export const sortAscendingByDate = (array) => {
    // Write your code here
    array.sort((a,b)=>new Date(a.date) - new Date(b.date))
    
    return array
}
let str = '2022-10-20'
const events = [
    { name: 'Event 1', date: '2022-10-20', location: 'New York' },
    { name: 'Event 2', date: '2023-02-10', location: 'Paris' },
    { name: 'Event 3', date: '2023-01-01', location: 'Tokyo' },
  ];
console.log(sortAscendingByDate(events))