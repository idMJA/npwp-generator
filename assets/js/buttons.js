/*!
 * NPWPbyWarkim v.1 (https://npwp.warkim.com)
 * Author: Warkim (Warkim Rapii)
 * Website: www.warkim.com
 * Contact: me@warkim.com
 * Facebook: warkim.rapii
 * Instagram: warkimwarkim
 *
 * Copyright 2020 npwpbywarkim
 * Shareware license
 * Do not modification, remove any attributes in sources or in this program.
 */
$(document).ready(function () {

    var link_github   = 'https://github.com/MJ1532/npwp-generator'; // url download app

	$("#download").click(function () {
		$.confirm({
			icon: "fa fa-exclamation",
			title: "Hello",
			type: "green",
			columnClass: "medium",
			content: "Free download to use offline on your computer. Don't forget to leave a star on our Github!",
			buttons: {
				Download: {
					text: '<i class="fa fa-folder-open"></i> Github',
					btnClass: "btn-light",
					closeAnimation: "rotate",
					action: function () {
						$.alert({
							icon: "fa fa-folder-open",
							title: "Github",
							type: "green",
							columnClass: "medium",
                            // content: '<p class="h3 text-danger">Maaf Download Belum Tersedia!</p><br>Maaf Gaes, tool ini baru saja di rilis, tunggu beberapa waktu kedepan ya dan selamat menikmati versi online.',
                            content: 'Please click the link <a href="'+link_github+'" target="_blank" class="text-success">here</a> to go to the github page or via the following URL <a href="'+link_github+'" target="_blank" class="text-success">'+link_github+'</a>',
							buttons: {
								tutup: {
									text: "Close"
								}
							}
						})
					}
				},
			}
		})
	}), $("#info").click(function () {
		$.confirm({
			theme: "supervan",
			title: '<img src="assets/img/mj1532.png">',
			content: '<h2>MJ1532</h2><p><strong>NPWP Generator</strong> made for all of you who have a relationship in tax. Recommendations for course/training participants, lecturers, teachers or trainers, workers and tax consultants.</p><p>You can use this tool to generate NPWP and NPWP Validation. This tool carries standard and accepted NPWP, user friendly, interactive, lightweight and of course uses a modern library.<br><p><br><a href="'+link_github+'" target ="_blank"><p class="h4">Source Code</p></a>',
			closeIcon: !0,
			columnClass: "medium",
			buttons: {
				Tutup: {
					text: "Close",
					keys: ["x", "esc"]
				},
				Bugs: {
					text: "Github",
					key: "y",
					action: function () {
						window.open("https://Github.com/MJ1532", "_blank")
					}
				}
			}
		})
	})
});