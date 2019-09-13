
exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'pencil', description: 'Equipped with eraser'}, // 1 
    {resource_name: 'pen', description: "Don't make mistakes, there's no eraser!"}, // 2
    {resource_name: 'paper', description: 'Save a tree. Buy an iPad'}, // 3
    {resource_name: 'laptop', description: 'Convenient and stylish!'}, // 4 
    {resource_name: 'scanner', description: 'Scan if you can. A pdf can take you far!'}, // 5
    {resource_name: 'human capital', description: 'Less is more.'}, // 6
  ])
};
 