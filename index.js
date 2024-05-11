setInterval(() => {  
  const comments = document.querySelectorAll('#content-text')
  const votes = document.querySelectorAll('#vote-count-middle')
  let i = 0
  votes.forEach(vote => {
    const likesCount = Number(vote.textContent.replace(/\\\n/g, '').replace(/\s/g,''))
    const displayLike = isNaN(likeCount) ? '0' : likesCount
    
    comments[i].textContent = `헉 이게 뭐라고...\n좋아요 ${displayLike}개 감사합니다`
    i++
  })
}, 1000)

setInterval(() => {
  const images = document.querySelectorAll('#img')
  images.forEach(image => {
    image.src = 'https://i.namu.wiki/i/tDLhwfXlzuxzU6_L4_ty3fsNxQYfgP_iynQKkr9uZvOEyqsr9Sqbr2w2sGPUGbfImvoF055KOeah_oRBweqq0g.gif'
  })
}, 1000)
