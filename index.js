const presidents = [
    {
     Id:1,
     name: 'Xi Jinping',
     country: 'China',
     img: 'photos/china0.jpg',
     info: `Xi Jinping is a Chinese politician who has been serving as General Secretary of the Chinese Communist Party and Chairman of the Central Military Commission since 2012, and President of the People's Republic of China since 2013`,
    },
    {
     Id:1,
     name: 'Joe Biden',
     country: 'USA',
     img: 'photos/state.jpg',
     info: 'Joseph Robinette Biden Jr. is an American politician who is the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009',
    },
    
    {
     Id:1,
     name: 'Cyril Ramaphosa',
     country: 'South Africa',
     img: 'photos/SA.jpg',
     info: 'Matamela Cyril Ramaphosa is a South African businessman and politician who, since 2018, has served as the fifth democratically elected president of South Africa, as well as president of the African National Congress since 2017',
    },

    {
     Id:1,
     name: 'Muhammadu Buhari',
     country: 'Nigeria',
     img: 'photos/Nigeria.jpg',
     info: `Muhammadu Buhari GCFR is a Nigerian politician and President of Nigeria since 2015. He is a retired Nigerian Army Major General who served as the military head of state in Nigeria between December 31, 1983, to August 27, 1985, after taking power in a military coup d'état.`,
    },

    {
     Id:1,
     name: 'Nana Akufo-Addo',
     country: 'Ghana',
     img: 'photos/ghana.jpg',
     info: 'Nana Addo Dankwa Akufo-Addo is a Ghanaian politician who has served as the president of Ghana since 7 January 2017. In 2020, he was re-elected for his second term, which will end on 6 January 2025.',
    },

    {
     Id:1,
     name: 'Yoon Seok-youl',
     country: 'South Korea',
     img:'photos/south-korea.jpg',
     info: 'Yoon Suk-yeol is a South Korean politician, former public prosecutor and lawyer who has served as the 20th President of South Korea since 10 May 2022. He also served as Prosecutor General of South Korea from 2019 to 2021. Born in Seoul, Yoon attended Seoul National University.',
    },

    {
     Id:1,
     name: 'Emmanuel Macron',
     country: 'France',
     img: 'photos/france.jpg',
     info: `Emmanuel Jean-Michel Frédéric Macron is a French politician who has served as president of France since 14 May 2017. Born in Amiens, he studied philosophy at Paris Nanterre University, later completing a master's degree in public affairs at Sciences Po and graduating from the École nationale d'administration in 2004.`,
    },

    {
     Id:1,
     name: 'Kim Jong-un',
     country: 'North Korea',
     img: 'photos/north-korea.jpg',
     info: `Kim Jong-un is a North Korean politician who has been Supreme Leader of North Korea since 2011 and the leader of the Workers' Party of Korea since 2012. He is a son of Kim Jong-il, who was North Korea's second supreme leader from 1994 to 2011, and Ko Yong-hui.`,
    },

    {
     Id:1,
     name: 'Ebrahim Raisi',
     country: 'Iran',
     img:'photos/iran.jpg',
     info: 'Sayyid Ebrahim Raisolsadati, commonly known as Ebrahim Raisi, is an Iranian hardline, Islamist, principlist politician, Muslim jurist, and the eighth and current president of Iran since 3 August 2021, having been elected to the presidency in the 2021 election.',
    },

    {
     Id:1,
     name: 'Sergio Mattarella',
     country: 'Italy',
     img:'photos/italy.jpg',
     info: 'Sergio Mattarella OMRI OMCA is an Italian politician, jurist, academic, and lawyer who has served as the president of Italy since 2015. A Christian leftist politician, Mattarella was a leading member of the Christian Democracy party from the early 1980s until its dissolution.',
    },

]

const img = document.getElementById('person-img');
const presidentName = document.getElementById('president-name');
const country= document.getElementById('country');
const info = document.getElementById('info');

const randomBtn = document.querySelector('.random-btn');

// I set the first president here

let currentPresident= 0;


window.addEventListener('DOMContentLoaded', function(){
      const president = presidents[currentPresident];
      img.src = president.img;
      presidentName.textContent = president.name;
      country.textContent = president.country;
      info.textContent = president.info;
    
});

function showPresident(){
     const president = presidents[currentPresident];
      img.src = president.img;
      presidentName.textContent = president.name;
      country.textContent = president.country;
      info.textContent = president.info;
}

randomBtn.addEventListener('click', function(){
   

    currentPresident = Math.floor(Math.random()* presidents.length);
    showPresident()
})