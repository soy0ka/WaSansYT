setInterval(() => {  
  const comments = document.querySelectorAll('#content-text')
  const votes = document.querySelectorAll('#vote-count-middle')
  let i = 0
  votes.forEach(vote => {
    comments[i].textContent = `헉 이게 뭐라고...\n좋아요 ${vote.textContent.replace(/\\\n/g, '').replace(/\s/g,'')}개 감사합니다`
    i++
  })
}, 1000)

setInterval(() => {
  const images = document.querySelectorAll('#img')
  images.forEach(image => {
    image.src = 'https://yt3.ggpht.com/966LjDCyir5MaS5ucz5nuDVb_RsyywFLSfdcTdQGkCxLZGA1XsGa1Spi9UNu3vm4HuU2N-2rIw=s900-c-k-c0x00ffffff-no-rj'
  })
}, 1000)