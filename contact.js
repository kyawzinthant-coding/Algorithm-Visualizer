const container = document.querySelector(".contactContainer");

const data = [
    {
        link: "https://www.facebook.com/profile.php?id=100072437530178"
    },
    {
        link: "https://www.linkedin.com/in/kyaw-zin-thant-303342202/"
    },
    {
        link: "https://twitter.com/KyawVer"
    },
    {
        link: "https://github.com/kyawzinthant22"
    }
];

data.forEach((item, index) => {
    const anchor = document.createElement('a');
    anchor.href = item.link;
    const image = document.createElement('img');
    image.src = `./assets/social/${index + 1}.png`;
    image.width = 50;
    image.alt = "Social Media Icon";
    anchor.appendChild(image);
    container.appendChild(anchor);
});
