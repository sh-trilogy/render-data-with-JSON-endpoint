$.get('http://localhost:3000/api/data', data => {
  data.forEach(idx => {
    $('#base').append(`<div>${idx.question}</div>`);
    $('#base').append(`<p>${idx.options}</p>`);
    $('#base').append(`------------------------------`);
  });
});
