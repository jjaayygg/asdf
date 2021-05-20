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
      'https://www.mozilla.org/media/img/firefox/template/page-image-master.1b6efe3d5631.jpg'
   
    await client.login()
   for(let x = 0;x<10;x++){
    // Upload Photo to feed or story, just configure 'post' to 'feed' or 'story'
    const { media } = await client.uploadPhoto({ photo: photo, caption: 'testing', post: 'feed' })
    console.log(`https://www.instagram.com/p/${media.code}/`)
   }
  })()
