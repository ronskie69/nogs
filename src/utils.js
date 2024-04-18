export default {
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.substr(1)
    },
    duplicates: (list, todo_name) => {
        return new Promise((resolve, reject) => {
          let duplicates = list.find(todo => todo.name.toLowerCase() === todo_name.toLowerCase());
          if(!duplicates){
            resolve()
          } else {
            reject(`${todo_name} is taken!`)
          }
        })
      }
}