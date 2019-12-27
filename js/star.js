function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function getStar(url, id) {
  const h2 = document.getElementById(id);
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data["stargazers_count"];
  let span = createNode('span');
  span.innerHTML = `${authors}`;
  return append(h2, span);
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
}

function tryMe(arg) {
  document.write(arg);
}