images = ["https://www.revistarap.com.br/wp-content/uploads/2018/11/imagem1249_1.jpg", "https://th.bing.com/th/id/OIP.xzM8a9TA53oIAKI8bFTzKwHaGA?pid=ImgDet&w=580&h=470&rs=1", "https://i.ytimg.com/vi/3Y_ORa-esC4/maxresdefault.jpg", "https://th.bing.com/th/id/OIP.Okw5SjpOvteXhwGTh8boHAHaE4?pid=ImgDet&rs=1"];
var i = 0;
function proximoslide() {
    if (i == 9) { i = 0; } document.getElementById("album").src = images[i];
    i++;
}
function changeImageOver() { document.getElementById("img_desenho").src = "ria.jpg"; } 
function changeImageLeave() { document.getElementById("img_desenho").src = "hun.webp"; }