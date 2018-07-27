

$(document).ready(function(){

    $("#add").click(function(){
        $("button").after(function() {
            $( "#dialog" ).dialog({
                modal: true,
                buttons: {
                    提交: function() {
                        if($("input[name='add']:checked").val()=='文本'){
                            $( '#preview' ).after( "<div ><input class='inputtext'></input><button class='delete'>删除</button></div>" );
                            bindListener();
                        }else if($("input[name=add]:checked").val()=='日期'){
                            $( '#preview' ).after( "<div><input class='dateselector' placeholder='请选择日期'></input><button class='delete'>删除</button></div>");
                            $( '.dateselector' ).after(function(){
                                $('.dateselector').datepicker();
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
    })

    $("#preview").click(function(){
        if($("#preview").text()=='预览'){
            $("#add").hide();
            if($(".delete").length>0){
                $(".delete").hide();
            }
            $(this).text('编辑');
            $(".inputtext").attr("disabled","disabled");
        }else if($("#preview").text()=='编辑'){
            $("#add").show();
            $(".delete").show();
            $(this).text('预览');
            $(".inputtext").removeAttr("disabled");
        }
    })

        function bindListener(){
            $(".delete").unbind().click(function(){
                $(this).parent().remove()
            })
        }

    })
