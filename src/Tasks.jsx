function Task(position, shift, type, taskName, description, ) {
  this.position = position,
  this.shift = shift,
  this.type = type,
  this.taskName = taskName,
  this.description = description
}

const tasks = [];

tasks.push(new Task(
  "Box", "Opening,", "Opening", 
  "Setup Condiment Stands", 
  "Take the clean dishes off the rack and place them in the condiment stands (front and back)"
));

export default tasks;