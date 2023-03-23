let testResultList = document.querySelector('.tests-results-summary');

function createNewTestResult(data) {
  let { category, score, icon, alt_text } = data;
  let listItem = document.createElement('li');
  let image = document.createElement('img');
  image.alt = alt_text;
  image.src = icon;

  let testCategory = document.createElement('h4');
  testCategory.innerHTML = category;

  let paragraph = document.createElement('p');
  let span = document.createElement('span');
  span.innerHTML = score;

  paragraph.appendChild(span);
  paragraph.innerHTML += ' / 100';
  listItem.appendChild(image);
  listItem.appendChild(testCategory);
  listItem.appendChild(paragraph);

  return listItem;
}

fetch('./app/js/data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((item) => {
      testResultList.appendChild(createNewTestResult(item));
    });
  });
