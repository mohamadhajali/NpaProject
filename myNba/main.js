render = function (playarTeam) {
  console.log(playarTeam);
  $(`#continar`).empty();

  const source = $(`#template`).html();
  const template = Handlebars.compile(source);

  const newHTML = template({ playarTeam });
  $(`#continar`).append(newHTML);
};

feachData = function () {
  $(`#continar`).empty();
  const val = $("#nameOFteam").val();
  $.get(`/teams/${val}`, function (response) {
    render(response);
  });
};
const ImageForError = function (img) {
  $(img).attr(
    "src",
    "https://rukminim1.flixcart.com/image/416/416/poster/e/n/a/cristiano-ronaldo-poster-small-ron-90035-original-imaefbj9fz3wzyge.jpeg?q=70"
  );
};

const addToDreamTeam = function (Clicked_id) {
  button = document.getElementById(Clicked_id);
  let playerDiv1 = $(button).closest(".playerCard");
  let playerDiv2 = playerDiv1.closest("div");
  let name = playerDiv2.find("#name").text();
  let pos = playerDiv2.find("#pos").text();
  let heightFeet = playerDiv2.find("#heightFeet").text();
  let fullname = name.split(" ");
  let player = {
    firstName: fullname[0],
    lastName: fullname[1],
    pos: pos,
    heightFeet: heightFeet,
  };
  $.post("/addPlayer", player, function (res) {});
};
displayDreamTeam = function () {
  $.get("/dreamTeam", (response) => {
    render(response);
  });
};
