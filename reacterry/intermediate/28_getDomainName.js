export const getDomain = (url) => {
    // Write your code here
    let domain = ''
    let sarr = url.split(/[/]/)
    domain=sarr[2]
    return domain.slice(4)
}

let url = 'http://www.example.com/path/to/something/'
console.log(getDomain(url))