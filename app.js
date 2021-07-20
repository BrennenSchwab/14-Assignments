const searchVal = $("#giphyInput");
const gifArea = $("#gifArea");


function addGIF(res){
    //want to use this function to retreive a random gif that is from the data determined by the search term
    let results = res.data.length;
    if(results){
        let random = Math.floor(Math.random() * results);
        let newArea = $("<div>", {
            class: "col-md-4 mb-8" 
        });
        let newGIF = $("<img>", {
            src: res.data[random].images.original.url,
            class: "w-100"

        });
        newArea.append(newGIF);
        gifArea.append(newArea);
        
    }
    }
    
$("form").on("submit", async function(e){
    e.preventDefault();
    
    let searchInput = searchVal.val();
    searchVal.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search",{
        params: {
            q: searchInput,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGIF(response.data);
});

$("#remove").on("click", function(){
    gifArea.empty();
})

