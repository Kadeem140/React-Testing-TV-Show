import axios from 'axios'

//need to `return` the `axios.get` call, _and_ the data inside your `.then()`.
//This is necessary because when you call `fetchShow` in your useEffect, you need to chain off the promise for a new `.then()`

 const fetchShow = () => {
    return axios
            .get(
                "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
            )
            .then(res => {
                    console.log(res);
                    return res;
            })
            .catch(err => { 
                console.log("There seems to have been a Problem", err)
                return err;
            })
  };

  export default fetchShow;
