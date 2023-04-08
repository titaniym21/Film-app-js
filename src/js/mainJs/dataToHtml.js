// функция для получения html кода для слайдера


async function getHtmlData(masData) {
  let htmlData = '';
  for (let i = 0; i < masData.length; i++) {
      if (masData[i].poster_path === null) {
        
      } 
      else {
          const image = await fetch(`https://image.tmdb.org/t/p/w500${masData[i].poster_path}`);
          const imageBlob = await image.blob();
          const title = masData[i].original_title;
          //console.log(imageBlob);
          const imageUrl = URL.createObjectURL(imageBlob);
          htmlData += `<div class="item_wrapper">
          <img src="${imageUrl}" alt="${i}" class="image_item_slider">
          <div class="overlay">
          <h4>${title}</h4>
          <div class="button-container">
            <div class="watch">
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </div>
            <div class="queue">
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
              </svg>
            </div>
            <div class="star queue">
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            </div>
            <div class="star queue">
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>`;
      }

  }
  return htmlData;
}

module.exports = getHtmlData;

//   <div class="item_buttons">
          //     <img src="../img/play-button.png" alt="" class="item_button_img">
          //     <img src="../img/info-button.png" alt="" class="item_button_img">
          //     <img src="../img/add.png" alt="" class="item_button_img">
          //   </div>

// const AddCards = () => {
//     let carousel_width = document.getElementsByClassName("card-carousel")[0]
//         .clientWidth;

//     let btn_width =
//         document.getElementsByClassName("carousel-btn")[0].clientWidth +
//         document.getElementsByClassName("carousel-btn")[1].clientWidth;

//     let num_cards = num_cards_GLOBAL;
//     let card_margin = 2;
//     let initial_width = 1920;
//     let initial_height = 1080;

//     let scale =
//         (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
//         initial_width;

//     let content_titles = document.getElementsByClassName("content-title");

//     for (let i = 0; i < content_titles.length; i++) {
//         content_titles[i].style.marginLeft = `${card_margin}px`;
//     }

//     let carousels = document.getElementsByClassName("card-carousel");
//     for (let i = 0; i < carousels.length; i++) {
//         let not_chosen = [];

//         for (let c = 0; c < cards.length; c++) {
//             not_chosen.push(c);
//         }

//         for (let j = 0; j < cards.length; j++) {
//             let chosen_index = Math.floor(Math.random() * not_chosen.length);

//             let chosen_card = cards[not_chosen[chosen_index]];

//             not_chosen.splice(chosen_index, 1);

//             let card = document.createElement("div");
//             card.classList.add("card");
//             card.style.backgroundImage = `url(${chosen_card.background})`;

//             //If image doesn't load
//             card.style.backgroundColor = `#333`;

//             card.style.width = initial_width * (scale / 100) + "px";
//             card.style.height = initial_height * (scale / 100) + "px";
//             card.style.margin = `0px ${card_margin}px`;
//             card.style.minWidth = initial_width * (scale / 100) + "px";
//             card.style.minHeight = initial_height * (scale / 100) + "px";

//             let overlay = document.createElement("div");
//             overlay.classList.add("overlay");

//             let title = document.createElement("h4");
//             title.innerText = chosen_card.title;
//             let description = document.createElement("p");
//             description.innerText = "1h 25m";

//             let button_container = document.createElement("div");
//             button_container.classList.add("button-container");

//             let button1 = document.createElement("div");
//             button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
//   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
// </svg>`;
//             button1.classList.add("watch");

//             let button2 = document.createElement("div");
//             button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
//   <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
//   <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
// </svg>`;
//             button2.classList.add("queue");

//             button2.addEventListener("click", function () {
//                 ToggleWatchLater(`${chosen_card.title}`);
//             });

//             let button3 = document.createElement("div");
//             button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
//   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
// </svg>`;
//             button3.classList.add("star");
//             button3.classList.add("queue");

//             button3.addEventListener("click", function () {
//                 if (button3.children[0].style.color != "rgb(255, 255, 87)") {
//                     button3.children[0].style.color = "rgb(255, 255, 87)";
//                 } else {
//                     button3.children[0].style.color = "white";
//                 }
//             });

//             let button4 = document.createElement("div");
//             button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//   <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
// </svg>`;
//             button4.classList.add("star");
//             button4.classList.add("queue");

//             button4.addEventListener("click", function () {
//                 if (document.getElementsByClassName("movie-desc").length > 0) {
//                     // If the modal exists
//                     document.getElementsByClassName("movie-desc")[0].remove();
//                 } else {
//                     let modal = document.createElement("div");
//                     modal.classList.add("movie-desc");

//                     let modal_content = document.createElement("div");
//                     modal_content.classList.add("modal-content");

//                     let bg_image = document.createElement("div");
//                     bg_image.classList.add("desc-image");
//                     bg_image.style.backgroundImage = `url(${chosen_card.background})`;
//                     let image_cover = document.createElement("div");

//                     let close_btn = document.createElement("div");
//                     close_btn.classList.add("close-btn");
//                     close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
//   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
// </svg>`;

//                     close_btn.addEventListener("click", function () {
//                         this.parentElement.parentElement.parentElement.parentElement.remove();
//                     });

//                     image_cover.append(close_btn);
//                     bg_image.append(image_cover);

//                     let top_info = document.createElement("div");
//                     top_info.classList.add("desc-top");
//                     let title = document.createElement("h1");
//                     title.innerText = chosen_card.title;

//                     let btn_selection = document.createElement("div");
//                     btn_selection.classList.add("button-selection");
//                     btn_selection.innerHTML = `
//                         <div class="watch">
//                             <h3>Play</h3>
//                             <svg fill="currentColor" viewBox="0 0 16 16">
//                                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                                 <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
//                             </svg>
//                         </div>
//                         <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
//                             <h3>Watch Later</h3>
//                             <svg fill="currentColor" viewBox="0 0 16 16">
//                                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//                             </svg>
//                         </div>`;

//                     top_info.append(title, btn_selection);

//                     let mid_info = document.createElement("div");
//                     mid_info.classList.add("desc-mid");
//                     mid_info.innerHTML = `<p>${chosen_card.description}</p>`;

//                     let bottom_info = document.createElement("div");
//                     bottom_info.classList.add("desc-bottom");

//                     let cast_slider = document.createElement("div");
//                     cast_slider.classList.add("cast");

//                     bottom_info.append(cast_slider);

//                     modal_content.append(
//                         bg_image,
//                         top_info,
//                         mid_info,
//                         bottom_info
//                     );
//                     modal.append(modal_content);

//                     document.body.append(modal);

//                     document.body.addEventListener("click", function (event) {
//                         if (!event.target.classList.contains("modal-content")) {
//                             //modal.remove();
//                             console.log(1);
//                         }
//                     });

//                     // Set the height for the modal image
//                     let total_width = document.getElementsByClassName(
//                         "modal-content"
//                     )[0].clientWidth;
//                     let large_scale = (100 * total_width) / 1920;
//                     document.getElementsByClassName(
//                         "desc-image"
//                     )[0].style.height = `${1080 * (large_scale / 100)}px`;

//                     // Set image for cast
//                     for (let c = 0; c < cast.length; c++) {
//                         let cast_block = document.createElement("div");
//                         cast_block.classList.add("cast-card");
//                         cast_block.style.backgroundImage = `url("${cast[c].picture}")`;
//                         cast_block.style.width = 100 / cast.length - 5 + "%";
//                         cast_block.style.height = `calc(${
//                             document.getElementsByClassName("cast")[0]
//                                 .clientWidth / cast.length
//                         }"px" - 5%)`;
//                         cast_slider.append(cast_block);
//                     }
//                 }
//             });

//             button_container.append(button1, button2, button3, button4);

//             overlay.append(title, description, button_container);
//             card.append(overlay);
//             if (j < num_cards) {
//                 carousels[i].insertBefore(
//                     card,
//                     carousels[i].children[carousels[i].children.length - 1]
//                 );
//             } else {
//                 card.style.display = "none";
//                 carousels[i].insertBefore(
//                     card,
//                     carousels[i].children[carousels[i].children.length - 1]
//                 );
//             }
//         }
//     }
// };
