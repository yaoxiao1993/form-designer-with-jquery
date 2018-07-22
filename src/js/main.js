

$(document).ready(function(){
    $("button").click(function(){
        $("button").after(function() {
            $( "#dialog" ).dialog({
                modal: true,
                buttons: {
                    文本: function() {
                        $( '#add' ).after( "wenben" );
                    },
                    日期:function(){
                        $("#add").after("riqi")
                    }
                }
            });
        })
    })
})


