

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
                            $( '#preview' ).after( "<div ><input id='inputtext'></input><button id='delete'>删除</button></div>" );
                            bindListener();
                        }else if($("input[name=add]:checked").val()=='日期'){
                            $( '#preview' ).after( "<div><input id='dateselector' placeholder='请选择日期'></input><button id='delete'>删除</button></div>" );
                            $( '#dateselector' ).after(function(){
                                $('#dateselector').datepicker();
                            });
                            bindListener();
                        }
                        $(this).dialog("close")
                    },
                    关闭:function(){
                        $(this).dialog("close")
                    }
                }
            });
        })
        function bindListener(){
            $("#delete").unbind().click(function(){
                $(this).parent().remove()
            })
        }
        $("#preview").click(function(){
            $("#add").hide();
            if($("#delete").length>0){
                $("#delete").hide();
            }
            $(this).text('编辑');
        })
        
    })
})


