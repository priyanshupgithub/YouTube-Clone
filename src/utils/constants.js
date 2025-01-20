const GOOGLE_API_KEY = "AIzaSyDIDXyTHxZ9gznsdbNg9W075GFi0LoOWZs";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "/complete/search?client=firefox&ds=yt&q=";

//  export const YOUTUBE_SEARCH_API =
// "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=YOUR_QUERY&key=AIzaSyDIDXyTHxZ9gznsdbNg9W075GFi0LoOWZs"
