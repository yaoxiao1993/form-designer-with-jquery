

$(document).ready(function(){
    $("#add").click(function(){
        $("button").after(function() {
            $( "#dialog" ).dialog({
                modal: true,
                onLoad: function(){
                    $('')
                },
                buttons: {
                    提交: function() {
                        if($("input[name='add']:checked").val()=='文本'){
                            $( '#add' ).after( "<div><input id='inputtext'></input><button>删除</button></div>" );
                        }else if($("input[name=add]:checked").val()=='日期'){
                            $( '#add' ).after( "<div><input id='dateselector' placeholder='请选择日期'></input><button>删除</button></div>" );
                            $( '#dateselector' ).after(function(){
                                $('#dateselector').datepicker();
                            });
                        }
                        $(this).dialog("close")
                    },
                    关闭:function(){
                        $(this).dialog("close")
                    }
                }
            });
        })
    })
})


