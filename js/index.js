$(document).ready(function () {

})


var iho_object = {
  "lychee": {
    "image": "00300000_0_10_lychee.png",
    "video": "00300000_0_1_lychee.mp4",
    "model_neus": "lychee_neus.glb",
    "model_neus2": "lychee_neus.glb",
    "model_nerf": "lychee_nerf.glb",
    "model_womask": "lychee_womask.glb"
  },
  "banana": {
    "image": "00300000_0_32_banana_wmask.png",
    "video": "00300000_0_1_banana.mp4",
    "model_neus": "banana_wmask.glb",
    "model_neus2": "banana_wmask.glb",
    "model_womask": "banana_neus_womask.glb"
  },
  "penbag": {
    "image": "00300000_0_3_penbag.png",
    "video": "00300000_0_1_penbag.mp4",
    "model_neus": "penbag_neus.glb",
    "model_neus2": "penbag_neus.glb",
    "model_nerf": "penbag_nerf.glb"
  },
  "tool": {
    "image": "00300000_0_8_tool.png",
    "video": "00300000_0_1_tool.mp4",
    "model_neus": "tool_neus.glb",
  }
}


function handleClick(button) {
  var buttonId = button.id;
  toggleSubButtons(buttonId)
}

function toggleSubButtons(buttonId) {
  var subButtons = document.getElementsByClassName('sub-button');
  for (var i = 0; i < subButtons.length; i++) {
    subButtons[i].style.display = 'none';
  }
  var selectedButton = document.getElementById('sub-button-' + buttonId);
  selectedButton.style.display = 'block';
}

function modelChange_video(button) {
  var show_video = document.getElementById('show_video');
  var show_image = document.getElementById('show_image');
  show_video.style.display = 'block';

  var buttonId = button.id;
  v1 = document.getElementById("video")
  m1 = document.getElementById("model_neus")
  v1.setAttribute('src', iho_object[buttonId]['video']);
  m1.setAttribute('src', iho_object[buttonId]['model_neus']);
}

function modelChange_image(button) {
  var show_video = document.getElementById('show_video');
  var show_image = document.getElementById('show_image');
  show_image.style.display = 'block';

  var buttonId = button.id;
  v1 = document.getElementById("image")
  m1 = document.getElementById("model_neus")
  v1.setAttribute('src', public_object[buttonId]['image']);
  m1.setAttribute('src', public_object[buttonId]['model_neus']);
}


function handleClick_iho(button) {
  var buttonId = button.id;
  update_buttons_iho(buttonId)
  modelChange_image(buttonId)
  modelChange_video(buttonId)
}

function update_buttons_iho(buttonId) {

  m1 = document.getElementById("model_neus")
  m2 = document.getElementById("model_nerf")
  m3 = document.getElementById("model_womask")
  m4 = document.getElementById("model_neus2")

  m1.setAttribute('src', iho_object[buttonId]['model_neus']);
  m2.setAttribute('src', iho_object[buttonId]['model_nerf']);
  m3.setAttribute('src', iho_object[buttonId]['model_womask']);
  m4.setAttribute('src', iho_object[buttonId]['model_neus2']);
}
