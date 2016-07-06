jQuery(document).ready(function() { 
var url = new URL(document.location);
var sid = url.pathname;
var id = sid.split('/')[2];
jQuery('.profile_item_links:last-child').last().append("<div class='profile_count_link'><a href='http://getkey.com.ua/finder/"+id+"' target='_blank'><span class='count_link_label'>GetKey</span><span class='profile_count_link_total'><img src='http://getkey.com.ua/finder/favicon.ico' class='profile_link_icon'></span></a></div>");
});
