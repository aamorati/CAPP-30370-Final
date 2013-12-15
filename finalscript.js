//DART START/STOP
$('#stopButton').on('click', function() { 
	$('#dart').toggleClass('paused'); 
});

//Window resize or load output
$(window).load(function() {
	console.log('Browser width: ' + $(window).width())
});
$(window).resize(function() {
	console.log('Browser width: ' + $(window).width())
});

//Img click output
$('.image').on('click', function() {
	console.log('Alt text: ' + $(this).attr('alt'))
	console.log('Image width: ' + $(this).width())
	console.log('Image height: ' + $(this).height())
});

//Header click output
$('h1').on('click', function() {
	console.log('Header text: ' + $(this).text())
	console.log('Header color: ' + $(this).css('color'))
	console.log('Header size: ' + $(this).css('font-size'))
});
$('h2').on('click', function() {
	console.log('Header text: ' + $(this).text())
	console.log('Header color: ' + $(this).css('color'))
	console.log('Header size: ' + $(this).css('font-size'))
});
$('h3').on('click', function() {
	console.log('Header text: ' + $(this).text())
	console.log('Header color: ' + $(this).css('color'))
	console.log('Header size: ' + $(this).css('font-size'))
});
$('h4').on('click', function() {
	console.log('Header text: ' + $(this).text())
	console.log('Header color: ' + $(this).css('color'))
	console.log('Header size: ' + $(this).css('font-size'))
});
$('h5').on('click', function() {
	console.log('Header text: ' + $(this).text())
	console.log('Header color: ' + $(this).css('color'))
	console.log('Header size: ' + $(this).css('font-size'))
});
$('h6').on('click', function() {
	console.log('Header text: ' + $(this).text())
	console.log('Header color: ' + $(this).css('color'))
	console.log('Header size: ' + $(this).css('font-size'))
});

//Image interactions
$('#rulesguns').on('mouseover', function(){
	$(this).attr('src', 'rulesguns2.png')
});
$('#rulesguns').on('mouseout', function(){
	$(this).attr('src', 'rulesguns.png')
});

$('#ruleszombies').on('mouseover', function(){
	$(this).attr('src', 'ruleszombies2.png')
});
$('#ruleszombies').on('mouseout', function(){
	$(this).attr('src', 'ruleszombies.png')
});

$('#ruleshumans').on('mouseover', function(){
	$(this).attr('src', 'ruleshumans2.png')
});
$('#ruleshumans').on('mouseout', function(){
	$(this).attr('src', 'ruleshumans.png')
});