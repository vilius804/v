let photosUrl = [
    "https://madeinvilnius.lt/wp-content/uploads/2017/06/1-4.jpg",
    "https://www.eika.lt/wp-content/uploads/2017/09/4-Large.jpg",
    "https://www.interjeras.lt/tl_files/catalogs/news/2019/07_Liepa/19_LiveSquare/DAL_5807.jpg",
    "https://cdn2.hellovilnius.lt/wp-content/uploads/2019/08/DSC_2748-1024x682.jpg",
    "https://g3.dcdn.lt/images/pix/projektas-live-square-78775495.jpg",
    "https://www.lrt.lt/img/2019/07/18/475049-332467-756x425.jpg",
    "https://i.ytimg.com/vi/UucBQ4SA6DU/maxresdefault.jpg",
    "https://www.newhouse.lt/wp-content/uploads/2017/10/live-square-web3.jpg",
    "https://s1.15min.lt/images/photos/2019/11/22/original/mms-parduotuve-times-square-5dd7fb9d088f7.jpg",
    "https://thenypost.files.wordpress.com/2019/05/cre-times-square-1.jpg?quality=90&strip=all&w=978&h=652&crop=1"
];

const defaultPhotoUrl = "https://cjmart.jp/en/upload/save_image/0126_190824_mp4otl_y_3.jpg";

const showButton = document.querySelector("#showButton");
const mixButton = document.querySelector("#mixButton");
const photoList = document.querySelector("#photoList");

showButton.addEventListener("click", () => {
    photosUrl.forEach(photo => {
       const listItem = document.createElement("li");
       const image = document.createElement("img");
       image.src = photo;

       image.addEventListener("dblclick", () =>  {
           image.src = defaultPhotoUrl;
        });

       listItem.className = "col-12 col-md-6 col-lg-3";
       listItem.appendChild(image);
       photoList.appendChild(listItem);
    });

    showButton.remove();
});

mixButton.addEventListener("click", () => {
    photosUrl = shuffle(photosUrl);
    let images = document.querySelectorAll("img");

    images.forEach((image, i) => {
        image.src = photosUrl[i];
    });
});

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        let temp = a[i];
        a[i] = a[rand];
        a[rand] = temp;
    }
    return a;
}