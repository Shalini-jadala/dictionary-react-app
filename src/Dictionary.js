import React, { useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
      setPhotos(response.data.photos);
    }

   function search(){
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    

      let pexelsApiKey = "8yMXq7X8o3SxBMfgRd053aOM7apFa7kIpteR9oLpT1xaZYdFm9vx0XEy";
      let pexelsApiUrl = 
      `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers = { Authorization: `${pexelsApiKey}`};
      axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
   }
   
    function handleSubmit(event){
    event.preventDefault();
    search();

    

 }

 function handleKeywordChange(event){
    setKeyword(event.target.value);
 }

 function load(){
    setLoaded(true);
    search();
 }


 if (loaded){
   return (
    <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
             <input type="search" placeholder="Search for a word to see its meaning..."
             onChange= {handleKeywordChange} />
           </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        
    </div>

    );

 } else{
    load();
    return "Loading...";
 }
}

    