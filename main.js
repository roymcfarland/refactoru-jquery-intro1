$(document).on('ready', function() {

	$('.first-button').click(function() {
		console.log('You gotta fight')
	})

	$('.first-button').click(function() {
		$('.first-section').append('<p>You gotta fight</p>')
	})

	$('.second-button').click(function() {
		console.log('For your right')
		$('.second-section').append('<p>For your right</p>')
	})

	$('.third-button').click(function() {
		console.log('To party!')
		$('.third-section').append('<ul><li>list item 1</li><li>list item 2</li><li>list item 3</li></ul>')
	})
  
});