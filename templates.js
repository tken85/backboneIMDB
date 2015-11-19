module.exports = {
  header: [
    "<h1>IMDme</h1>"
  ].join(""),
  form: [
    '<form id="newMovie" class="hidden">',
      '<input type="text" name="title" class="new form-control" placeholder="Movie Title">',
      '<input type="text" name="cover" class="new form-control" placeholder="Cover Photo URL">',
      '<input type="text" name="plot" class="new form-control" placeholder="Plot Synopsis">',
      '<input type="text" name="release" class="new form-control" placeholder="Release Date">',
      '<input type="text" name="rating" class="new form-control" placeholder="Rating out of 5">',
      '<input type="submit" class="form-control newMovButton" name="submit">',
    '</form>',
    '<button type"submit" class="showForm" name="button">Add Movie</button>'
  ].join(""),
  movieTmpl: [
    '<article>',
      '<h3><%= title %> (<%= release %>)</h3>',
      '<div class="row">',
        '<div class="col-md-12"><img src="<%= cover_URL %>">',
        '</div>',
      '</div>',
      '<div class="plot"><b>Synopsis:</b> <%= plot %></div>',
      '<div class="rating"><b>Rating: </b><%= rating %>/5</div>',
      '<form class="fixMovie hidden">',
        '<input type="text" class="form-control" name="edTitle" value="<%= title %>">',
        '<input type="text" class="form-control" name="edCover" value="<%= cover_URL %>">',
        '<input type="text" class="form-control" name="edPlot" value="<%= plot %>">',
        '<input type="text" class="form-control" name="edRelease" value="<%= release %>">',
        '<input type="text" class="form-control" name="edRating" value="<%= rating %>">',
        '<input type="submit" class="form-control" name="submit">',
      '</form>',
      '<button type="submit" class="deleteMovie" name="delete">Delete</button>',
      '<button type="submit" class="editMovie" name="edit">Edit</button>',
    '</article>'
  ].join(""),
  sorting: [
    '<div class="row noMarg">',
      '<div class="col-md-4 noEither"><button type="submit" class="sortDate" name="dateButton">By Date</button></div>',
      '<div class="col-md-4 noEither"><button type="submit" class="sortRating" name="rateButton">By Rating</button></div>',
      '<div class="col-md-4 noEither"><button type="submit" class="sortTitle" name="titleButton">By Title</button></div>',
  '</div>'

  ].join(""),

};
