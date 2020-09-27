(function()
{
  const problem = {"title":"입력을 의심하지 마세요.","content":"제목 그대로입니다.\n입력을 의심하지 마세요.\n\n입력으로 정수를 준다고 했으면 정수만 입력으로 주어질 겁니다.\n실수를 주거나 하는 일은 없을 겁니다.\n\n실수가 들어온다면 실수를 준다고 하지 정수를 준다고 해놓고 여러분을 시험하지 않습니다.\n즉 아래와 같이 코드를 짜지 마세요.\n\n``` javascript\nconst input = readline();\n\nif (/* 뭔지 모르겠지만 input이 정수인지 확인하는 코드)\n{\n    const integer = parseInt(input);\n    // 이제 input을 가지고 뭔가 하는 코드\n}\nelse\n{\n    // 뭔지 모르겠지만 프로그램을 종료시키는 코드\n}\n```\n\n---\n\n이제 문제입니다.\n하나의 정수를 한줄의 입력으로 줍니다.\n양수면 음수로 음수면 양수로 출력하세요.\n양수의 경우 +기호는 생략합니다.","openTestCases":[{"input":"3","output":"-3"},{"input":"-1234","output":"1234"},{"input":"777","output":"-777"}],"randomTestCase":"","solution":"const input = readline();\r\nconst integer = parseInt(input);\r\nprint(-integer);"}
  loadedProblem(problem);
})();