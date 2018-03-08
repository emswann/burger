$(document).ready(() => {
  $('#add-burger').on('submit', event => {
    event.preventDefault();

    var newBurger = {
      name: $('#burger-name').val().trim()
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      console.log('Created new burger');
      location.reload();
    });
  });

  /* Cannot use => due to this reference. */
  $('.edible').on('click', function(event) {
    var id = $(this).data('id');

    var newState = {
      devoured: true
    };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newState
    }).then(() => {
      console.log('Changed state', newState);
      location.reload();
    });
  });
});