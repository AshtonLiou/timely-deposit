const data = {
    "icon1": {
        src: "./img/News1.jpg",
        title: "title1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in nobis dolore quia corrupti, possimus corporis, facilis quasi vero culpa natus deleniti voluptate iure sequi nihil! Ex sint velit autem."
    },
    "icon2": {
        src: "./img/News2.jpg",
        title: "title2",
        text: "Lorem ipsum dolor, sit amet con sectetur adipisicing elit. Vitae est et, at autem iste reprehenderit exercitationem doloribus corporis enim voluptates, provident laboriosam debitis tempora officiis commodi! Corrupti amet doloribus ducimus."
    },
    "icon3": {
        src: "./img/News3.jpg",
        title: "title3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, illum aliquid a provident omnis dicta et voluptatem fuga iure consequatur enim commodi quod alias ipsam, veritatis dolor dolores deleniti repudiandae?"
    },
    "icon4": {
        src: "./img/News4.jpg",
        title: "title4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa corrupti tenetur animi, vel culpa! Iure at tenetur aspernatur aliquid vel optio, ipsa reiciendis voluptatibus facilis praesentium qui, repudiandae laudantium."
    },
    "icon5": {
        src: "./img/News5.jpg",
        title: "title5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint soluta? Id consectetur, quia qui harum quas aspernatur iusto, voluptatibus labore numquam consequatur earum, sit saepe et voluptate enim eius."
    }
};

$.each(data, (id, info) => {
    $("#" + id).click(() => {
        $("#mapImg").attr("src", info.src);
        $("#mapTitle").text(info.title);
        $("#mapParagraph").text(info.text);
    });
});