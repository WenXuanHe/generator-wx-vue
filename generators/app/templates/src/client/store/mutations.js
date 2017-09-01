export default {
    chooseByID ({Persons}, id) {
      Persons.forEach(function(item){
          if(item.id === id){
              item.choosed = true;
          }
      });
    },

    increment(state){
        state.count++;
    }
  }