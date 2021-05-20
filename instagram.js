
const Instagram = require('instagram-web-api')
const { username, password } = {username:'photo_mania_5053', password:'pjay325476'}
 
//const client = new Instagram({ username, password })
 

  const FileCookieStore = require('tough-cookie-filestore2')
 
  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })
   console.log('adf')
  ;(async () => {
    // URL or path of photo
    const photo =
      'https://source.unsplash.com/user/erondu/1080x1080'
   
    await client.login()
   while(true){
    // Upload Photo to feed or story, just configure 'post' to 'feed' or 'story'
    const { media } = await client.uploadPhoto({ photo: photo, caption: '#photooftheday #instagood #nofilter #picoftheday #love #nature #swag #lifeisgood #instadaily #selfie #instamood #bestoftheday #followme #likeforlike #like4like #follow4follow #followforfollow #f4f #instafood #foodporn #food #foodie #goodeats #vegetarian #vegan #friendship #hungry #homemade #travel #vacation', post: 'feed' })
    console.log(`https://www.instagram.com/p/${media.code}/`)
   }
  })()
console.log('last line')
