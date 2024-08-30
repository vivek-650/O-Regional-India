import './App.css'
import Nav from './components/Nav'
import video from './assets/images/heroVideo.mp4'
function App() {

  return (
    <>
      <Nav />
      <div id="page1">
        <div className="video-container"><video src={video} autoPlay muted loop id='video'></video></div>
      </div>
      <div id="page2">
        <div className="container">
          <div className="spoiler">
            <p className="hidden-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus vero dolore repudiandae quasi maxime! Error, corrupti at! Totam sint perspiciatis minus at quasi dolor ad! Eos reiciendis rem sed maiores cum recusandae sunt, architecto itaque ducimus voluptate quod doloribus doloremque asperiores repellendus placeat at! Hic molestiae culpa voluptates minus impedit optio fuga dolorum? Exercitationem inventore debitis iste facilis dicta omnis distinctio est quibusdam pariatur eligendi, praesentium esse quaerat nostrum veritatis nam? Perferendis nemo voluptas sed, fugit, deleniti quod eum architecto corporis doloremque sunt saepe minus impedit obcaecati consectetur totam corrupti, nulla id dolor ipsum odit dolores! Laudantium reprehenderit error ab quam rem amet temporibus accusantium non? Consectetur saepe, dolorem ratione molestiae dolore expedita aliquam nam aperiam neque at et, voluptate delectus, fugit mollitia suscipit voluptates repellendus! Rerum, esse magnam aliquid facere praesentium dolorem corporis, quisquam commodi dolor nisi maiores numquam at delectus sequi aperiam sed quasi. Magni, optio, vitae eaque quo rem laboriosam error quam minus facilis est pariatur possimus molestias doloribus perspiciatis consequuntur mollitia odit amet itaque ipsum! Minima dolor exercitationem voluptatum fugit quod, repellendus perspiciatis aliquam nam repellat ipsam sint suscipit molestias culpa magnam tenetur, commodi est dolorem a corporis, iusto molestiae obcaecati modi nulla quas. Illum, autem.
            </p>
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
