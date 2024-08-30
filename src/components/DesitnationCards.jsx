import React from 'react'
import '../styles/DestinationCards.css';

const data = [
  {img:'https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/poster/shillong.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg' , name:'Shillong',description:'Colonial-era charm, a landscape of rolling green and pristine mountains come together to bring to life the city of Shillong,'},
  {img:'https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/SOU_new.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg' , name:'Statue of Unity',description:'Silhouetted against the surrounding Vindhya and Satpura mountain ranges, the colossal statue almost seems to pierce the skyline'},
  {img:'' , name:'Kavaratti',description:'Exerting a magnetic pull over scuba divers, snorkellers and nature lovers, the 4,200-sq-km of immaculate archipelago lagoons,'},
  {img:'' , name:'Wayanad',description:'A coffer of coffee, cardamom and tea plantations, which envelope the land with lush emerald greenery and fill the air with a heady aroma, Wayanad,'},
  {img:'' , name:'Dharamsala',description:'A pristine green expanse ringed by the mist-shrouded Himalayas and a dense cover of oak, deodar, pine and conifers,'},
  {img:'' , name:'Thrissur',description:'Often referred to as the cultural capital of Kerala, Thrissur is a centre point of energetic festivities. '},
  {img:'' , name:'Ooty',description:'A quaint hill town, perched against the backdrop of Doddabetta (2,637 m), the highest peak in the Nilgiris, Ootacamund, in Tamil Nadu,'}
]
function DesitnationCards() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default DesitnationCards;