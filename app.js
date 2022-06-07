const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<h1>${name}</h1>
<h2><a href="https://github.com/${github}">GitHub</a></h2>
</body>
</html>
    `;
};

console.log(name, github);
console.log(generatePage(name, github));