const ListsPrograming = {
  name: "ListsPrograming",
  template:`
  <div>
    <ul>
      <li v-for=" lang in language ">
        {{ lang }}
      </li>
    </ul>
  </div>`,
  data: function(){
    return {
      language: ["C#","Java","Javascript","C++","Cobol","PHP","Python"]
    }
  }
}