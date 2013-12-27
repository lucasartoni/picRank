console.log('### picRank started ###');

var firstPicture = new Picture();
var secondPicture = new Picture();
var pic1 = new PictureView({model: firstPicture});
var pic2 = new PictureView({model: secondPicture});

pic1.model.set('title','first pic');
pic2.model.set('title','second pic');

$('#main').append(pic1.el);
$('#main').append(pic2.el);

console.log('### picRank completed ###');
