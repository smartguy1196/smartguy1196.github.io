function feed( filters, handler ){
  var init = {
        "github" : {
          "owner" : "smartguy1196",
          "repo" : "smartguy1196.github.io",
        },
        "twitter" : {
          "account" : "smartguy1196"
        }
      },
      api;
  if( filters.source = "github" ){
    api = "http://api.github.com/repos/" + init.owner + "/" + init.repo + "/issues"
  }else if( filters.source = "twitter" ){
    
  }
}
