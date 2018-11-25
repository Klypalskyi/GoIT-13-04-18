'use strict'

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  }
]

document.addEventListener('DOMContentLoaded', clearFilter)

const form = document.querySelector('.js-form');
const laptopCard = document.querySelector('#filteredLaptop').innerHTML.trim();
const laptopList = document.querySelector('#laptops');
const tmp = Handlebars.compile(laptopCard);

// const marckup = tmp(laptops);
// laptopList.insertAdjacentHTML("afterbegin", marckup)
// console.log(marckup);

let filter = { 
  size: [], 
  color: [], 
  release_date: [] 
}

form.addEventListener('submit', HandleFilter);
form.addEventListener('reset', HandleReset);

function filterInLaptops(arr, val) {
  return arr.length === 0 || arr.includes(val);
}

function HandleFilter (evt) {
  evt.preventDefault();

  let checkedFilters = [...document.querySelectorAll('input[type=checkbox]:checked')];

  filter = checkedFilters.reduce(
    (acc, checkbox) => {
      acc[checkbox.name].push(checkbox.value);
  return acc;
}, {
  size: [],
  color: [],
  release_date: []
  }
);

  const getLaptops = laptops.filter(laptop =>{
    const filteredSize = filterInLaptops(filter.size, String(laptop.size));
    const filteredColor = filterInLaptops(filter.color, String(laptop.color));
    const filteredDate = filterInLaptops(filter.release_date, String(laptop.release_date));
    return filteredSize && filteredColor && filteredDate;
  });

  const mkup = tmp({
    laptops: getLaptops
  });

  laptopList.innerHTML = mkup;
}

function HandleReset () {
  clearFilter();
  form.reset();
}

function clearFilter () {
  filter.size = [];
  filter.color = [];
  filter.release_date = [];
  const mkup = tmp({
    laptops
  });
  laptopList.innerHTML = mkup;
}

