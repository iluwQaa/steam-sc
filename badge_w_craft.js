jQuery(document).ready(function() { 
	var badge_full_set = jQuery('.badge_craft_button').length;
		jQuery('.profile_badges_header_title').append('<span class="badge_title">(готовых: '+badge_full_set+')');
		jQuery('.playerAvatar a, .badge_friendwithgamecard a, .persona a').each( function(){
			var purl = jQuery(this).attr('href');
			jQuery(this).attr('href', purl+'/gamecards/'+appid);
		});
		
		jQuery('.badge_craft_button').on('click', function(e){
			e.preventDefault();
			var badge_url = new URL(event.target);
			var path = badge_url.pathname.split('/');
			var craft_badge_url = badge_url.protocol+'//'+badge_url.hostname+'/'+path[1]+'/'+path[2];
			var badge_id = path[4];
			var badge_craft = '"'+craft_badge_url+'","'+badge_id+'","1","0"';
			//console.info('"'+craft_badge_url+'","'+badge_id+'","1","0"');
			console.info(badge_craft);
			
			if (confirm('Are you sure ?')) {
				
				jQuery.get('https://steamcommunity-a.akamaihd.net/public/javascript/jquery-1.11.1.min.js',function(){
					console.info('jQ success');
					var $J = jQuery;
					jQuery.get('https://steamcommunity-a.akamaihd.net/public/javascript/badges.js?l=russian',function(data){
						console.info('badge success');
						Profile_CraftGameBadge(badge_craft);
					});
				});
				
			

				//Profile_CraftGameBadge(badge_craft);
			}
			//PProfile_CraftGameBadge(badge_craft);
		});
});