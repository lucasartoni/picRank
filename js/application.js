console.log('### picRank started ###');

var firstPicture = new Picture();
var secondPicture = new Picture();
var pic1 = new PictureView({model: firstPicture});
var pic2 = new PictureView({model: secondPicture});

pic1.model.set('title','first pic');
pic1.model.set('picURL', 'http://farm3.staticflickr.com/2879/11400105483_ea3297c590_q.jpg');
pic1.model.set('pageURL','http://www.flickr.com/photos/lucasartoni/11400105483/');

pic2.model.set('title','second pic');
pic2.model.set('picURL', 'http://farm4.staticflickr.com/3684/11399661703_597c750814_q.jpg');
pic2.model.set('pageURL','http://www.flickr.com/photos/lucasartoni/11399661703/');


$('#pick').append(pic1.el);
$('#pick').append(pic2.el);

console.log('### picRank completed ###');
