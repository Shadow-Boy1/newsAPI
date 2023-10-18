import React, { useEffect } from 'react'
import './App.css';
export default function App() {

  // const [news, setnews] = useState([]);

  const url = "https://newsapi.org/v2/everything?q=&apikey=1d3a0eefa97b499d8fbc4ee93eeb40b7";
  const fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.articles);



  }

  useEffect(() => {
    fetchData();
  })

  return (
    <>
      {/* <div className="box">
        {
          news.map(element => {
            console.log(element)
            return (
              <div class="card" style={{ width: "400px", height: "500px", marginLeft: "4em" }}>
                <img src={element.urlToImage} style={{ width: "20rem", height: "20em" }} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{element.author}</h5>
                  <p class="card-text" style={{ width: "400px", height: "400px", font: "bold" }}>{element.content}</p>
                  <a href={element.url} target='_blank' class="btn btn-primary">Read More</a>
                </div>
              </div>)
          })
        }
      </div> */}

    </>
  )
}
