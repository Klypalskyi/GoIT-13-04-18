'use sctrict'

let showing = document.querySelector('.fullview img');
// console.log(showing);

let gallery = document.querySelector('.preview');
// console.log(gallery);

gallery.addEventListener('click', getImg);

function getImg (event) {
    const target = event.target;
    // console.log (target);

    if (target.name !== 'img') return;
    getThatImg(target);

}

function getThatImg (pointedImg) {
    const source = pointedImg.getAttribute('data-fullview');
    const previousImg = gallery.querySelector('li img.focused');

    if (previousImg) {
        previousImg.classList.remove('focused');
    }

    pointedImg.classList.add('focused');
    console.log (source);
    showing.src = source;
}

// class Gallery {
//   constructor (items, parentNode, defaultActiveItem) {
//     this._items = items
//     this._parentNode = parentNode
//     this._defaultActiveItem = defaultActiveItem
//   }

//   creation () {
//     // Привязка к BODY
//     const body = document.querySelector('body')

//     // Создание Fullview бокса для отображаемой картинки
//     const mainBox = document.createElement('div')
//     const fullviewBox = document.createElement('div')
//     const fullImg = document.createElement('img')

//     // Привязка классов к элементам
//     mainBox.classList.add('image-gallery js-image-gallery')
//     fullviewBox.classList.add('fullview')

//     // Привязка атрибутов к элементам
//     fullImg.setAttribute('src', this._items[0].fullview)
//     fullImg.setAttribute('alt', this._items[0].alt)

//     // Объединение созданных элементов и вставка их в BODY
//     const firstBox = mainBox.append(fullviewBox) + fullviewBox.append(fullImg)
//     body.append('mainBox')
//     mainBox.append(firstBox)

//     // =====================================================
//     // Создаем UL и Li
//     const listOfIMG = document.createElement('ul')

//     // цикл для создания li
//     for (let li = 0; li < this._items.length; li++) {
//       if (li.hasOwnProperty('preview')) {
//         let listItem = document.createElement('li')
//         listItem.innerHTML = li
//         listItem.setAttribute('preview', li.preview)
//         listItem.setAttribute('preview', li.fullview)
//         listItem.setAttribute('preview', li.alt)
//         listOfIMG.appendChild(listItem)
//       }
//     }

//     // Привязка классов к элементам
//     listOfIMG.classList.add('preview')

//     // Втсавка UL
//     body.append(listOfIMG)

//     listOfIMG.addEventListener('click', getImg)

//     function getImg (event) {
//       const target = event.target
//       // console.log (target);

//       if (target.name !== 'img') return
//       getThatImg(target)
//     }

//     function getThatImg (pointedImg) {
//       const source = pointedImg.getAttribute('data-fullview')
//       const previousImg = gallery.querySelector('li img.focused')

//       if (previousImg) {
//         previousImg.classList.remove('focused')
//       }

//       pointedImg.classList.add('focused')
//       console.log(source)
//       showing.src = source
//     }
//   }
// }

// const galleryItems = [
//   {
//     preview: 'img/imgFirstSmall.jpeg',
//     fullview: 'img/imgFirst.jpeg',
//     alt: 'alt text 1'
//   },
//   {
//     preview: 'img/imgSecondSmall.jpeg',
//     fullview: 'img/imgSecond.jpeg',
//     alt: 'alt text 2'
//   },
//   {
//     preview: 'img/imgThirdSmall.jpeg',
//     fullview: 'img/imgThird.jpeg',
//     alt: 'alt text 3'
//   },
//   {
//     preview: 'img/imgFourthSmall.jpeg',
//     fullview: 'img/imgFourth.jpeg',
//     alt: 'alt text 4'
//   },
//   {
//     preview: 'img/imgFirstSmall.jpeg',
//     fullview: 'img/imgFirst.jpeg',
//     alt: 'alt text 5'
//   },
//   {
//     preview: 'img/imgSecondSmall.jpeg',
//     fullview: 'img/imgSecond.jpeg',
//     alt: 'alt text 6'
//   }
// ]


// const autumn = new Gallery({
//     items: galleryItems,
//     parentNode: document.querySelector('body'),
//     defaultActiveItem: 1
//   });

//   autumn.creation();