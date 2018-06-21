import axios from 'axios'

module.exports = {

  registerUser: function (registerForm) {
    return new Promise((resolve, reject) => {

      axios.post('/user', registerForm).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });

    });
  },

  doLogin: function (registerForm) {

    console.log(JSON.stringify(registerForm));

    return {
      id: 1,
      token: '2u3hmtu34htn2u4nv2u34nut2h34iutnh2',
      name: 'Rodrigo Barreto',
      email: 'rcabarreto@gmail.com'
    }
  },

  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
