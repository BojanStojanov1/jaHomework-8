$(document).ready (function(){
    $("#btn").click(function(){
        let myText = $('#text').val();
        let myColor = $('#color').val();
        
        if (myText === '') {
            $('#heading3').text('error');
            return;
        }
        function validcolor(color) {
            let s = new Option().style;
            s.color = color;
            return s.color !== '';
        }
        if (!validcolor(myColor)) {
            $('#heading3').text('error');
            return;
        }
        $('#heading1').text(myText).css('color', myColor);

    })
})