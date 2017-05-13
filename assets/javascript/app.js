
var correct = 0;

var incorrect = 0;
	
	$("#questions-answers").hide();

	$("#start-button").on("click", function() {
		$("#start-button").html("");
		$("#questions-answers").show();
		$("#done-button").show();
		countdown();

	});	

function countdown() {
    var seconds = 15;
    counter();

    function counter() {
        seconds--;
        console.log(seconds);
        $("#done-button").on("click", function() {
			answerCheck();
			seconds = 0;
		})

        document.getElementById("countdown-timer").innerHTML = "<h3><b>Time Remaining: </b><span>" + seconds + "</span></h3>";
        if( seconds > 0 ) {
            setTimeout(counter, 1000);
        } else {
        	$("#questions-answers").hide();
        	$("#results").html("<h2>Time's Up!</h2> <h4>Correct: " + correct + "</h4> <h4>Incorrect: " + incorrect + "</h4>");
            }
        }
    };

function answerCheck() {
	correct = 0;
	incorrect = 0;

	if ($("input[name=q1c]").prop("checked")) {
		correct++;
		console.log("correct");
	}

	else {
		incorrect++;
		console.log("incorrect");
	}

	if ($("input[name=q2c]").prop("checked")) {
		correct++;
		console.log("correct");
	}

	else {
		incorrect++;
		console.log("incorrect");
	}

	if ($("input[name=q3b]").prop("checked")) {
		correct++;
		console.log("correct");
	}

	else {
		incorrect++;
		console.log("incorrect");
	}

	if ($("input[name=q4c]").prop("checked")) {
		correct++;
		console.log("correct");
	}

	else {
		incorrect++;
		console.log("incorrect");
	}

};
