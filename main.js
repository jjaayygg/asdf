// const express = require('express');
// var search = require('youtube-search');
// const yts = require( 'yt-search' )
// async function r(search){
// const r = await yts( search )
// return r
// //const videos = r.videos.slice( 0, 3 )
// //videos.forEach( function ( v ) {
// //	const views = String( v.views ).padStart( 10, ' ' )
// //	console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
// //} )

// }








// const app = express();

// var opts = {
//   maxResults: 10,
//   key: 'AIzaSyDBN1fxv0pKHluWe3IYi6GjqjP8SvfmcK4'
// };
// app.get('*',(req, res) => {
// console.log(';')
// r(req.url || 'despacito' ).then((r)=>{res.json(r)})
//   //  search(req.url, opts, function(err, results) {
//  //      if(err) return console.log(err);
      
//  //     res.json(results);          
//   // });
      



// })





// app.listen(300,()=>{console.log('server started on port 300')})

const Instagram = require('instagram-web-api')


const { username, password } = {username:'photo_mania_5033', password:'pjay325476'}
//const client = new Instagram({ username, password })
 
// client
//   .login()
//   .then(() => {
//     client
//       .getProfile()
//       .then(console.log)
//   })

 
  
console.log('asdf1')

const FileCookieStore = require('tough-cookie-filestore2')

const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username, password, cookieStore })
 console.log(username, password)
;(async () => {
  // URL or path of photo
  const photo =
    'https://www.mozilla.org/media/img/firefox/template/page-image-master.1b6efe3d5631.jpg'
 
//  await client.login()
 
  // Upload Photo to feed or story, just configure 'post' to 'feed' or 'story'
 // const { media } = await client.uploadPhoto({ photo: photo, caption: 'testing', post: 'feed' })
  console.log('done')
  console.log(`https://www.instagram.com/p/${media.code}/`)
})()  