$(document).ready(function () {

})

var data_test = {
  "iho_gamebox": {
    "video": "static/videos/game_box.mp4",
    "model": "static/models/iho/NeuS_Color_iho_gamebox_2048.glb"
  },
  // "pink_peach": {
  //   "video": "static/videos/pink_peach.mp4",
  //   "model": "static/models/NeuS_RLnn_pinkpeach_2048_rot.glb"
  // },
  // "ghost_bear": {
  //   "video": "static/videos/ghost_bear.mp4",
  //   "model": "static/models/NeuS_RLnn_ghostbear_2048_rot.glb"
  // },
  // "drink": {
  //   "video": "static/videos/drink.mp4",
  //   "model": "static/models/"
  // }
}

var iho_object = {
  "lychee": {
    "image": "00300000_0_10_lychee.jpg",
    "video": "00300000_0_1_lychee.mp4",
    "model_neus": "lychee_neus.glb",
    "model_nerf": "lychee_nerf.glb",
    "model_womask": "lychee_womask.glb"
  },
  "banana": {
    "image": "00300000_0_32_banana_wmask.jpg",
    "video": "00300000_0_1_banana.mp4",
    "model_neus": "banana_wmask.glb",
    "model_womask": "banana_neus_womask.glb"
  },
  "penbag": {
    "image": "00300000_0_3_penbag.jpg",
    "video": "00300000_0_1_penbag.mp4",
    "model_neus": "penbag_neus.glb",
    "model_nerf": "penbag_nerf.glb"
  },
  "tool": {
    "image": "00300000_0_8_tool.jpg",
    "video": "00300000_0_1_tool.mp4",
    "model_neus": "tool_neus.glb",
  }
}

var public_object = {
  "doll_002": {
    "image": "static/image/omniobject3d/doll_002.jpg",
    "model": "static/models/omniobject3d/doll_002.glb"
  },
  "doll_008": {
    "image": "static/image/omniobject3d/doll_008.jpg",
    "model": "static/models/omniobject3d/doll_008.glb"
  },
  "doll_037": {
    "image": "static/image/omniobject3d/doll_037.jpg",
    "model": "static/models/omniobject3d/doll_037.glb"
  },
  "doll_049": {
    "image": "static/image/omniobject3d/doll_049.jpg",
    "model": "static/models/omniobject3d/doll_049.glb"
  },
  "doll_062": {
    "image": "static/image/omniobject3d/doll_062.jpg",
    "model": "static/models/omniobject3d/doll_062.glb"
  },
  "doll_074": {
    "image": "static/image/omniobject3d/doll_074.jpg",
    "model": "static/models/omniobject3d/doll_074.glb"
  },
  "toy_animals_001": {
    "image": "static/image/omniobject3d/toy_animals_001.jpg",
    "model": "static/models/omniobject3d/toy_animals_001.glb"
  },
  "toy_animals_005": {
    "image": "static/image/omniobject3d/toy_animals_005.jpg",
    "model": "static/models/omniobject3d/toy_animals_005.glb"
  },
  "toy_animals_016": {
    "image": "static/image/omniobject3d/toy_animals_016.jpg",
    "model": "static/models/omniobject3d/toy_animals_016.glb"
  },
  "toy_animals_019": {
    "image": "static/image/omniobject3d/toy_animals_019.jpg",
    "model": "static/models/omniobject3d/toy_animals_019.glb"
  },
  "toy_animals_059": {
    "image": "static/image/omniobject3d/toy_animals_059.jpg",
    "model": "static/models/omniobject3d/toy_animals_059.glb"
  },
  "doll_085": {
    "image": "static/image/omniobject3d/doll_085.jpg",
    "model": "static/models/omniobject3d/doll_085.glb"
  },
  "bmvs_bear": {
    "image": "static/image/blendedmvs/bmvs_bear.jpg",
    "model": "static/models/blendedmvs/bmvs_bear.glb"
  },
  "bmvs_clock": {
    "image": "static/image/blendedmvs/bmvs_clock.jpg",
    "model": "static/models/blendedmvs/bmvs_clock.glb"
  },
  "bmvs_dog": {
    "image": "static/image/blendedmvs/bmvs_dog.jpg",
    "model": "static/models/blendedmvs/bmvs_dog.glb"
  },
  "bmvs_durian": {
    "image": "static/image/blendedmvs/bmvs_durian.jpg",
    "model": "static/models/blendedmvs/bmvs_durian.glb"
  },
  "bmvs_jade": {
    "image": "static/image/blendedmvs/bmvs_jade.jpg",
    "model": "static/models/blendedmvs/bmvs_jade.glb"
  },
  "bmvs_man": {
    "image": "static/image/blendedmvs/bmvs_man.jpg",
    "model": "static/models/blendedmvs/bmvs_man.glb"
  },
  "bmvs_sculpture": {
    "image": "static/image/blendedmvs/bmvs_sculpture.jpg",
    "model": "static/models/blendedmvs/bmvs_sculpture.glb"
  },
  "bmvs_stone": {
    "image": "static/image/blendedmvs/bmvs_stone.jpg",
    "model": "static/models/blendedmvs/bmvs_stone.glb"
  },
  "dtu_24": {
    "image": "static/image/dtu/dtu_24.jpg",
    "model": "static/models/dtu/dtu_24.glb"
  },
  "dtu_37": {
    "image": "static/image/dtu/dtu_37.jpg",
    "model": "static/models/dtu/dtu_37.glb"
  },
  "dtu_40": {
    "image": "static/image/dtu/dtu_40.jpg",
    "model": "static/models/dtu/dtu_40.glb"
  },
  "dtu_55": {
    "image": "static/image/dtu/dtu_55.jpg",
    "model": "static/models/dtu/dtu_55.glb"
  },
  "dtu_63": {
    "image": "static/image/dtu/dtu_63.jpg",
    "model": "static/models/dtu/dtu_63.glb"
  },
  "dtu_65": {
    "image": "static/image/dtu/dtu_65.jpg",
    "model": "static/models/dtu/dtu_65.glb"
  },
  "dtu_69": {
    "image": "static/image/dtu/dtu_69.jpg",
    "model": "static/models/dtu/dtu_69.glb"
  },
  "dtu_83": {
    "image": "static/image/dtu/dtu_83.jpg",
    "model": "static/models/dtu/dtu_83.glb"
  },
  "dtu_97": {
    "image": "static/image/dtu/dtu_97.jpg",
    "model": "static/models/dtu/dtu_97.glb"
  },
  "dtu_105": {
    "image": "static/image/dtu/dtu_105.jpg",
    "model": "static/models/dtu/dtu_105.glb"
  },
  "dtu_106": {
    "image": "static/image/dtu/dtu_106.jpg",
    "model": "static/models/dtu/dtu_106.glb"
  },
  "dtu_110": {
    "image": "static/image/dtu/dtu_110.jpg",
    "model": "static/models/dtu/dtu_110.glb"
  },
  "dtu_114": {
    "image": "static/image/dtu/dtu_114.jpg",
    "model": "static/models/dtu/dtu_114.glb"
  },
  "dtu_118": {
    "image": "static/image/dtu/dtu_118.jpg",
    "model": "static/models/dtu/dtu_118.glb"
  },
  "dtu_122": {
    "image": "static/image/dtu/dtu_122.jpg",
    "model": "static/models/dtu/dtu_122.glb"
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
  show_image.style.display = 'none';

  var buttonId = button.id;
  v1 = document.getElementById("video")
  m1 = document.getElementById("model_neus")
  v1.setAttribute('src', iho_object[buttonId]['video']);
  m1.setAttribute('src', iho_object[buttonId]['model_neus']);
}

function modelChange_image(button) {
  var show_video = document.getElementById('show_video');
  var show_image = document.getElementById('show_image');
  show_video.style.display = 'none';
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
}

function update_buttons_iho(buttonId) {

  m1 = document.getElementById("model_neus")
  m2 = document.getElementById("model_nerf")
  m3 = document.getElementById("model_womask")

  m1.setAttribute('src', iho_object[buttonId]['model_neus']);
  m2.setAttribute('src', iho_object[buttonId]['model_nerf']);
  m3.setAttribute('src', iho_object[buttonId]['model_womask']);
}
