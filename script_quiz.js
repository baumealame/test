$(document).ready(function(){
    var currentQuestion = 1;
    var totalQuestions = 12;
    
    // 질문과 답변 영역 초기화
    $(".question").hide();
    showQuestion(currentQuestion);
    
    $("#prevBtn").hide();
    $("#submit").hide();
    
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
            hideQuestion(currentQuestion);
            currentQuestion++;
            showQuestion(currentQuestion);
            
            // 이전 버튼 보이기
            $("#prevBtn").show();
            
        }// 마지막 질문이라면 결과 보기 버튼 활성화
            if (currentQuestion === totalQuestions) {
                $("#submit").show();
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
       $('#v3').val() == "g" ? F++ : G ++;
       $('#v4').val() == "m" ? M++ : I ++;

       $('#v5').val() == "h" ? H++ : E ++;
       $('#v6').val() == "r" ? R++ : N ++;
       $('#v7').val() == "g" ? F++ : G ++;
       $('#v8').val() == "m" ? M++ : I ++;

       $('#v9').val() == "h" ? H++ : E ++;
       $('#v10').val() == "g" ? F++ : G ++;
       $('#v11').val() == "r" ? R++ : N ++;
       $('#v12').val() == "m" ? M++ : I ++;
      

        
//각 유형에 대한 결과 페이지로 이동하기
if (H > E) {
    if (R > N) {
        if (F > G) {
            if (M > I) {
                window.location.href = "result01.html";
            } else {
                window.location.href = "result09.html";
            }
        } else {
            if (M > I) {
                window.location.href = "result05.html";
            } else {
                window.location.href = "result13.html";
            }
        }
    } else {
        if (F > G) {
            if (M > I) {
                window.location.href = "result03.html";
            } else {
                window.location.href = "result11.html";
            }
        } else {
            if (M > I) {
                window.location.href = "result07.html";
            } else {
                window.location.href = "result15.html";
            }
        }
    }
} else {
    if (R > N) {
        if (F > G) {
            if (M > I) {
                window.location.href = "result02.html";
            } else {
                window.location.href = "result10.html";
            }
        } else {
            if (M > I) {
                window.location.href = "result06.html";
            } else {
                window.location.href = "result14.html";
            }
        }
    } else {
        if (F > G) {
            if (M > I) {
                window.location.href = "result04.html";
            } else {
                window.location.href = "result12.html";
            }
        } else {
            if (M > I) {
                window.location.href = "result08.html";
            } else {
                window.location.href = "result16.html";
            }
        }
    }
}
       
          $('html, body').animate({ scrollTop: ($('.results').offset().top)}, 2000);

    });