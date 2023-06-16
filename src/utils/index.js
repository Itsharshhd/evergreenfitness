const exerciseOptions = {

  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8610aae3bfmsh8420009d7f23541p19933cjsn9b0d7dc14ac2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

}

const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8610aae3bfmsh8420009d7f23541p19933cjsn9b0d7dc14ac2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


export{
  exerciseOptions,
  youtubeOptions,
  fetchData
}
