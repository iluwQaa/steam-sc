var url = new URL(document.location);
var sid = url.pathname;
var id = sid.split('/')[2];
var appid = sid.split('/')[4];

jQuery('.playerAvatar a, .badge_friendwithgamecard a, .persona a').each( function(){
	var purl = jQuery(this).attr('href');
	jQuery(this).attr('href', purl+'/gamecards/'+appid);
});
