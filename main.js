function toggleBlock(blockNumber) {
  var blocks = document.getElementsByClassName('block');
  for (var i = 0; i < blocks.length; i++) {
    if (i < blockNumber - 1) {
      blocks[i].classList.add('block' + (i + 2));
      blocks[i].classList.remove('block' + (i + 1));
    } else if (i === blockNumber - 1) {
      blocks[i].classList.add('block1');
      blocks[i].classList.remove('block2');
      blocks[i].classList.remove('block3');
    } else if (i > blockNumber - 1){
      blocks[i].classList.remove('block1');
      blocks[i].classList.remove('block2');
      blocks[i].classList.add('block' + (i + 1));
    }
  }
}