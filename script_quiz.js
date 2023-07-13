

$(document).ready(function(){
    var currentQuestion = 0;
    var totalQuestions = 13;
    
    
    $("#quiz_heading").hide();
    
    // 질문과 답변 영역 초기화
    $(".question").hide();
    showQuestion(currentQuestion);
    
    
    $("#prevBtn").hide();
    
    // 테스트 시작하기 버튼 클릭 시 이벤트 처리
    $("#startBtn").click(function(){
        currentQuestion = 1;
        showQuestion(currentQuestion);
        $("#start").hide();
        $("#startBtn").hide();
        $("#quiz_heading").show();
    });
    
    // 이전 버튼 클릭 시 이벤트 처리
    $("#prevBtn").click(function(){
        if (currentQuestion > 1) {
            hideQuestion(currentQuestion);
            currentQuestion--;
            showQuestion(currentQuestion);
            
            // 첫 번째 질문이 아닌 경우에만 이전 버튼 보이기
            if (currentQuestion === 1) {
                $("#prevBtn").hide();
            }
        }
    });
    
    // 다음 버튼 클릭 시 이벤트 처리
    $(".answerBtn").click(function(){
        if (currentQuestion < totalQuestions) {
            
            
            // 0.5초 후에 다음 질문 표시
            setTimeout(function() {
                hideQuestion(currentQuestion);
            currentQuestion++;
            showQuestion(currentQuestion);
            }, 500);
            
            // 이전 버튼 보이기
            $("#prevBtn").show();
            
        }
    });
    
    

    
    // 질문 보이기
    function showQuestion(questionNumber) {
        $("#question" + questionNumber).show();
    }
    
    // 질문 숨기기
    function hideQuestion(questionNumber) {
        $("#question" + questionNumber).hide();
    }
});

$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);

    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').addClass('active');
})

//Show more info about the test and references

    $("#submit").click (function(){
      event.preventDefault();
      var E=0, H=0, R=0, N=0, F=0, G=0, M=0, I=0;

     //Berekenen waarden van de verschillende types
       $('#v1').val() == "h" ? H++ : E ++;
       $('#v2').val() == "r" ? R++ : N ++;
       $('#v3').val() == "f" ? F++ : G ++;
       $('#v4').val() == "m" ? M++ : I ++;

       $('#v5').val() == "h" ? H++ : E ++;
       $('#v6').val() == "r" ? R++ : N ++;
       $('#v7').val() == "f" ? F++ : G ++;
       $('#v8').val() == "m" ? M++ : I ++;

       $('#v9').val() == "h" ? H++ : E ++;
       $('#v10').val() == "f" ? F++ : G ++;
       $('#v11').val() == "r" ? R++ : N ++;
       $('#v12').val() == "m" ? M++ : I ++;
      

        
//각 유형에 대한 결과 페이지로 이동하기
if (H > E) {
    if (R > N) {
        if (F > G) {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result01";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result09";
            }
        } else {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result05";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result13";
            }
        }
    } else {
        if (F > G) {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result03";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result11";
            }
        } else {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result07";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result15";
            }
        }
    }
} else {
    if (R > N) {
        if (F > G) {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result02";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result10";
            }
        } else {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result06";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result14";
            }
        }
    } else {
        if (F > G) {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result04";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result12";
            }
        } else {
            if (M > I) {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result08";
            } else {
                parent.window.location.href = "https://www.baumealame.com/game/myreadertype/result16";
            }
        }
    }
}
       
          $('html, body').animate({ scrollTop: ($('.results').offset().top)}, 2000);

    });