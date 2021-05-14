$(function () {
	function display(bool) {
		if (bool) {
			$(".container").show();

		} else {
			$(".container").hide();
		}
	}
	display(false)
    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
	document.onkeyup = function (data) {
		if (data.which == 27) {
			//$.post('http://esx_ambulancejob/escape', '{}');
            $.post('http://esx_ambulancejob/escape', JSON.stringify({}));
		}
	};

	$('#revivepatient').click(function(e){
		e.preventDefault(); // Prevent form from submitting
        $.post('http://esx_ambulancejob/EMS_Commands', JSON.stringify({
		emtcmd: 0
	    }));
	})
	$('#healsmall').click(function(){
		$.post('http://esx_ambulancejob/EMS_Commands', JSON.stringify({
		emtcmd: 1
		}));
	})
	$('#healbig').click(function(){
		$.post('http://esx_ambulancejob/EMS_Commands', JSON.stringify({
		emtcmd: 2
		}));
	})
	$('#putincar').click(function(){
		$.post('http://esx_ambulancejob/EMS_Commands', JSON.stringify({
		emtcmd: 3
		}));
	})
	$('#findpatient').click(function(){
		$.post('http://esx_ambulancejob/EMS_Commands', JSON.stringify({
		emtcmd: 4
		}));
	})

	$('.container').hide();
});