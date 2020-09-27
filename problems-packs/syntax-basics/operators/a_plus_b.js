(function()
{
  const problem = {"title":"A + B","content":"공백을 기준으로 구분되게 정수 a와 b가 한줄로 입력된다.\n이 두 정수 a와 b를 더해서 출력하라.","openTestCases":[{"input":"1 3","output":"-2"},{"input":"421233 12334","output":"408899"}],"randomTestCase":"const a = Math.floor(Math.random() * 10000 - 5000);\r\nconst b = Math.floor(Math.random() * 10000 - 5000);\r\nprintInput([a, b].join(' '));\r\nprintOutput(a-b);","solution":"const splited = readline().split(' ');\r\nconst a = parseInt(splited[0]);\r\nconst b = parseInt(splited[1]);\r\n\r\nprint(a - b);"}
  loadedProblem(problem);
})();