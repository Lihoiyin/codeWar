//https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const DNA = "ATTGC"
const DNA2 = ['A', 'T', 'T', 'G', 'C']

const DNAconverter = (DNA) => {
  let i = 0
  let newDNAstr = ''
  let newDNAarr = []
  switch (typeof(DNA)) {
    case 'string':
      for(const element of DNA) {
        switch (element) {
          case 'A':
            newDNAstr += 'T'
            break;
          case 'T':
            newDNAstr += 'A'
            break;
          case 'G':
            newDNAstr += 'C'
            break;
          default:
            newDNAstr += 'G'
            break;
        }
        i++
      }
      return newDNAstr
    default:
      for(const element of DNA) {
        switch (element) {
          case 'A':
            newDNAarr.push('T')
            break;
          case 'T':
            newDNAarr.push('A')
            break;
          case 'G':
            newDNAarr.push('C')
            break;
          default:
            newDNAarr.push('G')
            break;
        }
        i++
      }
      return newDNAarr
  }
}

console.log(DNAconverter(DNA))
console.log(DNAconverter(DNA2))
