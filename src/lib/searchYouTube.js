var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      // videoEmbeddable: 'true',
      maxResults: options.max || 5,
    },
    success: function(data) { 
      callback(data);
    },

    // options: {
    //   query: options,
    //   max: 5,
    //   key: 'AIzaSyCZOXYSBF414fWEDMIvPitBn4HdIa_ktW8' 
    // }
    

  // success: callback()
  });
 
  // TODO
};

window.searchYouTube = searchYouTube;
