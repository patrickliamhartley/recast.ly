// var searchYouTube = (options, callback) => {
//   console.log("searching youtube");

//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     method: 'GET',
//     data: {
//       key: options.key,
//       q: options.query,
//       part: 'snippet',
//       type: 'video',
//       videoEmbeddable: 'true',
//       maxResults: options.max || 5,
//     },
//     success: function(items) { 
//       if (callback) {
//         callback(items);
//       }
//     },

//     failure: function (items) {
//       console.log(items);
//     }
//   });
// };

var searchYouTube = ({key, query, max = 5}, callback) => {
  console.log("searching");
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

window.searchYouTube = searchYouTube;
