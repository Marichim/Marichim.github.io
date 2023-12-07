$(document).ready(function () {

})


var iho_object = {
  "lychee": {
    "image": "00300000_0_1_lychee.gif",
    "video": "00300000_0_1_lychee.mp4",
    "model_neus": "lychee_neus.glb",
    "model_neus2": "lychee_neus.glb",
    "model_neus3": "lychee_neus.glb",
    "model_nerf": "lychee_nerf.glb",
    "model_womask": "lychee_womask.glb"
  },
  "banana": {
    "image": "00300000_0_1_banana.gif",
    "video": "00300000_0_1_banana.mp4",
    "model_neus": "banana_wmask.glb",
    "model_neus2": "banana_wmask.glb",
    "model_neus3": "banana_wmask.glb",
    "model_nerf": "lychee_nerf.glb",
    "model_womask": "banana_neus_womask.glb"
  },
  "penbag": {
    "image": "00300000_0_1_penbag.gif",
    "video": "00300000_0_1_penbag.mp4",
    "model_neus": "penbag_neus.glb",
    "model_neus2": "penbag_neus.glb",
    "model_neus3": "penbag_neus.glb",
    "model_nerf": "penbag_nerf.glb",
    "model_womask": "banana_neus_womask.glb"
  },
  "tool": {
    "image": "00300000_0_1_tool.gif",
    "video": "00300000_0_1_tool.mp4",
    "model_neus": "tool_neus.glb",
    "model_neus2": "tool_neus.glb",
    "model_neus3": "tool_neus.glb",
    "model_nerf": "penbag_nerf.glb",
    "model_womask": "banana_neus_womask.glb"
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

function handleClick_image(button) {
  var buttonId = button.id;
  modelChange_image(buttonId)
}

function modelChange_image(buttonId) {
  v1 = document.getElementById("image")
  m1 = document.getElementById("model_neus")
  
  v1.setAttribute('src', iho_object[buttonId]['image']);
  m1.setAttribute('src', iho_object[buttonId]['model_neus']);
}


function handleClick_iho2(button) {
  var buttonId = button.id;
  update_buttons_iho2(buttonId)
}

function update_buttons_iho2(buttonId) {

  m2 = document.getElementById("model_nerf")
  m4 = document.getElementById("model_neus2")
  
  m2.setAttribute('src', iho_object[buttonId]['model_nerf']);
  m4.setAttribute('src', iho_object[buttonId]['model_neus2']);
}

function handleClick_iho3(button) {
  var buttonId = button.id;
  update_buttons_iho3(buttonId)
}

function update_buttons_iho3(buttonId) {

  m3 = document.getElementById("model_womask")
  m5 = document.getElementById("model_neus3")
  
  m3.setAttribute('src', iho_object[buttonId]['model_womask']);
  m5.setAttribute('src', iho_object[buttonId]['model_neus3']);
}
