const txts = ["Здравствуйте!\n\
Меня очень заинтересовала ваша вакансия разработчика C++, в которой я вижу отличную возможность применить весь необходимый и знакомый мне стек технологий, для эффективного достижения результата. Особенно привлекла моё внимание работа с \n\
Я занимаюсь разработкой на C++17 (STL) и Qt уже более трёх лет, пишу и ценю оптимизированный, хорошо поддерживаемый и читаемый код.\n\
Буду рад обсудить с вами новые интересные задачи! Мой телеграм для связи: https://t.me/rserg97",
"Здравствуйте!\n\
Меня очень заинтересовала ваша вакансия разработчика C++, в которой я вижу отличную возможность применить весь необходимый и знакомый мне стек технологий, для эффективного достижения результата. Я всегда мечтал работать в таком большом и сплочённом коллективе, как ваш!\n\
Я занимаюсь разработкой на C++17 (STL) и Qt уже более трёх лет, пишу и ценю оптимизированный, хорошо поддерживаемый и читаемый код.\n\
Буду рад обсудить с вами новые интересные задачи! Мой телеграм для связи: https://t.me/rserg97",
"Здравствуйте!\n\
Меня очень заинтересовала ваша вакансия разработчика C++, в которой я вижу отличную возможность применить весь необходимый и знакомый мне стек технологий, для эффективного достижения результата. Больше, чем просто написание кода, меня привлекает перспектива быть причастным к вашему проекту, приносящему настоящую пользу обществу.\n\
Я занимаюсь разработкой на C++17 (STL) и Qt уже более трёх лет, пишу и ценю оптимизированный, хорошо поддерживаемый и читаемый код.\n\
Буду рад обсудить с вами новые интересные задачи! Мой телеграм для связи: https://t.me/rserg97",
"I got very interested in your C++ vacancy that I see as a great opportunity to use my entire skill set, to achieve our desired goals. I always wanted to have real experience in HFT sphere.\n\
I have been developing applications on C++17 (STL) and Qt for more than three years, I write and value highly optimized, maintained and readable code.\n\
Looking forward to discussing new interesting tasks with you! My telegram for connection: https://t.me/rserg97"];

$ = id => document.getElementById(id);

function flash(element, color = "green", duration = 1000) {
    element.style.transition = "none";
    element.style.backgroundColor = color;

    void element.offsetWidth; // apply pending style changes immediately

    element.style.transition = `background-color ${duration}ms`;
    element.style.backgroundColor = "transparent";
}

window.onload = function() {
	var body = document.body;
	var elementArr = $("MainContainer").children;

	for (let i = 0; i < elementArr.length; ++i) {
		elementArr[i].children[0].addEventListener("click", function(event) {
			flash(this);
			navigator.clipboard.writeText(txts[i]);
		});
		elementArr[i].children[1].value = txts[i];
	}

	window.addEventListener("keydown", function(event) {
		var code = event.keyCode - 49;
		if (code < 0 || code > 3) return;
		flash(elementArr[code].children[0]);
		navigator.clipboard.writeText(txts[code]);
	});
}